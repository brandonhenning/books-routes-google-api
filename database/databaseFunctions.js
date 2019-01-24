const pool = require('./postgresConfig')
const log = console.log

async function createTables () {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users(email text UNIQUE, password text, collectionid decimal)')
        log('Database pool successfully created.')
    } catch (error) {log('Erorr creating postgres database tables', error)}
}

async function createUser (email, password) {
    try {
        await pool.query(`INSERT INTO users(email, password) VALUES ('${email}', '${password}');`)
    } catch (error) {log('Error creating user in database', error) }
}

async function authenticateUser (email, password) {
    try {
        const user = await pool.query(`SELECT email, password FROM users WHERE email='${email}' AND password='${password}'`)
        if (user.rows.length > 0)
            {return user.rows}
    } catch (error) {log('Error authenticating user from database', error)}
}

module.exports = {
    createTables,
    createUser,
    authenticateUser
}

