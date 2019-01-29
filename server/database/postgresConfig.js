const pg = require('pg')

const pool = new pg.Pool({
    user: 'jaredhenning',
    host: '127.0.0.1',
    database: 'bookspractice',
    password: 'mypass',
    port: '5432'
})

module.exports = pool
