<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-10-mobile">
            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-5-tablet is-10-mobile">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Major from "./components/Major.vue";
import Spinner from "./components/Spinner.vue";
export default {
  name: "App",
  components: {
    Major,
    Spinner,
  },
  data() {
    return {
      /*activeTab: 0,*/
    };
  },
  methods: {
    handleClick() {
      this.$router.push("famas");
    },
  },
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
body {
  /*padding: 0;
  margin: 0;
  width: 100%;*/
  width: 100%;
  min-height: 100vh;
}
body {
  /*background-color: #e2e8f0;*/
  background-color: #e2e8f0;
}

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
</style>
