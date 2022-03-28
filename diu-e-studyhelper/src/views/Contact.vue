<template>
  <div>
    <div v-if="!user">
      <NavLanding />
      <div class="mt-5 max-w-6xl mx-auto">
        <div class="content-center">
          <table class="w-full mb-8">
            <tr class="content-center">
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Image
              </th>
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Designation
              </th>
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Contact Information
              </th>
            </tr>
            <tr>
              <td><img class="pt-3" src="../assets/mehedi.jpg" alt="" /></td>
              <td class="text-left">
                Md. Mahedi Hasan <br />
                Student of Computer Science and Engineering
              </td>
              <td class="text-left">
                Email: mahedi15-10900@diu.edu.bind <br />Phone: 017752834102
              </td>
            </tr>
            <tr>
              <td><img class="pt-3" src="../assets/joy.jpg" alt="" /></td>
              <td class="text-left">
                Mohd. Mehedi Hasan joy <br />
                Student of Computer Science and Engineering
              </td>
              <td class="text-left">
                Email: mehedi15-10632@diu.edu.bind <br />Phone: 017752834102
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
    <div v-if="user">
      <Header />
      <div class="mt-5 max-w-6xl mx-auto">
        <div class="content-center">
          <table class="w-full mb-8">
            <tr class="content-center">
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Image
              </th>
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Designation
              </th>
              <th
                class="p-3 text-left text-sm font-semibold tracking-wide bg-gray-200"
              >
                Contact Information
              </th>
            </tr>
            <tr>
              <td><img class="pt-3" src="../assets/mehedi.jpg" alt="" /></td>
              <td class="text-left">
                Md. Mahedi Hasan <br />
                Student of Computer Science and Engineering
              </td>
              <td class="text-left">
                Email: mahedi15-10900@diu.edu.bind <br />Phone: 017752834102
              </td>
            </tr>
            <tr>
              <td><img class="pt-3" src="../assets/joy.jpg" alt="" /></td>
              <td class="text-left">
                Mohd. Mehedi Hasan joy <br />
                Student of Computer Science and Engineering
              </td>
              <td class="text-left">
                Email: mehedi15-10632@diu.edu.bind <br />Phone: 017752834102
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import NavLanding from '../components/NavLanding.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Contact',
  components: { Header, Footer, NavLanding },
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

<style></style>
