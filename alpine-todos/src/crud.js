function todos() {
    return {
      todos: [],
      editTodoTitle: "",
      editTodo:{},
      newTodo: {},
      editing: false,
      editedTodo: {},
      todoId: 2,
      async fetchTodos() {
        try {
          const res = await fetch("api/todos").then((r) => r.json());
          this.todos = res.todos;
        } catch (e) {
          console.log(e);
          return;
        }
      },
      async addTodo() {
        if (this.newTodo.text.trim() === "") {
          return;
        }

        try {
          const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(this.newTodo),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then((r) => r.json());
          this.todos = [...this.todos, res.todo];
          this.newTodo = {}
        } catch (e) {
          console.log(e);
        }
      },
      async deleteTodo(id) {
        try {
          await fetch(`/api/todos/${id}`, {
            method: "DELETE",
          });
          this.todos = this.todos.filter((todo) => todo.id !== id);
          // this.fetchTodos();
        } catch (e) {
          console.log(e);
        }
      },
      setEditMode(todo) {
        this.editing = true;
        this.editTodo = { ...todo };
      },
      async updateTodo() {
        this.editing = false;
        if (this.editTodo.id && this.editTodo.text) {
  
          try {
            const res = await fetch(`/api/todos/${this.editTodo.id}`, {
              method: "PATCH",
              body: JSON.stringify(this.editTodo),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }).then((r) => r.json());
            // this.fetchTodos();
            const info = res.todo;
            this.todos = this.todos.map((todo) =>
              todo.id === this.editTodo.id ? info : todo
            );
          } catch (e) {
            console.log("what is going on ?");
            console.log(e);
          }
  
          this.editTodo = {};
          return;
        }
        console.log("Field is empty");
        this.editedTodo = {};
        return;
      },
    };
  }
  