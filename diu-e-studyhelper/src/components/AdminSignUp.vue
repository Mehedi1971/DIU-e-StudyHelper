<template>
  <div>
    <div class="flex mt-5 items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-5 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Admin Sign Up</h3>

        <div class="mt-2">
          <div>
            <label class="block" for="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              v-model="name"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

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
              @click="signUp"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Create Account
            </button>
          </div>
          <div class="mt-6 text-grey-dark">
            Already have an account?
            <router-link class="text-blue-600 hover:underline" to="/adminLogin">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavLanding from './NavLanding.vue'
import axios from 'axios'
export default {
  name: 'AdminSignUp',
  components: {
    // NavLanding,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async signUp() {
      console.log(
        'http://localhost:3000/api/eStudyHelper/admin/signup/',
        this.name,
        this.email,
        this.password
      )
      const result = await axios.post(
        'http://localhost:3000/api/eStudyHelper/admin/signup/',
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      )

      console.log(result)
      if (result.status == 200) {
        // localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'AdminLogin' })
      }
    },
    onFileSelected(event) {
      this.image = event.target.file[0]
    },
  },
  // mounted() {
  //   const user = localStorage.getItem('user-info')
  //   if (user) {
  //     this.$router.push({ name: 'Login' })
  //   }
  // },
}
</script>

<style></style>
