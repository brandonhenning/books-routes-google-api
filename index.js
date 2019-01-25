const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const fetch = require('node-fetch')
const URL = 'https://www.googleapis.com/books/v1/volumes?q=origin'
const db = require('./database/databaseFunctions')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

db.createTables()

async function checkUser (email, password) {
    const user = await db.authenticateUser(email, password)
    return user
}

app.get('/:email/:password', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if (user) {
            return response.json({ user })
        } else {
            const user = await db.createUser(request.params.email, request.params.password)
            const newUser = await checkUser(request.params.email, request.params.password)
            return response.json({ newUser })
        }
    } catch (error) {log('Error validating or creating user', error)}
})

// Route for user to edit their email
app.get('/edit-email/:email/:password/:newEmail', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if(user) {
            await db.updateEmail(request.params.email, request.params.password, request.params.newEmail)
        }

        return response.redirect(`/user-status/${request.params.newEmail}/${request.params.password}`)
    } catch (error) {log('Error updating user email', error)}
});

// Route for user to edit their password
app.get('/edit-password/:email/:password/:newPassword', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if(user) {
            await db.updatePassword(request.params.email, request.params.password, request.params.newPassword)
        }

        response.redirect(`/user-status/${request.params.email}/${request.params.newPassword}`)
    } catch (error) {log('Error updating user password', error)}
});

// Route for user to delete their account
app.get('/delete-user/:email/:password', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if (user) {
            await db.deleteUser(request.params.email, request.params.password)
        }

        response.redirect(`/user-status/${request.params.email}/${request.params.password}`)
    } catch(error) {log('Error deleting user account', error)}
})

// Route for user to check their collection id, return none if they don't have one, also only return id number if their username and password match 
app.get('/cid/:email/:password', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if (user) {
            // 
        }
    } catch(error) {log('Error checking user collection id', error)}
})

app.get('/user-status/:email/:password', async (request, response) => {
    const user = await checkUser(request.params.email, request.params.password)
    return response.json({ user })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

