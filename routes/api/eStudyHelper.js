const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const QuestionBank = require('../../models/QuestionBank')
const SignUp = require('../../models/SignUp')
const Todo = require('../../models/TodoList')
const Admin = require('../../models/Admin')
const QBank = new mongoose.model('QuestionBank', QuestionBank)
const Sign = new mongoose.model('SignUp', SignUp)
const TodoList = new mongoose.model('Todo', Todo)
const AdminPanel = new mongoose.model('Admin', Admin)

// const multer = require('multer')
// const Storage = multer.diskStorage({
// destination for files
// destination: function (req, file, cb) {
//   cb(null, '../../uploads')
// },

//add back the extension
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
//   },
// })

//upload parameters for multer
// const upload = multer({
//   storage: Storage,
// limits: {
//   fieldSize: 1024 * 1024 * 3,
// },
// }).single('file')

const router = express.Router()
//new
router.post('/signup/', async (req, res) => {
  // console.log(req.file)
  // const sign = new Sign(req.body)
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const sign = new Sign({
    name: req.body.name,
    email: req.body.email,
    // image: req.file.filename,
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

router.post('/questionBank', async (req, res) => {
  const qbank = new QBank(req.body)
  try {
    const result = await qbank.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

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

router.get('/coursematerials/links/:id', async (req, res) => {
  try {
    const qbank = await QBank.findById(req.params.id)
    res.json(qbank)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

//TodoList
router.get('/TodoList/', async (req, res) => {
  try {
    const todo = await TodoList.find()
    res.json(todo)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})
router.post('/TodoList/', async (req, res) => {
  const todo = new TodoList(req.body)
  try {
    const result = await todo.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

router.put('/TodoList/:id', async (req, res) => {
  try {
    const todo = await TodoList.findById(req.params.id)
    todo.description = req.body.description

    const result = await todo.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

router.delete('/TodoList/:id', async (req, res) => {
  try {
    const todo = await TodoList.findById(req.params.id)
    await todo.remove()
    res.status(200).json({
      message: 'Successfully deleted',
    })
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

//AdminPanel

router.post('/admin/signup/', async (req, res) => {
  // const sign = new Sign(req.body)
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const admin = new AdminPanel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
  })

  try {
    const result = await admin.save()
    const { password, ...data } = await result.toJSON()
    res.json(data)
  } catch (err) {
    res.json(500).json({
      err: 'this is error',
    })
  }
})
router.post('/admin/login', async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password

    const admin = await AdminPanel.findOne({ email: email })

    const isMatch = await bcrypt.compare(password, admin.password)

    if (isMatch) {
      const a1 = await admin.save()
      res.json(a1)
    } else {
      res.send('Error1')
    }
  } catch (es) {
    res.send('Error2')
  }
})
router.get('/admin/user/', async (req, res) => {
  try {
    const sign = await Sign.find()
    res.json(sign)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

router.delete('/admin/user/:id', async (req, res) => {
  try {
    const sign = await Sign.findById(req.params.id)
    await sign.remove()
    res.status(200).json({
      message: 'Successfully deleted',
    })
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})
// router.get('/admin', async (req, res) => {
//   try {
//     const cookie = req.headers.token
//     // const cookie = req.cookies['jwt']

//     const claims = token.verify(
//       cookie,
//       'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
//     )
//     if (!claims) {
//       return res.status(401).send({
//         message: 'unauthenticated',
//       })
//     }
//     const admin = await AdminPanel.findOne({ _id: claims._id })
//     const { password, ...data } = await admin.toJSON()
//     res.send(data)
//   } catch (err) {
//     return res.status(401).send({
//       message: 'unauthenticated',
//     })
//   }
// })

module.exports = router
