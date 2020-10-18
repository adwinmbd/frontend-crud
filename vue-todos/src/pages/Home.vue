<template>
  <div>
    <div class="card">
      <header class="header">
        <p class="card-header-title heading">Todos</p>
      </header>
      <div class="card-content">
        <div v-if="editing === false">
          <form @submit.prevent="postTodo">
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input v-model="newTodo.text" class="input" type="text" placeholder="Add todo..." />
              </div>
              <div class="control">
                <button class="button is-primary">
                  <span class="icon is-small">
                    <img height="32" width="32" src="../assets/img/plus-icon.svg" />
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
                    <img height="32" width="32" src="../assets/img/edit-icon.svg" />
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
                  <img height="32" width="32" src="../assets/img/edit-icon.svg" />
                </span>
              </button>
              &nbsp;
              <button
                class="button is-text is-pulled-right is-small is-danger"
                @click="deleteTodo(todo.id)"
              >
                <span class="icon">
                  <img height="32" width="32" src="../assets/img/trash-icon.svg" />
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
export default {
  name: "Todos",
  components: {
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
        // let res = await axios.get(`/api/todos`);
        // this.todos = res.data.todos;
        const res = await fetch(`api/todos`).then((r) => r.json());
        this.todos = res.todos;
      } catch (e) {
        console.log(e);
        return { todos: [] };
      }
    },
    // add todo
    async postTodo() {
      if (this.newTodo.text) {
        try {
          // let res = await axios.post(`/api/todos`, {
          //   data: this.newTodo,
          // });
          // this.todos.push(res.data.todo);
          // this.todos = [...this.todos, res.data.todo]
          const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(this.newTodo),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then((r) => r.json());
          // console.log(res.todo);
          this.todos = [...this.todos, res.todo];
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
          // let res = await axios.patch(`/api/todos/${id}`, {
          //   data: this.editedTodo,
          // });
          // this.getTodos();
            const res = await fetch(`/api/todos/${this.editedTodo.id}`, {
              method: "PATCH",
              body: JSON.stringify(this.editedTodo),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }).then((r) => r.json());
            // this.getTodos();
            const info = res.todo;
            this.todos = this.todos.map((todo) =>
              todo.id === this.editedTodo.id ? info : todo
            );
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
