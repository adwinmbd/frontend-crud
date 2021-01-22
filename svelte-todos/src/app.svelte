<script>
  import { Route } from "tinro";
  import Home from "./components/home.svelte";
  import About from "./components/about.svelte";
  import Navigation from "./components/navigation.svelte";
</script>

<main>
  <Navigation />
  <div class="row is-center">
    <div class="col-10 col-5-md">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  </div>
</main>
