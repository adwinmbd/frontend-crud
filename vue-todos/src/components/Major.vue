<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div class="columns is-centered">
          <div class="column is-5-tablet is-10-mobile">
            <div class="card">
              <header class="header">
                <p class="card-header-title heading">Todos</p>
              </header>
              <div class="card-content">
                <form @submit.prevent="postTodo">
                  <div class="field has-addons has-addons-centered">
                    <div class="control">
                      <input
                        v-model="task.text"
                        class="input"
                        type="text"
                        placeholder="Add a task
                            ..."
                      />
                    </div>
                    <div class="control">
                      <button class="button is-primary">
                        <span class="icon is-small">
                          <span data-feather="plus"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
                <ul>
                  <li class="list-item">
                    <div class="is-flex" style="align-items: center">
                      <span class="is-pulled-left">Mama</span>
                      <div style="flex: 1"></div>
                      <button class="button is-text is-pulled-right is-small is-warning">
                        <span class="icon">
                          <span data-feather="edit"></span>
                        </span>
                      </button>
                      &nbsp;
                      <button
                        class="button is-text is-pulled-right is-small is-danger"
                      >
                        <span class="icon">
                          <span data-feather="trash"></span>
                        </span>
                      </button>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="is-flex" style="align-items: center">
                      <span class="is-pulled-left">Bama</span>
                      <div style="flex: 1"></div>
                      <button class="button is-text is-pulled-right is-small is-warning">
                        <span class="icon">
                          <span data-feather="edit"></span>
                        </span>
                      </button>
                      &nbsp;
                      <button
                        class="button is-text is-pulled-right is-small is-danger"
                      >
                        <span class="icon">
                          <span data-feather="trash"></span>
                        </span>
                      </button>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="is-flex" style="align-items: center">
                      <span class="is-pulled-left">Mtoto</span>
                      <div style="flex: 1"></div>
                      <button class="button is-text is-pulled-right is-small is-warning">
                        <span class="icon">
                          <span data-feather="edit"></span>
                        </span>
                      </button>
                      &nbsp;
                      <button
                        class="button is-text is-pulled-right is-small is-danger"
                      >
                        <span class="icon">
                          <span data-feather="trash"></span>
                        </span>
                      </button>
                    </div>
                  </li>
                  <li class="has-text-centered">Nothing here!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Major",
  created() {
    this.getTodos();
  },
  data() {
    return {
      todos: [],
      task: {},
      editedTodo: {},
      editing: false
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
      if (this.task.text) {
        console.log(this.task);
        let newTodos = await axios.post("/api/todos", {
          data: this.task
        });
        this.todos.push(newTodos.data);
        // this.$set(this.task, index, task);
        this.task.id = "";
        this.task.text = "";
      } else {
        console.log("Field is empty");
      }
    },
    // delete todo
    async deleteTodo(todoItem) {
      try {
        console.log(`/api/todos/${todoItem.id}`);
        await axios.delete(`/api/todos/${todoItem.id}`); // delete todo
        this.getTodos();
      } catch (e) {
        console.log(e);
      }
    },
    // set editing mode
    editTodo(todo) {
      this.editing = true;
      this.editedTodo = {};
      this.editedTodo.id = todo.id;
      this.editedTodo.name = todo.text;
    },
    // update todo in backend
    async postEdit() {
      this.editing = false;
      if (this.editedTodo.id) {
        await this.axios.patch(`/todos/${this.editedTodo.id}`, {
          data: this.editedTodo
        });
        // this.todos.push(newTodos.data)
        this.getTodos();
        this.editedTodo = "";
      } else {
        console.log("Field is empty");
      }
    }
  }
};
</script>

<style>
.main-color {
  background-color: #f3f3f6;
}
</style>
