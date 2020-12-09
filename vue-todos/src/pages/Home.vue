<template>
  <div>
    <div class="card">
      <header class="header">
        <p class="card-header-title heading">Todos</p>
      </header>
      <div class="card-content">
        <todo-form @add-todo="postTodo" :editedTodo="editedTodo" :editing="editing"/>
        <hr />
        <todo-table :todos="todos" @edit-todo="editTodo" @delete-todo="deleteTodo"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 1.5rem;
}
</style>

<script>
// import axios from "axios";
import TodoTable from "../components/TodoTable.vue";
import TodoForm from "../components/TodoForm.vue";
export default {
  name: "Todos",
  components: {
    TodoForm,
    TodoTable,
  },
  created() {
    this.getTodos();
  },
  data() {
    return {
      todos: [],
      newTodo: {},
      editedTodo: {},
      editing: false,
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
    // delete todo
    async deleteTodo(id) {
      try {
        // await axios.delete(`/api/todos/${id}`); // delete todo
        await fetch(`/api/todos/${id}`, {
          method: "DELETE",
        });
        this.todos = this.todos.filter((todo) => todo.id !== id);
        // this.getTodos();
      } catch (e) {
        console.log(e);
        return;
      }
    },
    // set editing mode
    editTodo(todo) {
      this.editing=true;
      this.editedTodo = { ...todo };
    },
    // add or edit todo
    async postTodo(todo) {
        if(todo.text){
            if(todo.id){
                try {
                // let res = await axios.patch(`/api/todos/${id}`, {
                //   data: this.editedTodo,
                // });
                // this.getTodos();
                    const res = await fetch(`/api/todos/${todo.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(todo),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    }).then((r) => r.json());
                    // this.getTodos();
                    const info = res.todo;
                    this.todos = this.todos.map((todos) =>
                        todos.id === todo.id ? info : todos
                    );
                    this.editing=false;
                    return;
                } catch (e) {
                    console.log(e);
                    return;
                }
            }else{
                try {
                    // let res = await axios.post(`/api/todos`, {
                    //   data: this.newTodo,
                    // });
                    // this.todos.push(res.data.todo);
                    // this.todos = [...this.todos, res.data.todo]
                    const res = await fetch("/api/todos", {
                        method: "POST",
                        body: JSON.stringify(todo),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        },
                    }).then((r) => r.json());
                    // console.log(res.todo);
                    this.todos = [...this.todos, res.todo];
                    return;
                } catch (e) {
                    console.log(e);
                    return;
                }
            }
        }else{
            console.log("Field is empty");
            return;
        }
    },
  },
};
</script>
