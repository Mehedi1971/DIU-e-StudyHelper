<template>
  <div>
    <Header />
    <section class="py-5">
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue">
          Course Materials
        </h1>
      </div>
      <div class="mt-5 max-w-6xl mx-auto">
        <select v-model="level" class="bg-gray-100 m-3 p-2">
          <option disabled value="">Levels</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <select v-model="term" class="bg-gray-100 m-3 p-2">
          <option disabled value="">Terms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select v-model="course" class="bg-gray-100 m-3 p-2">
          <option disabled value="">Course</option>
          <option>Computer Fundamentals</option>
          <option>Basic Mathematics</option>
          <option>Basic Functional English and English Spoken</option>
          <option>
            Mathematics II : Calculus, Complex Variables and Linear Algebra
          </option>
          <option>Programming and Problem Solving</option>
          <option>Discrete Mathematics</option>
          <option>Data Structures</option>
          <option>Object Oriented Programming</option>
          <option>Financial and Managerial Accounting</option>
          <option>Algorithm</option>
          <option>Statistics and Probability</option>
          <option>Database Management System</option>
          <option>Compiler Design</option>
          <option>Artificial Intelligence</option>
          <option>Computer Graphics</option>
          <option>Embedded System</option>
        </select>

        <div>
          <button
            class="bg-blue-500 text-black font-semibold py-2 px-4 border hover:text-white border-blue-500 hover:border-transparent rounded m-8"
            @click="show"
          >
            Show
          </button>
        </div>

        <section class="max-w-6xl mx-auto">
          <div
            class="container grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen mt-16"
          >
            <div
              v-for="items in courseMaterials"
              :key="items.id"
              class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-110"
            >
              <img
                class="w-full h-10"
                src="../assets/diu05.png"
                alt="Sunset in the mountains"
              />

              <div class="p-6">
                <a
                  :href="`/courseMaterialsLinks/` + items._id"
                  class="hover:no-underline"
                >
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-600 hover:text-blue-800"
                  >
                    {{ course }}
                  </h5>
                </a>

                <p>Term: {{ term }}</p>
                <p>Level: {{ level }}</p>
                <p>Topic: {{ items.topic }}</p>

                <a
                  :href="`/courseMaterialsLinks/` + items._id"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:no-underline"
                >
                  Go
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'CourseMaterials',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      level: '',
      term: '',
      course: '',
      topic: '',
      id: '',
      courseMaterials: [],
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/login')
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/eStudyHelper/user/')
  },
  methods: {
    async show() {
      const result = await axios.get(
        `http://localhost:3000/api/eStudyHelper/coursematerials?level=${this.level}&term=${this.term}&course=${this.course}`
      )

      console.log(result)

      this.courseMaterials = result.data

      if (localStorage.getItem('jwt') === null) {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style></style>
