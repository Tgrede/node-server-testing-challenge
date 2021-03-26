const db = require('../../data/db-config')
const server = require('../server')
const request = require('supertest')


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

it('works', () => {
  expect(true).toBe(true)
})
it('process.env.DB_ENV must be testing', () => {
  expect(process.env.DB_ENV).toBe('testing')
}) 

describe('users endpoints', () => {
  describe('[GET] /api/users', () => {
    it('returns all users', async () => {
      const res = await request(server).get('/api/users')
      expect(res.body).toHaveLength(2)
    })
  })
  describe('[POST] /api/users', () => {
    it('adds a user to db', async () => {
     
    })
  })
})