<template>
  <div>
    <div v-if="!user"><NavLanding /></div>
    <div v-if="user"><Header /></div>

    <h1 class="pt-10 bg-gray-200">Forum</h1>
  </div>
</template>

<script>
import axios from 'axios'
import NavLanding from '../components/NavLanding.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Forum',
  components: {
    NavLanding,
    Header,
  },
  data() {
    return {
      user: null,
      showMenu: false,
    }
  },
  async mounted() {
    const result = await axios.get(
      'http://localhost:3000/api/eStudyHelper/user/'
    )
    this.user = result.data
  },
}
</script>

<style lang="scss" scoped></style>
