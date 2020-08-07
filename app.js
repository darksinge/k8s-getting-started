const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/todos/:id', (req, res) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
    .then(response => response.json())
    .then(json => {
      return res.json(json)
    })
})

app.listen(8080, () => {
  console.log('Server listening at localhost:8080')
})
