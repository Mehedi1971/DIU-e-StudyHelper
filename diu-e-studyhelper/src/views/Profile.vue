<template>
  <div class="bg-gray-100">
    <Header />
    <!-- <h1>profile</h1>
    <button @click="btn">btn</button> -->
    <!-- <table>
      <tr v-for="item in profile" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td> -->
    <!-- <td>{{ item.pic }}</td> -->
    <!-- </tr>
    </table> -->

    <!-- <div v-for="post in profile" :key="post.id">
      <div class="rounded-md bg-gray-400 m-2">
        <h3>{{ post.pic }}</h3>
        <img :src="post.pic" alt="" class="w-10 h-10" />
        <h3>Name: {{ post.name }}</h3>
        <h3>{{ post.email }}</h3>
      </div>
    </div> -->

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
            <img :src="image" :alt="name" class="w-10 h-10 rounded-md" />
          </div>
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
    <!-- <div v-for="items in profile" :key="items.id"> -->
    <!-- <tr v-for="items in profile" :key="items.id"> -->
    <!-- <td>{{items.id}}</td> -->
    <!-- <td><router-link to="`/updateprofile/`+items.id">edit profile</router-link></td> -->
    <!-- <td><a :href="`/updateprofile/`+items.id">edit profile</a></td> -->
    <!-- </tr> -->
    <!-- <h1 v-for="items in profile" :key="items.id"><router-link to="/updateprofile/+items.id">edit profile</router-link> </h1>     -->
    <!-- <router-link to="`/updateprofile/`+items.id">edit profile</router-link>  -->
    <!-- </div> -->
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
  // methods: {
  //   btn() {
  //     axios
  //       .get('http://localhost:3000/users')
  //       .then((res) => {
  //         console.log(res)
  //         this.profile = res.data
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //     // if (result) {
  //     //   console.log(result)
  //     //   this.profile = result
  //     // }
  //   },
  // },
  // async mounted() {
  // let result = await axios.get('http://localhost:3000/users')
  // // .then((result) => {})
  // // .catch((error) => {
  // //   console.log(error)
  // // })
  // if (result) {
  //   console.log(result)
  //   this.profile = result
  // }
  // },
  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  async mounted() {
    const result = await axios.get(
      'user'
      // {
      //   headers: {
      //     jwt: localStorage.getItem('jwt'),
      //   },
      // }
    )
    this.name = result.data.name
    this.email = result.data.email
    this.image = result.data.image
    this.description = result.data.description
    this.studentID = result.data.studentID
    this.id = result.data._id
    this.address = result.data.address
    console.log(result.data._id)

    // const user = localStorage.getItem('user-info')
    // this.name = JSON.parse(user).name
    // this.email = JSON.parse(user).email
    // this.pic = JSON.parse(user).pic
    // this.description = JSON.parse(user).description
    // this.studentId = JSON.parse(user).studentId
    // this.id = JSON.parse(user).id
    // this.Address = JSON.parse(user).Address

    // const result =await axios.get("http://localhost:3000/users/")
    // this.profile=result.data
    if (!result) {
      this.$router.push({ name: 'Profile' })
    }
  },
}
</script>

<style></style>
