<script>
  import { createEventDispatcher } from "svelte";
  export let editingTodo;

  const dispatch = createEventDispatcher();

  $: text = editingTodo.text;

  const apiBaseUrl = "/api";

  async function onSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }

    const newTodo = { text };

    let url, method;
    if (editingTodo.id) {
      url = `${apiBaseUrl}/todos/${editingTodo.id}`;
      method = "PATCH";
    } else {
      url = `${apiBaseUrl}/todos`;
      method = "POST";
    }

    const res = await fetch(url, {
      method,
      body: JSON.stringify(newTodo),
    }).then((r) => r.json());

    const todo = res.todo;
    dispatch("todoCreated", todo);
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <p class="grouped">
    <input
      type="text"
      bind:value={editingTodo.text}
      placeholder="Todo details ..."
    />

    {#if editingTodo.id}
      <span>
        <button class="button icon-only" type="submit">
          <img
            height="20"
            width="20"
            src="/create-outline.svg"
            alt="edit icon"
          />
        </button>
      </span>
    {:else}
      <span>
        <button class="button primary icon-only" type="submit">
          <img
            height="20"
            width="20"
            src="/add-circle-outline.svg"
            alt="add icon"
          />
        </button>
      </span>
    {/if}
  </p>
</form>

<style>
</style>
