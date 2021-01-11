import "alpinejs";
import './assets/site.css'
import { makeServer } from "./server";

/*
if (process.env.NODE_ENV === "development") {
  makeServer();
}
console.log(process.env.NODE_ENV);
*/

makeServer();