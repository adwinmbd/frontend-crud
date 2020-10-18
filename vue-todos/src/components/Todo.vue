<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-12 is-10-tablet is-8-desktop">
        <div class="card">
          <p v-if="todos.length < 1" class="empty-table">No todos</p>
          <table v-else class="table is-bordered is-striped is-hoverable is-fullwidth">
            <caption>Todos</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Actions</th>
                <!--<th style="text-align:center;" colspan="2">Actions</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in todos" :key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.name }}</td>
                <td>
                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-warning" @click="editTodo(todo)">Update</button>
                    </p>
                    <p class="control">
                      <button class="button is-danger" @click="deleteTodo(todo)">Delete</button>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["todo"],
  name: "Todo",
  data() {
    return {
      todos: [],
      task: {},
      editedTodo: {},
      editing: false
    };
  }
};
</script>
<style scoped></style>
