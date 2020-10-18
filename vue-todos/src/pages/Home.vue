<template>
  <div>
    <div class="card">
      <header class="header">
        <p class="card-header-title heading">
          Todos
        </p>
      </header>
      <div class="card-content">
        <div v-if="editing === false">
          <form @submit.prevent="postTodo">
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input
                  v-model="newTodo.text"
                  class="input"
                  type="text"
                  placeholder="Add todo..."
                />
              </div>
              <div class="control">
                <button class="button is-primary">
                  <span class="icon is-small">
                    <plus-circle-icon></plus-circle-icon>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div v-else>
          <form @submit.prevent="postEdit">
            <input :value="editedTodo.id" type="hidden" />
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input
                  v-model="editedTodo.text"
                  class="input"
                  type="text"
                  placeholder="Update todo..."
                />
              </div>
              <div class="control">
                <button class="button is-warning">
                  <span class="icon is-small">
                    <edit-icon></edit-icon>
                  </span>
                </button>
              </div>
            </div>
          </form>

          <!--
          <p>Editing ...</p>
          -->
        </div>

        <hr />
        <ul>
          <li v-if="todos.length < 1">
            <Spinner></Spinner>
          </li>
          <li v-else class="list-item" v-for="todo in todos" :key="todo.id">
            <div class="is-flex" style="align-items: center;">
              <span class="is-pulled-left">{{ todo.text }}</span>
              <div style="flex: 1;"></div>
              <button
                class="button is-text is-pulled-right is-small is-warning"
                @click="editTodo(todo)"
              >
                <span class="icon">
                  <edit-icon></edit-icon>
                </span>
              </button>
              &nbsp;
              <button
                class="button is-text is-pulled-right is-small is-danger"
                @click="deleteTodo(todo.id)"
              >
                <span class="icon">
                  <trash-icon></trash-icon>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  margin-top: 0.5rem;
}
.heading {
  font-size: 1.5rem;
}
</style>

<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";
import { EditIcon, PlusCircleIcon, TrashIcon } from "vue-feather-icons";
export default {
  name: "Todos",
  components: {
    EditIcon,
    PlusCircleIcon,
    TrashIcon,
    Spinner,
  },
  created() {
    // this.isLoading = true
    this.getTodos();
  },
  data() {
    return {
      todos: [],
      newTodo: {},
      editedTodo: {},
      editing: false,
      isLoading: false,
    };
  },
  methods: {
    async getTodos() {
      try {
        let res = await axios.get(`/api/todos`);
        this.todos = res.data;
      } catch (e) {
        console.log(e);
        return { todos: [] };
      }
    },
    // add todo
    async postTodo() {
      if (this.newTodo.text) {
        // console.log(this.newTodo);
        try {
          let res = await axios.post("/api/todos", {
            data: this.newTodo,
          });
          this.todos.push(res.data);
          this.newTodo = {};
          return;
        } catch (e) {
          console.log(e);
          return;
        }
      }
      console.log("Field is empty");
      return;
    },
    // delete todo
    async deleteTodo(id) {
      try {
        await axios.delete(`/api/todos/${id}`); // delete todo
        this.getTodos();
      } catch (e) {
        console.log(e);
        return;
      }
    },
    // set editing mode
    editTodo(todo) {
      this.editing = true;
      this.editedTodo = { ...todo };
    },
    // update todo in backend
    async postEdit() {
      this.editing = false;
      if (this.editedTodo.text) {
        const id = this.editedTodo.id;
        try {
          let res = await axios.patch(`/api/todos/${id}`, {
            data: this.editedTodo,
          });
          this.getTodos();
          this.editedTodo = {};
          return;
        } catch (e) {
          console.log(e);
          return;
        }
      }
      console.log("Field is empty");
      this.editedTodo = {};
      return;
    },
  },
};
</script>
