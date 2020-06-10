const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test1',
  password: '1234',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM todo', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
}