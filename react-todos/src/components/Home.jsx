import React, { Component } from 'react';
import AddForm from './AddForm'
import TodoList from './TodoList'
import EditForm from './EditForm'

export default class Home extends Component{

    state = {
        todos:[],
        editedTodo: {},
        editing : false
    };

    async componentDidMount(){
        try {
            const res = await fetch("/api/todos")
            .then((r) => r.json());
            this.setState({todos: res.todos})
          } catch (e) {
            console.log(e);
            return;
        }
    }

    addTodoItem = todo => {

        const sendTodo = async () => {
            try{
                const res = await fetch("/api/todos", {
                    method: "POST",
                    body: JSON.stringify(todo),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    },
                }).then((r) => r.json());
                this.setState({
                    todos: [...this.state.todos, res.todo],
                    editing:false
                })

                return;
            }catch(e){
                console.log(e);
                return;
            }
        };

        sendTodo();
        return;
    };

    getEditTodo = data => {

        const editTodo = {
            id: data.todo.id,
            text: data.todo.text,
            completed: data.todo.completed
        };
        this.setState({
            editing:true,
            editedTodo: editTodo
        // }, ()=>{console.log(this.state.editedTodo, this.state.editing)});
        });

        console.log("Todo #", data.todo.id, "is clicked");
    }
    
    updateTodo = (editedTodo) => {
       const emendTodo = async () => {
            try {
                await fetch(`/api/todos/${editedTodo.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(editedTodo),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }).then((r) => r.json());

                const editTodo = [...this.state.todos.map((todo)=>(todo.id === editedTodo.id?editedTodo:todo))];
                this.setState({
                    todos:editTodo,
                    editing:false
                });
                return;
            } catch (e) {
                console.log(e);
                return;
            }
        };
        emendTodo();
    }

    delTodo = id => {
        const delTodo = async () => {
            try {
                await fetch(`/api/todos/${id}`, {
                method: "DELETE",
                });
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ],
                    editing:false
                });
            } catch (e) {
                console.log(e);
            }
       };
       delTodo();
    };

    render(){
        return(
            <div className="columns is-centered">
                <div className="column is-5-tablet is-10-mobile">
                    <div className="card">
                        <header className="header">
                            <p className="card-header-text heading">
                                Todos
                            </p>
                        </header>
                        <div className="card-content">
                        {this.state.editing ? (
                            <EditForm editing={this.state.editing} 
                                editedTodo={this.state.editedTodo} 
                                updateTodoProps={this.updateTodo}
                            />
                        ) : (
                            <AddForm addTodoProps={this.addTodoItem}/>
                        )}
                        <hr />
                            <ul>
                                <TodoList todos={this.state.todos} 
                                    getEditTodoProps={this.getEditTodo} 
                                    deleteTodoProps={this.delTodo}
                                />
                                {
                                    this.state.todos.length<1?
                                    <li>Nothing here !</li>
                                    :<></>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}