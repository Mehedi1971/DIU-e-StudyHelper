<template>
  <div class="bg-gray-100">
    <Header />

    <div
      class="container grid grid-cols-1 gap-16 max-w-screen mt-16 max-w-6xl mx-auto"
    >
      <div class="bg-white p-6 rounded-xl">
        <a
          class="text-blue-500 font-bold py-2 px-4 rounded float-right"
          :href="`/updateprofile/` + id"
          ><i class="bi bi-pencil-square"></i
        ></a>
        <div>
          <div class="h-10 pl-4">
            <img
              src="../assets/dp.png"
              :alt="name"
              class="w-10 h-10 rounded-md"
            />
          </div>
          <!-- <div class="h-10 pl-4">
            <img :src="image" :alt="name" class="w-10 h-10 rounded-md" />
          </div> -->
        </div>

        <div class="xl">
          <h1 class="p-2 pl-4 text-left font-bold">{{ name }}</h1>
          <p class="pl-4 text-justify pr-4 flex-none">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="bg-white p-6 text-left rounded-xl">
        <h1 class="p-2 pl-4">
          <span class="font-bold">Name:</span> {{ name }}
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold"> Email: </span>{{ email }}
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold">Description:</span> {{ description }}
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold">Student Id:</span> {{ studentID }}
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold">Address:</span> {{ address }}
        </h1>

        <!-- <router-link to="`/updateprofile/`+items.id">edit profile</router-link>  -->
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// import axios from 'axios'
import axios from 'axios'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Profile',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: '',
      email: '',
      image: '',
      description: '',
      studentID: '',
      profile: [],
      id: '',
      address: '',
    }
  },

  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.name = result.data.name
    this.email = result.data.email
    this.image = result.data.image
    this.description = result.data.description
    this.studentID = result.data.studentID
    this.id = result.data._id
    this.address = result.data.address
    console.log(result.data._id)

    if (!result) {
      this.$router.push({ name: 'Profile' })
    }
  },
}
</script>

<style></style>
