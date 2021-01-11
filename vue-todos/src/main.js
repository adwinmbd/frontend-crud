import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).use(router).mount("#app");
