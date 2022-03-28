<template>
  <div class="bg-gray-100">
    <Header />
    <div
      class="container grid grid-cols-1 gap-16 max-w-screen mt-16 max-w-6xl mx-auto"
    >
      <div class="bg-white p-6 text-left rounded-xl">
        <h1 class="font-bold text-4xl text-center">Course Materials</h1>
        <h1 class="font-bold text-2xl text-center mt-2">
          {{ course }}
        </h1>
        <hr />
        <h1 class="p-2 pl-4">
          <span class="font-bold">Topic:</span> {{ topic }}
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold"> Video: </span>
          <a
            :href="video"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:no-underline"
            target="_blank"
          >
            Open Video
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </h1>
        <h1 class="p-2 pl-4">
          <span class="font-bold"> Slide: </span>
          <a
            :href="slide"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:no-underline"
            target="_blank"
          >
            Open Slide
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'CourseMaterialsLinks',

  components: {
    Header,
    Footer,
  },
  data() {
    return {
      course: '',
      topic: '',
      slide: '',
      video: '',
      id: '',
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  async mounted() {
    axios.get('http://localhost:3000/api/eStudyHelper/user/')

    const result = await axios.get(
      `http://localhost:3000/api/eStudyHelper/coursematerials/links/` +
        this.$route.params.id
    )
    this.course = result.data.course
    this.topic = result.data.topic
    this.slide = result.data.slide
    this.video = result.data.video
    this.id = result.data._id

    console.log(result)
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
}
</script>

<style></style>
