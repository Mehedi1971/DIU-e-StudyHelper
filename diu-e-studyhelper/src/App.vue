<template>
  <router-view :user="user" />
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      user: null,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
