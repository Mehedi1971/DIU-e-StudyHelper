<template>
  <div>
    <!-- <div v-if="!user">
      <nav
        class="flex flex-wrap items-center justify-between px-2 py-6 bg-white mb-3 fixed top-0 inset-x-0 z-50"
      >
        <div
          class="container px-4 max-w-6xl mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
          >
            <div class="flex items-center cursor-pointer">
              <router-link to="/" class="hover:no-underline">
                <img src="../assets/diulogo04.svg" alt="" class="h-11 w-12"
              /></router-link> -->

    <!-- <span class="text-green-500 text-xl mr-1">
                <i class="bi bi-stack"></i>
              </span>
              <router-link to="/" class="hover:no-underline">
                <h1 class="text-2xl font-bold">
                  <span class="text-blue-500">e</span
                  ><span class="text-green-500">-StudyHelper</span>
                </h1></router-link
              > -->
    <!-- </div>
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
                  to="/Login"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Login</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/SignUp"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Sign Up</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div><router-view /></div>
    </div> -->

    <!-- 2nd -->
    <div v-if="!user">
      <nav
        class="flex flex-wrap items-center justify-between px-2 py-6 bg-white mb-3 fixed top-0 inset-x-0 z-50"
      >
        <div
          class="container px-4 max-w-6xl mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
          >
            <div class="flex items-center cursor-pointer">
              <span class="text-green-500 text-xl mr-1">
                <i class="bi bi-stack"></i>
              </span>
              <router-link to="/" class="hover:no-underline">
                <h1 class="text-2xl font-bold">
                  <span class="text-blue-500">e</span
                  ><span class="text-green-500">-StudyHelper</span>
                </h1></router-link
              >
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
                  to="/adminDashboard"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold text-black hover:opacity-75 hover:no-underline"
                >
                  <i class="text-lg leading-lg text-black opacity-75" /><span
                    class="ml-2"
                    >Admin Dashboard</span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  to="/adminQuestionBank"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-twitter text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Question Bank</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Course Materials</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Login"
                  @click="logout"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Logout</span>
                </router-link>
              </li>
              <!-- <li>
                <router-link
                  to="/Login"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Login</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/SignUp"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:no-underline"
                >
                  <i
                    class="fab fa-pinterest text-lg leading-lg text-black opacity-75"
                  /><span class="ml-2">Sign Up</span>
                </router-link>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
      <div><router-view /></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'About',
  data() {
    return {
      // user: null,
      showMenu: false,
    }
  },
  async mounted() {
    const user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'AdminLogin' })
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>
