<template>
  <div class="card">
    <header class="header">
      <p class="card-header-title heading">About</p>
    </header>
    <div class="card-content">
      <p class="top">
        This is an SPA made with
        <a href="https://miragejs.com">Mirage</a> and
        <a href="https://vuejs.org">Vue</a>. It has two routes to help
        demonstrate how Mirage's in-memory database enables realistic data
        fetching and persisting during a single application session.
      </p>
      <p class="top">Mirage's state is reset whenever the application is reloaded.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.top {
  margin-top: 1rem;
}
.heading {
  font-size: 1.5rem;
}
</style>
