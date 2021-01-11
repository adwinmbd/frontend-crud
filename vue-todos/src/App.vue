<template>
  <div id="app">
    <Navigation />
    <div class="row is-center">
      <div class="col-10 col-5-md">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  }
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
body {
  background-color: #e2e8f0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
}

#nav a.router-link-exact-active {
  border-bottom: 2px solid orchid;
}
.heading {
  font-size: 1.5rem;
}
*/
</style>
