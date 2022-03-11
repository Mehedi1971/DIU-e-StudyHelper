const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const eStudyHelper = require('./routes/api/eStudyHelper')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
  .connect('mongodb://localhost/eStudyHelper', {})
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err))
//appuse
app.use('/api/eStudyHelper', eStudyHelper)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`listing to port 3000`)
})
