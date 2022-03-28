<template>
  <div>
    <Header></Header>
    <div><Todo /></div>
    <Footer />
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

  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.name = result.data.name

    if (!result) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
