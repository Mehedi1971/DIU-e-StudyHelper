const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const eStudyHelper = require('./routes/api/eStudyHelper')
const app = express()

const URL =
  'mongodb+srv://admin:JXEhDFC3FDdQ4Sb6@cluster0.0erj6.mongodb.net/eStudyHelper?retryWrites=true&w=majority'
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
  .connect(URL, {})
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err))

// mongoose
//   .connect('mongodb://localhost/eStudyHelper', {})
//   .then(() => console.log('MongoDB database Connected...'))
//   .catch((err) => console.log(err))
//app use
app.use('/api/eStudyHelper', eStudyHelper)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`listing to port 3000`)
})
