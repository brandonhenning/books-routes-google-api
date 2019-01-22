const express = require('express')
const app = express()
const port = 3000 || process.env.PORT


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

app.get('/', (request, response) => {
    response.send('Thank you for reaching out.. Hi. Its me.')
})

app.get('/stuff', (request, response) => {
    response.send(`Here's some stuff!`)
})
