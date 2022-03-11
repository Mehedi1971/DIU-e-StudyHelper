import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import QuestionBank from '../views/QuestionBank.vue'
import Links from '../views/Links.vue'
import CourseMaterials from '../views/CourseMaterials.vue'
import Profile from '../views/Profile.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Forum from '../views/Forum.vue'
import Dashboard from '../views/Dashboard.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/links',
    name: 'Links',
    component: Links,
  },
  {
    path: '/questionBank',
    name: 'QuestionBank',
    component: QuestionBank,
  },
  {
    path: '/coursematerials',
    name: 'CourseMaterials',
    component: CourseMaterials,
  },
  {
    path: '/updateprofile/:id',
    name: 'UpdateProfile',
    component: UpdateProfile,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
