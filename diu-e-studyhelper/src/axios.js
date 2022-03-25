import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/eStudyHelper/'
axios.defaults.headers.common['jwt'] = localStorage.getItem('jwt')
axios.defaults.headers.common['token'] = localStorage.getItem('token')
