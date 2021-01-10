import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      todo: Model,
    },

    seeds(server) {
      server.create("todo", { text: "Buy groceries" });
      server.create("todo", { text: "Walk the dog" });
      server.create("todo", { text: "Do laundry" });
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;

      this.get("/todos", (schema) => {
        return schema.todos.all();
      });

      this.post("/todos", (schema, request) => {
        // let todo = JSON.parse(request.requestBody).data;
        let todo = JSON.parse(request.requestBody);
        return schema.todos.create(todo);
      });

      this.patch("/todos/:id", (schema, request) => {
        // let data = JSON.parse(request.requestBody).data;
        let data = JSON.parse(request.requestBody);
        let id = request.params.id;
        return schema.todos.find(id).update(data);
      });

      this.delete("/todos/:id", (schema, request) => {
        let id = request.params.id;
        return schema.todos.find(id).destroy();
      });
    },
  });

  // window.server = server;

  return server;
}