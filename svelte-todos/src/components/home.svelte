<script>
  import { onMount } from "svelte";
  import Table from "./table.svelte";
  import Form from "./form.svelte";

  let todos = [];

  let editingTodo = {
    id: null,
    text: "",
  };

  onMount(async () => {
    const res = await fetch(`api/todos`).then((r) => r.json());
    todos = res.todos;
  });

  function addTodo({ detail: todo }) {
    if (todos.find((t) => t.id === todo.id)) {
      const index = todos.findIndex((t) => t.id === todo.id);
      let todosUpdated = todos;
      todosUpdated.splice(index, 1, todo);
      todos = todosUpdated;
    } else todos = [todo, ...todos];
    editingTodo = {
      id: null,
      text: "",
    };
  }

  function handleUpdateItem({ detail }) {
    editingTodo = detail;
    console.log(detail);
  }

  async function handleDeleteItem({ detail: id }) {
    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      todos = todos.filter((t) => t.id !== id);
    } catch (e) {
      console.log(e);
      return;
    }
  }
</script>

<div class="card">
  <header>
    <h4>Todos</h4>
  </header>
  <Form on:todoCreated={addTodo} {editingTodo} />
</div>
<hr />
<div class="card">
  <Table {todos} on:delete={handleDeleteItem} on:update={handleUpdateItem} />
</div>

<style>
</style>
