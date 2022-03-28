const mongoose = require('mongoose')
const CourseMaterialsSchema = mongoose.Schema({
  level: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  slide: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
})
module.exports = CourseMaterialsSchema
