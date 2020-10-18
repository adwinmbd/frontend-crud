function todos() {
    return {
      todos: [],
      addTodoTitle: "",
      editTodoTitle: "",
      editTodo:{},
      editing: false,
      editedTodo: {},
      todoId: 2,
      async fetchTodos() {
        // const info = await fetch("https://jsonplaceholder.typicode.com/todos", {
        try {
          const res = await fetch("api/todos").then((r) => r.json());
          this.todos = res.todos;
        } catch (e) {
          console.log(e);
          return;
        }
      },
      async addTodo() {
        if (this.addTodoTitle.trim() === "") {
          return;
        }
  
        let data = {
          title: this.addTodoTitle,
        };
        const buda = JSON.stringify(data);
        console.log(buda);
        try {
          const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then((r) => r.json());
          this.todos = [...this.todos, res.todo];
          this.addTodoTitle = "";
          data = {};
        } catch (e) {
          console.log(e);
        }
      },
      async deleteTodo(id) {
        try {
          // const info = await fetch("https://jsonplaceholder.typicode.com/todos/${id}", {
          await fetch(`/api/todos/${id}`, {
            method: "DELETE",
          });
          // this.todos = this.todos.filter((todo) => todo.id !== id);
          this.fetchTodos();
        } catch (e) {
          console.log(e);
        }
      },
      setEditMode(todo) {
        this.editing = true;
        this.editedTodo = { ...todo };
        // this.editTodoTitle = this.editedTodo.title;
        this.editTodo.id = this.editedTodo.id;
        this.editTodo.title = this.editedTodo.title;
      },
      // async editTodo() {
      async updateTodo() {
        this.editing = false;
        // if (this.editedTodo && this.editTodo.title) {
        if (this.editedTodo.id && this.editTodo.title) {
          let updatedTodo = {
            id: this.editedTodo.id,
            title: this.editTodo.title,
          };
          // console.log(data);
          // console.log(updatedTodo.id);
  
          // this.todos = this.todos.map((todo) =>
          //   todo.id === updatedTodo.id ? updatedTodo : todo
          // );
  
          try {
            // const info = await fetch("https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}", {
            const res = await fetch(`/api/todos/${updatedTodo.id}`, {
              method: "PATCH",
              body: JSON.stringify(updatedTodo),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }).then((r) => r.json());
            const info = res.todo;
            this.todos = this.todos.map((todo) =>
              todo.id === updatedTodo.id ? info : todo
            );
          } catch (e) {
            console.log("what is going on ?");
            console.log(e);
          }
  
          this.editedTodo = {};
          this.editTodoTitle = "";
          updatedTodo = {};
          return;
        }
        console.log("Field is empty");
        this.editedTodo = {};
        return;
      },
    };
  }
  