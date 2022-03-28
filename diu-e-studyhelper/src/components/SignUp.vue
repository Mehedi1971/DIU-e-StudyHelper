<template>
  <div>
    <NavLanding />
    <div class="flex mt-5 items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-5 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Join us</h3>

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
            <label class="block" for="studentID">Student ID</label>
            <input
              type="text"
              placeholder="Student ID"
              v-model="studentID"
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
            <label class="block" for="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              v-model="phone"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label class="block" for="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              v-model="address"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-2">
            <label class="block" for="description">Description</label>
            <textarea
              type="text"
              rows="3"
              cols="50"
              placeholder="Description"
              v-model="description"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <!-- <div class="mt-2">
            <label class="block" for="image">Upload Your Image</label>
            <input
              type="file"
              name="image"
              placeholder="Upload Your Image"
              @change="onFileSelected"
              class="w-full py-2"
            />
          </div> -->

          <!-- <div class="mt-2">
            <label class="block" for="image">image</label>
            <input
              type="text"
              placeholder="image"
              v-model="image"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div> -->

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
            <router-link class="text-blue-600 hover:underline" to="/login">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLanding from '../components/NavLanding.vue'
import axios from 'axios'
export default {
  name: 'SignUp',
  components: {
    NavLanding,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      image: '',
      description: '',
      phone: '',
      studentID: '',
      address: '',
    }
  },
  methods: {
    async signUp() {
      console.log('signup', this.name, this.email, this.password)
      const result = await axios.post('signup', {
        name: this.name,
        email: this.email,
        password: this.password,
        image: this.image,
        description: this.description,
        phone: this.phone,
        studentID: this.studentID,
        address: this.address,
      })

      console.log(result)
      if (result.status == 200) {
        // localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'Login' })
      }
    },
    // onFileSelected(event) {
    //   this.image = event.target.file[0]
    // },
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
