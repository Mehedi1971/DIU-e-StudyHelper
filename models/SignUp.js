const mongoose = require('mongoose')
const TodoSchema = require('../models/TodoList')
// const TodoSchema = mongoose.Schema({
//   description: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// })

const SignUpSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  Todo: [TodoSchema],
  // created: {
  //   type: Date,
  //   required: true,
  //   default: Date.now,
  // },
})

module.exports = SignUpSchema
