import axios from 'axios'

axios.defaults.baseURL =
  'https://estudyhelperapi.herokuapp.com/api/eStudyHelper/'
axios.defaults.headers.common['jwt'] = localStorage.getItem('jwt')
axios.defaults.headers.common['token'] = localStorage.getItem('token')
