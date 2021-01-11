<template>
  <div class="row is-center">
    <div class="col">
        <nav class="tabs is-center">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
nav a.router-link-exact-active {
   border-color: #14854f;
}
</style>
