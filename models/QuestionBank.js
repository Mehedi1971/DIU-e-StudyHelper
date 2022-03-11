const mongoose = require('mongoose')
const QuestionBankSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  shitf: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  questions: {
    type: String,
    required: true,
  },
})
module.exports = QuestionBankSchema
