<template>
  <div>
    <Header />
    <section>
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
          <option>Financial and Managerial Accounting</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select v-model="exam" class="bg-gray-100 m-3 p-2">
          <option disabled value="">Exam</option>
          <option>Mid</option>
          <option>Final</option>
        </select>
        <div>
          <button
            class="bg-blue-500 text-black font-semibold py-2 px-4 border hover:text-white border-blue-500 hover:border-transparent rounded m-8"
            @click="show"
          >
            Show
          </button>
        </div>

        <div class="content-center">
          <table class="w-full mb-8">
            <tr class="content-center">
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Level
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Term
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Department
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Shift
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Exam
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Course
              </th>
              <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
                Question
              </th>
            </tr>
            <tr v-for="items in questionBank" :key="items.id" class="border-2">
              <td class="p-3 text-sm text-gray-700">{{ items.level }}</td>
              <td class="p-3 text-sm text-gray-700">{{ items.term }}</td>
              <td class="p-3 text-sm text-gray-700">{{ items.department }}</td>
              <td class="p-3 text-sm text-gray-700">{{ items.shitf }}</td>
              <td class="p-3 text-sm text-gray-700">{{ items.exam }}</td>
              <td class="p-3 text-sm text-gray-700">{{ items.course }}</td>
              <td class="p-3 text-sm text-gray-700">
                <a
                  :href="items.questions"
                  class="text-blue-500 font-bold hover:no-underline"
                  target="_blank"
                  >Download</a
                >
              </td>
            </tr>
          </table>
        </div>
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
  name: 'QuestionsBank',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      level: '',
      term: '',
      department: '',
      shitf: '',
      course: '',
      questions: '',
      exam: '',
      questionBank: [],
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
      let result = await axios.get(
        `http://localhost:3000/api/eStudyHelper/questionBank?level=${this.level}&term=${this.term}&exam=${this.exam}&course=${this.course}`
      )
      console.log(result)
      this.questionBank = result.data
      if (result.status == 200 && result.data.length > 0) {
        console.log('k')
        this.url = result.url
      }
    },
  },
}
</script>

<style></style>
