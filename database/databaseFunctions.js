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

async function updateEmail (email, password, newEmail) {
    try {
        await pool.query(`UPDATE users SET email='${newEmail}' WHERE email='${email}' AND password='${password}'`)
        log("Email successfully updated")
    } catch (error) {log('Error updating user email from databasefunctions', error)}
}

async function updatePassword (email, password, newPassword) {
    try {
        await pool.query(`UPDATE users SET password='${newPassword}' WHERE email='${email}' AND password='${password}'`)
        log("Password successfully updated")
    } catch (error) {log('Error updating user password from databasefunctions', error)}
}

async function deleteUser (email, password) {
    try {
        await pool.query(`DELETE FROM users WHERE email='${email}' AND password='${password}'`)
        log("User account deleted")
    } catch (error) {log("Error deleting user account from databasefunctions", error)}
}

module.exports = {
    createTables,
    createUser,
    authenticateUser,
    updateEmail,
    updatePassword,
    deleteUser
}

