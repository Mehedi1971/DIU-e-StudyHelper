const express = require('express')
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const eStudyHelper = require('./routes/api/eStudyHelper')
const app = express()
const path = require('path')
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('diu-e-studyhelper/dist'))
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'diu-e-studyhelper', 'dist', 'index.html')
    )
  })
}

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
