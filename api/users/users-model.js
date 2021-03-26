const db = require('../../data/db-config')

const find = () => {
  return db('users')
}

const findById = (id) => {
  return db('users')
  .where('user_id', id).first()
}

const insert = async (user) => {
  const [user_id] = await db('users').insert(user)
  return findById(user_id)
}

const deleteById = async (id) => {
  return db('users').where('user_id', id).del()
}

module.exports = {
  find,
  findById,
  insert,
  deleteById
}