<template>
  <div>
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <!-- <NavLanding /> -->
      <div class="max-w-md w-full space-y-8">
        <div>
          <div class="md:flex justify-center md:items-center cursor-pointer">
            <span class="text-green-500 text-xl mr-1">
              <i class="bi bi-stack"></i>
            </span>
            <h1 class="text-2xl font-bold">
              <router-link to="/" class="text-2xl hover:text-green-500">
                <span class="text-blue-500">e</span
                ><span class="text-green-500">-StudyHelper</span></router-link
              >
            </h1>
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <!-- autocomplete="email"
            required="" -->
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              type="text"
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              v-model="password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="login"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
        <div class="mt-6 text-grey-dark">
          Create new account?
          <router-link class="text-blue-600 hover:underline" to="/adminSignUp">
            Sign Up
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavLanding from '../components/NavLanding.vue'
import axios from 'axios'
export default {
  name: 'AdminLogin',
  components: {
    // NavLanding,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      let result = await axios.post(
        'http://localhost:3000/api/eStudyHelper/admin/login/',
        {
          email: this.email,
          password: this.password,
        }
      )
      console.log(result)
      // localStorage.setItem('token', result.data.token)
      if (result.status == 200) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'AdminDashboard' })
      }
    },
  },
  // mounted() {
  //   const user = localStorage.getItem('user-info')
  //   if (user) {
  //     this.$router.push({ name: 'Dashboard' })
  //   }
  // },
}
</script>

<style></style>
