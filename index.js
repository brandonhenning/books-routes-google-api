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

async function checkUser (email, password) {
    const user = await db.authenticateUser(email, password)
    return user
}


// Route for user to edit their email

// Route for user to edit their password

// Route for user to delete their account

// Route for user to check their collection id, return none if they don't have one, also only return id number if their username and password match 



app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

