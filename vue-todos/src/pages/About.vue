<template>
  <div class="card">
      <header>
          <h4>About</h4>
      </header>
      <p>
          This is an SPA made with&nbsp; 
          <a href="https://miragejs.com">Mirage</a> and&nbsp; 
          <a href="https:/vuejs.org">React</a>. It has two routes to
          help demonstrate how Mirage's in-memory database enables
          realistic data fetching and persisting during a single
          application session.
      </p>
      <p>
          Mirage's state is reset whenever the application is
          reloaded.
      </p>
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
