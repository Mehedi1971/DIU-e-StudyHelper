<template>
  <div>
    <NavLanding />
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Log In</h3>

        <div class="mt-2">
          <label class="block" for="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            autocomplete="email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div class="mt-2">
          <label for="password" class="block">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            v-model="password"
            required=""
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div class="flex">
          <button
            type="submit"
            @click="login"
            class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
          >
            Log In
          </button>
        </div>
        <div class="mt-6 text-grey-dark">
          Don't have an account?
          <router-link class="text-blue-600 hover:underline" to="/signup">
            Sign Up
          </router-link>
        </div>
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
      let result = await axios.post(`login`, {
        email: this.email,
        password: this.password,
      })
      localStorage.setItem('jwt', result.data.token)
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style></style>
