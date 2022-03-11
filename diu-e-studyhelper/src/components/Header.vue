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
            <div class="flex items-center cursor-pointer pl-6 pr-3">
              <span class="text-green-500 text-xl mr-1">
                <i class="bi bi-stack"></i>
              </span>
              <h1 class="text-2xl font-bold">
                <span class="text-blue-500">e</span
                ><span class="text-green-500">-StudyHelper</span>
              </h1>
            </div>
            <router-link
              to="/forum"
              class="hover:no-underline text-black font-semibold rounded-lg px-4 py-2 | hover:bg-gray-200"
              >Forum</router-link
            >
            <router-link
              to="/about"
              class="hover:no-underline text-black font-semibold rounded-lg px-4 py-2 | hover:bg-gray-200"
              >About</router-link
            >
            <router-link
              to="/contact"
              class="hover:no-underline text-black font-semibold rounded-lg px-4 py-2 | hover:bg-gray-200"
              >Contact</router-link
            >
          </div>
          <div class="flex">
            <h1 class="text-base pr-4 py-2">Hi,{{ name }}</h1>
            <div class="relative">
              <button
                class="rounded-full overflow-hidden border-2 border-purple-500 w-9 h-9 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                @click="isOpen1 = true"
              >
                <img :src="image" alt="User's avatar" />
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

    <!-- <button
        @click="btn"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      Dropdown menu
      <t-dropdown text="Menu">
        <div class="py-1 rounded-md shadow-xs">
          <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100" role="menuitem">Your Profile</a>
                 <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100" role="menuitem">Settings</a>

        </div>
      </t-dropdown>
      <div
        
        class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul class="py-1" aria-labelledby="dropdownButton">
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div> -->
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
      name: '',
      abcd: false,
      isOpen1: false,
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
    btn() {
      this.abcd = !this.abcd
    },
  },
  async mounted() {
    const result = await axios.get(
      'user'
      // {
      //   headers: {
      //     jwt: localStorage.getItem('jwt'),
      //   },
      // }
    )
    // this.user = result.data
    console.log(result)
    this.name = result.data.name
    this.id = result.data.id
    this.image = result.data.image
    // const user = axios
    //   .get('http://localhost:3000/api/eStudyHelper/user/', {
    //     headers: {
    //       jwt: localStorage.getItem('jwt'),
    //     },
    //   })
    //   .then((res) => {
    //     this.name = res.data.user.name
    //     this.id = res.data.user.id
    //     this.pic = res.data.user.pic
    //   })
    // const user = localStorage.getItem('user-info')
    // this.name = JSON.parse(user).name
    // this.id = JSON.parse(user).id
    // this.pic = JSON.parse(user).pic
    if (!result) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
