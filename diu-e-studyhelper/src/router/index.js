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
import Todo from '../components/Todo.vue'
import Forum from '../views/Forum.vue'
import Dashboard from '../views/Dashboard.vue'
import AdminQuestionBank from '../views/AdminQuestionBank.vue'
import AdminLogin from '../components/AdminLogin.vue'
import AdminSignUp from '../components/AdminSignUp.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import CourseMaterialsLinks from '../views/CourseMaterialsLinks.vue'

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
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/questionBank',
    name: 'QuestionBank',
    component: QuestionBank,
  },
  {
    path: '/adminQuestionBank',
    name: 'AdminQuestionBank',
    component: AdminQuestionBank,
  },
  {
    path: '/coursematerials',
    name: 'CourseMaterials',
    component: CourseMaterials,
  },
  {
    path: '/courseMaterialsLinks/:id',
    name: 'CourseMaterialsLinks',
    component: CourseMaterialsLinks,
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
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/adminSignUp',
    name: 'AdminSignUp',
    component: AdminSignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/adminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
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
