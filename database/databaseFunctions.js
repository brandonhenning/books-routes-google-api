const pool = require('./postgresConfig')
const log = console.log

async function createTables () {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users(email text UNIQUE, password text, collectionid decimal)')
        log('Database pool successfully created.')
    } catch (error) {log('Erorr creating postgres database tables', error)}
}

module.exports = {
    createTables
}
