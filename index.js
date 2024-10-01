require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('My Name is Dhiraj ')
  })

app.get('/contact', (req, res) => {
    res.send('<h1> Sab Hojayega </h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})