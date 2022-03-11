<template>
  <!-- <div class="object-coverobject-center">
    <img
      class="object-cover h-8 w-11 object-center"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <h3 class="font-extrabold">Login Page</h3>
  </div>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="email"
      >Email</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      type="text"
      placeholder="Enter Email"
      v-model="email"
    />
    <label class="block text-grey-darker text-sm font-bold mb-2" for="password"
      >Password</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      type="password"
      placeholder="Enter Password"
      v-model="password"
    />
    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="login"
    >
      Login
    </button>

    <p>
      <router-link to="/signup">Sign Up</router-link>
    </p>
  </div> -->

  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <NavLanding />
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

      <!-- <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div> -->

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
    </div>
  </div>
</template>

<script>
import NavLanding from '../components/NavLanding.vue'
import axios from 'axios'
export default {
  name: 'Login',
  components: {
    NavLanding,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      // let result = await axios.get(
      //   `http://localhost:3000/api/eStudyHelper/signup?email=${this.email}&password=${this.password}`
      // )
      // if (result.status == 200 && result.data.length > 0) {
      //   localStorage.setItem('user-info', JSON.stringify(result.data[0]))
      //   this.$router.push({ name: 'Dashboard' })
      // }

      let result = await axios.post(`login`, {
        email: this.email,
        password: this.password,
      })
      localStorage.setItem('jwt', result.data.token)
      this.$router.push('/dashboard')
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
