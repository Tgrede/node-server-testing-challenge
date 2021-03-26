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
  })
})