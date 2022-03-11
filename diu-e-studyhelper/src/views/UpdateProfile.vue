<template>
  <!-- <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <NavLanding /> -->
  <div>
    <!-- class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  > -->
    <NavLanding />

    <div class="flex mt-5 items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-5 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Update Your Profile</h3>

        <div class="mt-2">
          <div>
            <label class="block" for="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              v-model="profile.name"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label class="block" for="studentID">Student ID</label>
            <input
              type="text"
              placeholder="Student ID"
              v-model="profile.studentID"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label class="block" for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              v-model="profile.email"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-2">
            <label class="block" for="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              v-model="profile.phone"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label class="block" for="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              v-model="profile.address"
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
              v-model="profile.description"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <!-- <div class="mt-2">
            <label class="block" for="image">Upload Your Image</label>
            <input
              type="file"
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
              v-model="profile.image"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <!-- <div class="mt-2">
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
          </div> -->
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
              @click="update"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="max-w-md w-full space-y-8">
      <div> -->
    <!-- <div class="md:flex justify-center md:items-center cursor-pointer">
          <span class="text-green-500 text-xl mr-1">
            <i class="bi bi-stack"></i>
          </span>
          <h1 class="text-2xl font-bold">
            <router-link to="/" class="text-2xl hover:text-green-500">
              <span class="text-blue-500">e</span
              ><span class="text-green-500">-StudyHelper</span></router-link
            >
          </h1>
        </div> -->
    <!-- <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Update Your profile
        </h2>
      </div> -->
    <!-- autocomplete="email"
            required="" -->
    <!-- <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">User Name</label>
          <input
            type="text"
            v-model="profile.name"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="User Name"
          />
        </div>
        <div>
          <label for="studentId" class="sr-only">studentId</label>
          <input
            id="studentId"
            name="studentId"
            type="text"
            v-model="profile.studentID"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="studentId"
          />
        </div>

        <div>
          <label for="Address" class="sr-only">Address</label>
          <input
            id="Address"
            name="Address"
            type="text"
            v-model="profile.address"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Address"
          />
        </div>

        <div>
          <label for="description" class="sr-only">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            v-model="profile.description"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="description"
          />
        </div>

        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            type="text"
            v-model="profile.email"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div> -->
    <!-- <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            v-model="profile.password"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div> -->
    <!-- </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="update"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
          update
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
      profile: {
        name: '',
        email: '',
        password: '',
        image: '',
        description: '',
        studentID: '',
        address: '',
        phone: '',
      },
    }
  },
  methods: {
    async update() {
      console.log(this.profile)
      const result = await axios.patch('user/' + this.$route.params.id, {
        name: this.profile.name,
        email: this.profile.email,
        phone: this.profile.phone,
        image: this.profile.image,
        description: this.profile.description,
        studentID: this.profile.studentID,
        address: this.profile.address,
      })
      console.log(result)
      if (result.status == 200) {
        this.$router.push({ name: 'Profile' })
      }
    },
  },
  async mounted() {
    // const user = localStorage.getItem('user-info')
    // if (!user) {
    //   this.$router.push({ name: 'Home' })
    // }
    const result = await axios.get('user')
    console.log(result.data)
    this.profile = result.data
    // +this.$route.params.id
  },
}
</script>

<style></style>
