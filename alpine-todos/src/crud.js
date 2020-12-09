function todos() {
  return {
    todos: [],
    newTodo: {},
    editing: false,
    editedTodo: {},

    async fetchTodos() {
      try {
        const res = await fetch("api/todos").then((r) => r.json());
        this.todos = res.todos;
      } catch (e) {
        console.log(e);
        return;
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
      this.newTodo = { ...todo };
    },
    // add or edit todo
    async postTodo(todo) {
        if(todo.text){
            if(todo.id){
                try {
                // let res = await axios.patch(`/api/todos/${id}`, {
                //   data: this.editedTodo,
                // });
                // this.getTodos();
                    const res = await fetch(`/api/todos/${todo.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(todo),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    }).then((r) => r.json());
                    // this.getTodos();
                    const info = res.todo;
                    this.todos = this.todos.map((todos) =>
                        todos.id === todo.id ? info : todos
                    );
                    this.newTodo = {}
                    this.editing=false;
                    return;
                } catch (e) {
                    console.log(e);
                    return;
                }
            }else{
                try {
                    // let res = await axios.post(`/api/todos`, {
                    //   data: this.newTodo,
                    // });
                    // this.todos.push(res.data.todo);
                    // this.todos = [...this.todos, res.data.todo]
                    const res = await fetch("/api/todos", {
                        method: "POST",
                        body: JSON.stringify(todo),
                        headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        },
                    }).then((r) => r.json());
                    // console.log(res.todo);
                    this.todos = [...this.todos, res.todo];
                    this.newTodo = {}
                    return;
                } catch (e) {
                    console.log(e);
                    return;
                }
            }
        }else{
            console.log("Field is empty");
            return;
        }
     },
  };
}
  