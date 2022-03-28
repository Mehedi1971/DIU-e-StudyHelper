<template>
  <div>
    <AdminHeader />
    <div class="content-center mt-5 max-w-6xl mx-auto">
      <table class="w-full mb-8">
        <tr class="content-center">
          <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
            Name
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
            Email
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">
            ID
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide bg-gray-200">#</th>
        </tr>
        <tr v-for="items in Users" :key="items.id" class="border-2">
          <td class="p-3 text-sm text-gray-700">{{ items.name }}</td>
          <td class="p-3 text-sm text-gray-700">{{ items.email }}</td>
          <td class="p-3 text-sm text-gray-700">{{ items.studentID }}</td>
          <td>
            <div>
              <button
                class="bg-blue-500 text-black font-semibold py-2 px-4 border hover:text-white border-blue-500 hover:border-transparent rounded m-8"
                @click="Remove(items._id)"
              >
                Remove
              </button>
            </div>
          </td>
        </tr>
        <tr></tr>
      </table>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue'
import axios from 'axios'
export default {
  name: 'AdminDashboard',
  components: { AdminHeader },
  data() {
    return {
      name: '',
      email: '',
      studentID: '',

      Users: [],
    }
  },
  async mounted() {
    let result = await axios.get(
      'http://localhost:3000/api/eStudyHelper/admin/user/'
    )

    this.Users = result.data
    const user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'AdminLogin' })
    }
  },
  methods: {
    async Remove(_id) {
      console.log(_id)
      let result = await axios.delete(
        'http://localhost:3000/api/eStudyHelper/admin/user/' + _id
      )

      if (result.status == 200) {
        let result = await axios.get(
          'http://localhost:3000/api/eStudyHelper/admin/user/'
        )

        this.Users = result.data
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
