import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.css";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).use(router).mount("#app");
