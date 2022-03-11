const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const QuestionBank = require('../../models/QuestionBank')
const SignUp = require('../../models/SignUp')
const QBank = new mongoose.model('QuestionBank', QuestionBank)
const Sign = new mongoose.model('SignUp', SignUp)

const router = express.Router()
//new
router.post('/signup/', async (req, res) => {
  // const sign = new Sign(req.body)
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const sign = new Sign({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
    description: req.body.description,
    phone: req.body.phone,
    studentID: req.body.studentID,
    address: req.body.address,
    password: hashedPassword,
  })

  try {
    const result = await sign.save()
    const { password, ...data } = await result.toJSON()
    res.json(data)
  } catch (err) {
    res.json(500).json({
      err: 'this is error',
    })
  }
})
router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  try {
    const sign = await Sign.findOne({
      email,
    })
    if (!sign) {
      return res.status(404).send({
        message: 'user not found',
      })
    }
    if (!(await bcrypt.compare(password, sign.password))) {
      return res.status(400).send({
        message: 'Invalid password',
      })
    }
    const token = jwt.sign(
      { _id: sign._id },
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    )
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    // res.send(user)
    res.send({
      message: 'success',
      token,
      email,
    })
  } catch (err) {
    res.json(500).json({
      err: 'this is error',
    })
  }
})
router.get('/user', async (req, res) => {
  try {
    const cookie = req.headers.jwt
    // const cookie = req.cookies['jwt']

    const claims = jwt.verify(
      cookie,
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    )
    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated',
      })
    }
    const sign = await Sign.findOne({ _id: claims._id })
    const { password, ...data } = await sign.toJSON()
    res.send(data)
  } catch (err) {
    return res.status(401).send({
      message: 'unauthenticated',
    })
  }
})

router.post('/logout', async (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    res.send({
      message: 'Loging out',
    })
  } catch (err) {
    return res.status(401).send({
      message: 'unauthenticated',
    })
  }
})
//old

// router.get('/signup', async (req, res) => {
//   const email = req.query.email
//   const password = req.query.password
//   // const _id = req.query._id
//   try {
//     const sign = await Sign.find({ email: email, password: password })
//     res.json(sign)
//   } catch (err) {
//     res.json(500).json({
//       err: 'this is an server site error',
//     })
//   }
// })
router.get('/user/:id', async (req, res) => {
  // const email = req.query.email
  // const password = req.query.password
  // const id = req.query.id
  try {
    const sign = await Sign.findById(req.params.id)
    res.json(sign)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

// router.post('/signup', async (req, res) => {
//   const sign = new Sign(req.body)
//   try {
//     const result = await sign.save()
//     res.json(result)
//   } catch (err) {
//     res.json(500).json({
//       err: 'this is an server site error',
//     })
//   }
// })

router.patch('/user/:id', async (req, res) => {
  try {
    const sign = await Sign.findById(req.params.id)
    sign.name = req.body.name
    sign.email = req.body.email
    sign.image = req.body.image
    sign.description = req.body.description
    sign.phone = req.body.phone
    sign.studentID = req.body.studentID
    sign.address = req.body.address
    const result = await sign.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

router.get('/questionBank', async (req, res) => {
  const level = req.query.level
  const term = req.query.term
  const course = req.query.course
  const exam = req.query.exam
  // const te = req.query.level
  try {
    const qbank = await QBank.find({
      level: level,
      term: term,
      course: course,
      exam: exam,
    })
    res.json(qbank)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

// router.post('/', async (req, res) => {
//   const qbank = new QBank(req.body)
//   try {
//     const result = await qbank.save()
//     res.json(result)
//   } catch (err) {
//     res.json(500).json({
//       err: 'this is an server site error',
//     })
//   }
// })

// router.patch('/:id', async (req, res) => {
//   try {
//     const qbank = await QBank.findById(req.params.id)
//     qbank.description = req.body.description
//     qbank.shitf = req.body.shitf
//     qbank.level = req.body.level
//     qbank.term = req.body.term
//     qbank.exam = req.body.exam
//     qbank.course = req.body.course
//     qbank.questions = req.body.questions
//     const result = await qbank.save()
//     res.json(result)
//   } catch (err) {
//     res.json(500).json({
//       err: 'this is an server site error',
//     })
//   }
// })

// router.delete('/', async (req, res) => {
//   try {
//   } catch (err) {
//     res.json(500).json({
//       err: 'this is an server site error',
//     })
//   }
// })

router.get('/coursematerials', async (req, res) => {
  const level = req.query.level
  const term = req.query.term
  const course = req.query.course

  // const te = req.query.level
  try {
    const qbank = await QBank.find({
      level: level,
      term: term,
      course: course,
    })
    res.json(qbank)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

module.exports = router
