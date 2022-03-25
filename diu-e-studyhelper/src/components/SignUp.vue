<template>
  <!-- <div class="object-coverobject-center">
    <img
      class="object-cover h-8 w-10 object-center"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <h3 class="font-extrabold">Sign Up Page</h3>
  </div>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="Name"
      >Name</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      type="text"
      placeholder="Enter Name"
      v-model="name"
    />
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
      @click="signUp"
    >
      Sign Up
    </button>
  </div> -->

  <div>
    <!-- class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  > -->
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

          <div class="mt-2">
            <label class="block" for="image">image</label>
            <input
              type="text"
              placeholder="image"
              v-model="image"
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
          <!-- <div class="mt-4">
            <label class="block">Confirm Password</label>
            <input
              type="password"
              placeholder="Password"
              class="w-full px-4 py-2  border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <span class="text-xs text-red-400">Password must be same!</span> -->
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
    <!-- <div class="max-w-md w-full space-y-8">
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
      </div> -->
    <!-- autocomplete="email"
            required="" -->
    <!-- <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="block text-sm">User Name</label>
          <input
            type="text"
            v-model="name"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="User Name"
          />
        </div>
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
      </div> -->

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

    <!-- <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="signUp"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
          Sign Up
        </button>
      </div>
    </div> -->
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
