<template>
  <div>
    <div v-if="!user"><NavLanding /></div>
    <div v-if="user"><Header /></div>

    <h1 class="pt-10 bg-gray-200">this is About</h1>
  </div>
</template>

<script>
import axios from 'axios'
import NavLanding from '../components/NavLanding.vue'
import Header from '../components/Header.vue'
export default {
  name: 'About',
  components: {
    NavLanding,
    Header,
  },
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.user = result.data
    // if (!result) {
    //   this.$router.push({ name: 'SignUp' })
    // }
  },
}
</script>

<style></style>
