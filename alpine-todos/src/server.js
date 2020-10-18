import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
      environment,
  
      models: {
        // user: Model,
        todo: Model,
      },
  
      seeds(server) {
        /*
        server.create("user", { name: "Leanne Graham", company: "Romaguera-Crona", phone: "1-770-736-8031 x56442", email: "Sincere@april.biz", website: "hildegard.org"});
        server.create("user", { name: "Ervin Howell", company: "Deckow-Crist", phone: "010-692-6593 x09125", email: "Shanna@melissa.tv", website: "anastasia.net"});
        server.create("user", { name: "Clementine Bauch", company: "Romaguera-Jacobson", phone: "1-463-123-4447", email: "Nathan@yesenia.net", website: "ramiro.info"});
        server.create("user", { name: "Patricia Lebsack", company: "Robel-Corkery", phone: "493-170-9623 x156", email: "Julianne.OConner@kory.org", website: "kale.biz"});
        server.create("user", { name: "Chelsey Dietrich", company: "Keebler LLC", phone: "(254)954-1289", email: "Lucio_Hettinger@annie.ca", website: "demarco.info"});
        server.create("user", { name: "Mrs. Dennis Schulist", company: "Considine-Lockman", phone: "1-477-935-8478 x6430", email: "Karley_Dach@jasper.info", website: "ola.org"});
        */
       server.create("todo", { title: "Buy groceries" });
       server.create("todo", { title: "Walk the dog" });
       server.create("todo", { title: "Do laundry" });
      },
  
      routes() {
        this.namespace = "api";
        this.timing = 1500;
        
        /*
        this.get("/users", (schema) => {
          return schema.users.all()
        })
        */
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
          // let todo = schema.todos.find(id);

          // return todos.update(data);
          return schema.todos.find(id).update(data);
        });

        this.delete("/todos/:id", (schema, request) => {
          let id = request.params.id;

          return schema.todos.find(id).destroy();
        });
      },
    })
  
    return server
}