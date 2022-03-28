<template>
  <div>
    <div v-if="!user">
      <NavLanding />

      <section class="py-5 mt-5 max-w-6xl mx-auto">
        <div class="sm:w-3/4 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">Motivation</h1>
          <p class="text-justify text-bookmark-grey mt-4">
            <span class="font-bold">DIU e-StudyHelper</span> comes with a good
            cause.In every semester we face many problems. some of these
            problems were solved by our teacher. but our teacher has some
            limitations. and our curiosity has no bound and there is no end to
            our problems. so we want to build a web platform where a curious
            student will get help and also get a proper guild line and source to
            learn many new things. and where all students can help each other
            and will solve their problems. all these situations motivating us.
          </p>
        </div>
        <div class="sm:w-3/4 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">
            Expected Outcome
          </h1>
          <p class="text-justify text-bookmark-grey mt-4">
            When completed Students will not be limited by their semester. They
            can gather more knowledge besides academic education. They gather
            good knowledge about research fields. They build a large community
            between themselves and they become more productive by saving time.
            Our software also will take care of miscellaneous information.
          </p>
        </div>
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">
            Project Members
          </h1>
        </div>
        <!-- Cards -->
        <div
          class="container grid grid-cols-1 md:grid-cols-2 gap-16 max-w-screen-lg mt-16"
        >
          <!-- Card 1 -->
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img class="rounded-md" src="../assets/mehedi.jpg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">
                Md. Mahedi Hasan
              </h3>
              <h3 class="mb-2 text-bookmark-blue text-lg">ID: 181-15-10900</h3>
              <p class="mb-2 text-bookmark-grey font-light">Team: Anirban</p>
            </div>
            <hr class="border-b border-bookmark-white" />
          </div>
          <!-- Card 2 -->
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img class="rounded-md" src="../assets/joy.jpg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">
                Mohd. Mehedi Hasan Joy
              </h3>
              <h3 class="mb-2 text-bookmark-blue text-lg">ID: 181-15-10632</h3>
              <p class="mb-2 text-bookmark-grey font-light">Team: Anirban</p>
            </div>
            <hr class="border-b border-bookmark-white" />
          </div>
        </div>
      </section>
    </div>
    <div v-if="user">
      <Header />

      <section class="py-5 mt-5 max-w-6xl mx-auto">
        <div class="sm:w-3/4 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">Motivation</h1>
          <p class="text-justify text-bookmark-grey mt-4">
            <span class="font-bold">DIU e-StudyHelper</span> comes with a good
            cause.In every semester we face many problems. some of these
            problems were solved by our teacher. but our teacher has some
            limitations. and our curiosity has no bound and there is no end to
            our problems. so we want to build a web platform where a curious
            student will get help and also get a proper guild line and source to
            learn many new things. and where all students can help each other
            and will solve their problems. all these situations motivating us.
          </p>
        </div>
        <div class="sm:w-3/4 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">
            Expected Outcome
          </h1>
          <p class="text-justify text-bookmark-grey mt-4">
            When completed Students will not be limited by their semester. They
            can gather more knowledge besides academic education. They gather
            good knowledge about research fields. They build a large community
            between themselves and they become more productive by saving time.
            Our software also will take care of miscellaneous information.
          </p>
        </div>
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 m-6">
          <h1 class="text-3xl text-center text-bookmark-blue">
            Project Members
          </h1>
        </div>
        <!-- Cards -->
        <div
          class="container grid grid-cols-1 md:grid-cols-2 gap-16 max-w-screen-lg mt-16"
        >
          <!-- Card 1 -->
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img class="rounded-md" src="../assets/mehedi.jpg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">
                Md. Mahedi Hasan
              </h3>
              <h3 class="mb-2 text-bookmark-blue text-lg">ID: 181-15-10900</h3>
              <p class="mb-2 text-bookmark-grey font-light">Team: Anirban</p>
            </div>
            <hr class="border-b border-bookmark-white" />
          </div>
          <!-- Card 2 -->
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img class="rounded-md" src="../assets/joy.jpg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">
                Mohd. Mehedi Hasan Joy
              </h3>
              <h3 class="mb-2 text-bookmark-blue text-lg">ID: 181-15-10632</h3>
              <p class="mb-2 text-bookmark-grey font-light">Team: Anirban</p>
            </div>
            <hr class="border-b border-bookmark-white" />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import NavLanding from '../components/NavLanding.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'About',
  components: {
    NavLanding,
    Header,
    Footer,
  },
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.user = result.data
  },
}
</script>

<style></style>
