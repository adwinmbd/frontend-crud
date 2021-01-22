<script>
  import Spinner from "./spinner.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function triggerDelete(todo) {
    const yes = confirm("Are you sure you wish to delete this item ?");
    if (yes) {
      dispatch("delete", todo.id);
    }
  }

  function triggerUpdate(todo) {
    dispatch("update", todo);
  }
  export let todos = [];
</script>

{#if todos.length === 0}
  <Spinner />
{:else}
  <table class="striped">
    <tbody>
      {#each todos as todo}
        <tr>
          <td>{todo.text}</td>
          <td class="pull-right">
            <button
              on:click|preventDefault={triggerUpdate(todo)}
              class="button icon-only">
              <img
                height="18"
                width="18"
                src="/create-outline.svg"
                alt="edit icon"
              />
            </button>
            <button
              on:click|preventDefault={triggerDelete(todo)}
              class="button error icon-only">
              <img
                height="18"
                width="18"
                src="/trash-outline.svg"
                alt="trash icon"
              />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
</style>
