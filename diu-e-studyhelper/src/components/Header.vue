<template>
  <div>
    <!-- <div
      class="bg-white text-black py-3.5 px-6 shadow md:flex justify-between items-center"
    > -->
    <!-- fixed inset-x-0 -->
    <!-- <div class="flex items-center cursor-pointer pl-3 pr-3">
        <span class="text-green-500 text-xl mr-1">
          <i class="bi bi-stack"></i>
        </span>
        <h1 class="text-2xl font-bold">
          <span class="text-blue-500">e</span
          ><span class="text-green-500">-StudyHelper</span>
        </h1>
      </div> -->
    <!-- <ul class="md:flex md:items-center no-underline"> -->
    <!-- <li class="md:mx-4">
          <router-link to="/" class="text-base hover:text-green-500"
            >Home</router-link
          >
        </li> -->
    <!-- <li class="md:mx-4">
          <router-link to="/forum" class="text-base hover:text-green-500"
            >Forum</router-link
          >
        </li>
        <li class="md:mx-4">
          <router-link to="/about" class="text-base hover:text-green-500"
            >About</router-link
          >
        </li>
        <li class="md:mx-4">
          <router-link to="/contact" class="text-base hover:text-green-500"
            >Contact</router-link
          >
        </li> -->

    <!-- <li class="md:mx-4">
          <router-link
            to="/Login"
            class="text-base hover:text-green-500"
            @click="logout"
            >Logout</router-link
          >
        </li> -->
    <!-- <li class="md:mx-4">
          <h1 class="text-base">Hi,{{ name }}</h1>
        </li>
      </ul> -->

    <nav class="h-16 text-black bg-white flex items-center">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex">
            <div>
              <div class="flex items-center cursor-pointer pl-6 pr-3">
                <router-link to="/" class="hover:no-underline">
                  <img
                    src="../assets/diu05.png"
                    alt=""
                    class="h-0 w-0 lg:h-11 lg:w-12"
                /></router-link>
                <!-- <span class="text-green-500 text-xl mr-1">
                <i class="bi bi-stack"></i>
              </span>
              <h1 class="text-2xl font-bold">
                <span class="text-blue-500">e</span
                ><span class="text-green-500">-StudyHelper</span>
              </h1> -->
              </div>
              <button
                class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                @click="toggleNavbar"
              >
                <i class="bi bi-list"></i>
              </button>
            </div>
            <div
              v-bind:class="{ hidden: !showMenu, flex: showMenu }"
              class="lg:flex lg:flex-grow items-center"
            >
              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li>
                  <router-link
                    to="/dashboard"
                    class="hover:no-underline text-black font-semibold rounded-lg px-4 | hover:bg-gray-200"
                    >Dashboard</router-link
                  >
                </li>
                <li>
                  <a
                    href="https://diucseforumv2.herokuapp.com/"
                    class="hover:no-underline text-black font-semibold rounded-lg px-4 | hover:bg-gray-200"
                    >Forum</a
                  >
                </li>
                <li>
                  <router-link
                    to="/questionBank"
                    class="hover:no-underline text-black font-semibold rounded-lg px-4 | hover:bg-gray-200"
                    >Question Bank</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/coursematerials"
                    class="hover:no-underline text-black font-semibold rounded-lg px-4 | hover:bg-gray-200"
                    >Course Materials</router-link
                  >
                </li>
                <li>
                  <!-- more -->
                  <div class="flex">
                    <div class="relative">
                      <button
                        class="hover:no-underline text-black font-semibold rounded-lg px-4 | hover:bg-gray-200"
                        @click="isOpen2 = true"
                      >
                        More
                      </button>

                      <div
                        v-if="isOpen2"
                        class="fixed inset-0 w-full h-screen"
                        @click="isOpen2 = false"
                      ></div>
                      <div
                        v-if="isOpen2"
                        class="absolute z-30 right-0 mt-2"
                        :class="{ hidden: !isOpen2 }"
                      >
                        <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                          <router-link
                            to="/links"
                            class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                          >
                            Useful Links</router-link
                          >
                          <router-link
                            to="/about"
                            class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                          >
                            About</router-link
                          >

                          <router-link
                            to="/contact"
                            class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                            >Contact</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex">
            <h1 class="text-base pr-4 py-2">Hi,{{ name }}</h1>
            <div class="relative">
              <button
                class="rounded-full overflow-hidden border-2 border-purple-500 w-9 h-9 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                @click="isOpen1 = true"
              >
                <img src="../assets/dp.png" alt="User's avatar" />
                <!-- <img :src="image" alt="User's avatar" /> -->
              </button>

              <div
                v-if="isOpen1"
                class="fixed inset-0 w-full h-screen"
                @click="isOpen1 = false"
              ></div>
              <div
                v-if="isOpen1"
                class="absolute z-30 right-0 mt-2"
                :class="{ hidden: !isOpen1 }"
              >
                <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                  <router-link
                    to="/profile"
                    class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                  >
                    Your Profile</router-link
                  >
                  <a
                    :href="`/updateprofile/` + id"
                    class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                    >Settings</a
                  >
                  <!-- <router-link to="`/updateprofile/`+id" class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200">Settings</router-link> -->
                  <router-link
                    to="/Login"
                    @click="logout"
                    class="block hover:no-underline text-gray-600 font-semibold px-4 py-2 | hover:text-black hover:bg-gray-200"
                  >
                    Sign out</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div><router-view /></div>
  </div>

  <!-- </div> -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data() {
    return {
      // user: null,
      showMenu: false,
      name: '',
      abcd: false,
      isOpen1: false,
      isOpen2: false,
      id: '',
      image: '',
    }
  },
  // async created() {
  //   const result = await axios.get(
  //     'http://localhost:3000/api/eStudyHelper/user/',
  //     {
  //       headers: {
  //         jwt: localStorage.getItem('jwt'),
  //       },
  //     }
  //   )
  //   this.user = result.data
  // },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'Home' })
    },
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
    // btn() {
    //   this.abcd = !this.abcd
    // },
  },
  async mounted() {
    const result = await axios.get('user')

    console.log(result)
    this.name = result.data.name
    this.id = result.data.id
    this.image = result.data.image

    if (!result) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
