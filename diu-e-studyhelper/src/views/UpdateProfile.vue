<template>
  <div>
    <Header />

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 text-left bg-white shadow-lg">
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

          <!-- <div class="mt-2">
            <label class="block" for="image">image</label>
            <input
              type="text"
              placeholder="image"
              v-model="profile.image"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div> -->

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
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'
export default {
  name: 'SignUp',
  components: {
    Header,
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
        // image: this.profile.image,
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
    const result = await axios.get('user')
    console.log(result.data)
    this.profile = result.data
    // +this.$route.params.id
  },
}
</script>

<style></style>
