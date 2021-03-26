const db = require('../../data/db-config')
const Users = require('./users-model')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('users').truncate
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})


describe('Users model', () => {

  it('works', () => {
    expect(true).toBe(true)
  })

  describe('find', () => {
    it('can retrieve all users', async () => {
      let users = await Users.find()
      expect(users).toHaveLength(2)
    })
    it('contains an expected {user_id, username, password, role_id}', async () => {
      let users = await Users.find()
      expect(users[0]).toMatchObject({
        user_id: 1,
        username: 'bob',
        password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq',
        role_id: 1
      })
    })
  })

  describe('findById', () => {
    it('can get user by its id', async () => {
      const bob = await Users.findById(1)
      expect(bob).toMatchObject({
        user_id: 1,
        username: 'bob',
        password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq',
        role_id: 1
      })
    })
  })
 
  describe('insert', () => {
    it('can create a new user', async () => {
      const admin = {
        username: 'admin',
        password: '1234',
        role_id: 1
      }
      await Users.insert(admin)

      expect(await db('users')).toHaveLength(3)
      expect(await db('users').where({user_id:3}).first()).toMatchObject(admin)
    })
  })

  describe('delete', () => {
    it('can remove a user', async () => {
      await Users.deleteById(2)
      expect(await db('users')).toHaveLength(1)
    })
  })
})