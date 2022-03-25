<template>
  <div>
    <Header></Header>
    <div><Todo /></div>
    <Footer />
    <!-- <h1 class="pt-10 bg-gray-200">Welcome {{ name }}</h1>
    <h1 class="pt-10 bg-gray-200">Welcome {{ email }}</h1> -->
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Todo from '../components/Todo.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Dashboard',
  props: ['user'],
  components: {
    Header,
    Todo,
    Footer,
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  // async created() {
  //   const result = await axios.get(
  //     'http://localhost:3000/api/eStudyHelper/user/',
  //     {
  //       headers: {
  //         jwt: localStorage.getItem('jwt'),
  //       },
  //     }
  //   )
  //   this.user = result.data
  // },
  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.name = result.data.name
    // this.id = result.data.id
    // this.pic = result.data.pic
    // axios
    //   .get('http://localhost:3000/api/eStudyHelper/user/', {
    //     headers: {
    //       jwt: localStorage.getItem('jwt'),
    //     },
    //   })
    // .then((res) => {
    //   this.name = res.data.sign.name
    //   this.email = res.data.sign.email
    // })
    // const user = localStorage.getItem('user-info')
    // this.name = JSON.parse(user).name
    // this.email = JSON.parse(user).email
    if (!result) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
