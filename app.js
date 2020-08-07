const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const redis = require('async-redis')
const { cache } = require('./middleware')

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost'
})

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cache(client))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/todos/:id', async (req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
  const todo = await response.json()
  await client.setex(req.originalUrl, 60, JSON.stringify(todo))
  return res.json(todo)
})

app.listen(8080, () => {
  console.log('Server listening at localhost:8080')
})
