<template>
  <div>
    <NavLanding />
    <section
      class="bg-gray-300 text-black py-5 mt-5 lg:mt-60 md:flex justify-between items-center"
    >
      <div class="md:flex justify-between items-center py-10 max-w-6xl mx-auto">
        <div class="text-left pl-6">
          <p class="text-2xl text-gray-600">Largest Platform of Diu</p>
          <h1
            class="text-bookmark-grey text-5xl lg:text-left mb-6 font-bold text-blue-500 py-2"
          >
            Connect with Diu Largest Online Forum
          </h1>
          <div class="py-5" v-if="!user">
            <router-link to="/signUp" class="btn btn-outline-primary"
              >Sign Up</router-link
            >
          </div>
          <div class="py-5" v-if="user">
            <router-link to="/dashboard" class="btn btn-outline-primary"
              >Dashboard</router-link
            >
          </div>
        </div>
        <!-- <svg
          class="h-30 w-full mr-1 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg> -->
        <div></div>
        <img
          src="../assets/programming-illustrations.svg"
          class="h-64 w-full flex ml-12"
          alt="Illustration"
        />
      </div>
    </section>

    <section class="bg-bookmark-white py-5 mt-5 lg:mt-60 max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue">Features</h1>
        <p class="text-justify text-bookmark-grey mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          topics. You can find Course Materials, Varsity, Notice, Routine,
          Important Information all in the same place.
        </p>
      </div>
      <!-- Feature #1 -->
      <div class="relative mt-20 lg:mt-24">
        <div
          class="container flex flex-col lg:flex-row items-center justify-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="../assets/illustration-features-tab-1.png"
              alt=""
            />
          </div>
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Community Building</h1>
            <p
              class="text-bookmark-grey my-4 lg:text-justify sm:w-3/4 lg:w-full"
            >
              Students can help each other on a discussion board. Topics can be
              from course-related study to careers. While everything is
              moderated by selected individuals.
            </p>
          </div>
        </div>
        <!-- Rounded Rectangle -->
        <div
          class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
        ></div>
      </div>
      <!-- Feature #2 -->
      <div class="relative mt-20 lg:mt-52">
        <div
          class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="../assets/illustration-features-tab-2.png"
              alt=""
            />
          </div>
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Expected Outcome</h1>
            <p
              class="text-bookmark-grey my-4 lg:text-justify sm:w-3/4 lg:w-full"
            >
              When completed Students will not be limited by their semester.
              They can gather more knowledge besides academic education. They
              gather good knowledge about research fields. They build a large
              community between themselves and they become more productive by
              saving time. Our software also will take care of miscellaneous
              information.
            </p>
            <!-- <button
              type="button"
              class="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button> -->
          </div>
        </div>
        <!-- Rounded Rectangle -->
        <div
          class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"
        ></div>
      </div>
      <!-- Feature #3 -->
      <div class="relative mt-20 lg:mt-52">
        <div
          class="container flex flex-col lg:flex-row items-center justify-center gap-x-24"
        >
          <!-- Image -->
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="../assets/illustration-features-tab-3.png"
              alt=""
            />
          </div>
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Share your thought</h1>
            <p
              class="text-bookmark-grey my-4 lg:text-justify sm:w-3/4 lg:w-full"
            >
              Easily share your thought and collections with others. Create a
              good bonding with others.
            </p>
          </div>
        </div>
        <!-- Rounded Rectangle -->
        <div
          class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
        ></div>
      </div>
    </section>

    <!-- Download -->
    <section class="py-5 mt-5 max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue">Project Members</h1>
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

    <!-- FAQ -->
    <section class="bg-bookmark-white py-5 mt-5 max-w-6xl mx-auto">
      <div class="container">
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-justify text-bookmark-blue">
            Frequently Asked Questions
          </h1>
          <p class="text-center text-bookmark-grey mt-4">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <!-- FAQ Items -->
        <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-3 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">What is a Bookmark?</span>
            <i class="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <div class="flex items-center border-b py-4">
            <span class="flex-1">How can I request a new browser?</span>
            <i class="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <div class="flex items-center border-b py-4">
            <span class="flex-1">Is there a mobile app?</span>
            <i class="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>

    <Footer />

    <!-- Contact Us
    <section class="bg-bookmark-purple text-white py-5 mt-5 max-w-6xl mx-auto">
      <div class="container">
        <div class="sm:w-3/4 lg:w-2/4 mx-auto">
          <p class="font-light uppercase text-center mb-8">
            35,000+ ALREADY JOINED
          </p>
          <h1 class="text-3xl text-center">
            Stay up-to-date with what we’re doing
          </h1>
          <div class="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your email address"
              class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
            />
            <button
              type="button"
              class="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Footer -->
    <!-- <footer class="bg-bookmark-blue py-8 max-w-6xl mx-auto">
      <div class="container flex flex-col md:flex-row items-center">
        <div
          class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12"
        >
          <img src="../assets/logo-bookmark-white.png" alt="" />
          <ul class="flex text-white uppercase gap-12 text-xs">
            <li class="cursor-pointer">Features</li>
            <li class="cursor-pointer">Pricing</li>
            <li class="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0">
          <li><i class="text-white text-2xl fab fa-twitter"></i></li>
          <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import NavLanding from '../components/NavLanding.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: { NavLanding, Footer },
  data() {
    return {
      user: null,
      showMenu: false,
    }
  },
  async mounted() {
    const result = await axios.get('user')
    this.user = result.data
    // if (!result) {
    //   this.$router.push({ name: 'SignUp' })
    // }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
