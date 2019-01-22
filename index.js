const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const fetch = require('node-fetch')
const URL = 'https://www.googleapis.com/books/v1/volumes?q=origin'
const db = require('./database/databaseFunctions')

db.createTables()

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

async function callGoogle () {
    try {
        const response = await fetch(URL)
        const prices = await response.json()
        console.log(prices)
    }
    catch (error) { console.log('Error fetchin data from GOOGLE api', error) }
}


setInterval(callGoogle, 2000) 


