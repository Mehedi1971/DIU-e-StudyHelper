<template>
  <div>
    <AdminHeader />
    <div class="flex mt-5 items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-5 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Course Materials</h3>

        <div class="mt-2">
          <div class="mt-2">
            <label class="block" for="level">Level</label>
            <input
              type="text"
              placeholder="Level"
              v-model="level"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-2">
            <label class="block" for="term">Term</label>
            <input
              type="text"
              placeholder="Term"
              v-model="term"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label class="block" for="course">Course</label>
            <input
              type="text"
              placeholder="Course"
              v-model="course"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-2">
            <label class="block" for="topic">Topic</label>
            <input
              type="text"
              placeholder="Topic"
              v-model="topic"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="mt-2">
            <label for="questions" class="block">Slide</label>
            <input
              id="questions"
              name="questions"
              type="text"
              placeholder="Questions"
              v-model="slide"
              required=""
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-2">
            <label for="questions" class="block">Video</label>
            <input
              id="questions"
              name="questions"
              type="text"
              placeholder="Questions"
              v-model="video"
              required=""
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="flex">
            <button
              type="submit"
              @click="signUp"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue'
import axios from 'axios'
export default {
  name: 'AdminQuestionBank',
  components: {
    AdminHeader,
  },
  data() {
    return {
      level: '',
      term: '',
      course: '',
      topic: '',
      slide: '',
      video: '',
    }
  },
  methods: {
    async signUp() {
      const result = await axios.post('coursematerials', {
        level: this.level,
        term: this.term,
        course: this.course,
        topic: this.topic,
        slide: this.slide,
        video: this.video,
      })

      if (result.status == 200) {
        alert('SuccessFully Saved in Database!!!')
      }
    },
  },
  mounted() {
    const user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'AdminLogin' })
    }
  },
}
</script>

<style></style>
