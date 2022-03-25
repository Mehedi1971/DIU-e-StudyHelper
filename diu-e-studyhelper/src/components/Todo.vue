<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->
    <h2 class="text-center mt-5 font-bold border-2 px-4 py-2 bg-blue-400">
      Todo List
    </h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="description"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <button class="btn btn-warning rounded-0" @click="addItem">SUBMIT</button>
    </div>

    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>

          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="item._id">
          <td>
            <input
              class="w-100 form-control"
              v-if="isSelected(item)"
              v-model="editedDescription"
            />
            <p v-else>
              <span>{{ i + 1 }}</span>
              {{ item.description }}
            </p>
          </td>

          <td class="text-center">
            <span @click="isSelected(item) ? unselect() : select(item)">
              <i
                class="text-blue-400 font-semibold py-2 px-4 hover:text-blue-700"
                >{{ isSelected(item) ? 'close' : 'edit' }}</i
              >
            </span>
          </td>
          <td class="text-center">
            <span
              @click="
                isSelected(item) ? updateItem(item, i) : removeItem(item, i)
              "
            >
              <i
                class="text-blue-400 font-semibold py-2 px-4 hover:text-blue-700"
                >{{ isSelected(item) ? 'save' : 'delete' }}</i
              >
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <div class="container" style="max-width: 600px">
    <h1 class="text-center mt-5">Todo List:</h1>
    <hr />
    <div>
      <div class="d-flex mt-5">
        <input
          class="w-100 form-control"
          v-model="description"
          type="text"
          placeholder="Go to mars..."
        />
      </div>
      <div>
        <a @click="addItem" :disabled="!description">Add</a>
      </div>
    </div>
    <div class="items-center">
      <div
        class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-110"
        v-for="(item, i) in items"
        :key="item._id"
      >
        <div>
          <input
            class="w-100 form-control"
            v-if="isSelected(item)"
            v-model="editedDescription"
          />
          <p v-else>
            <span>{{ i + 1 }}</span>
            {{ item.description }}
          </p>
          <div>
            <span @click="isSelected(item) ? unselect() : select(item)">
              <i
                class="text-blue-400 font-semibold py-2 px-4 hover:text-blue-700"
                >{{ isSelected(item) ? 'close' : 'edit' }}</i
              >
            </span>

            <span
              @click="
                isSelected(item) ? updateItem(item, i) : removeItem(item, i)
              "
            >
              <i
                class="text-blue-400 font-semibold py-2 px-4 hover:text-blue-700"
                >{{ isSelected(item) ? 'save' : 'delete' }}</i
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios'
export default {
  name: 'Todo',
  data() {
    return {
      items: [],
      description: '',
      editedDescription: '',
      selected: {},
    }
  },
  async mounted() {
    // await axios.get('user')
    const response = await axios.get(
      'http://localhost:3000/api/eStudyHelper/TodoList/'
    )
    this.items = response.data
  },
  methods: {
    async addItem() {
      const response = await axios.post(
        'http://localhost:3000/api/eStudyHelper/TodoList/',
        {
          description: this.description,
        }
      )
      this.items.push(response.data)
      this.description = ''
    },
    async removeItem(item, i) {
      await axios.delete(
        'http://localhost:3000/api/eStudyHelper/TodoList/' + item._id
      )
      this.items.splice(i, 1)
    },
    select(item) {
      this.selected = item
      this.editedDescription = item.description
    },
    isSelected(item) {
      return item._id === this.selected._id
    },
    unselect() {
      this.selected = {}
      this.editedDescription = ''
    },
    async updateItem(item, i) {
      const response = await axios.put(
        'http://localhost:3000/api/eStudyHelper/TodoList/' + item._id,
        {
          description: this.editedDescription,
        }
      )
      this.items[i] = response.data
      this.unselect()
    },
  },
}
</script>

<style></style>
