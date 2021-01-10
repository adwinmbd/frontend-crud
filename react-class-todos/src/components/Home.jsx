import React, { Component } from 'react';
import AddForm from './AddForm'
import Table from './Table'
import EditForm from './EditForm'

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.getEditTodo = this.getEditTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.delTodo = this.delTodo.bind(this);
    
        this.state = {
            todos:[],
            editedTodo: {},
            editing : false
        }
    }

    /*
    state = {
        todos:[],
        editedTodo: {},
        editing : false
    };
    */

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

    // addTodoItem = todo => {
    addTodoItem (todo) {

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

    // getEditTodo = data => {
    getEditTodo (data) {

        const editTodo = {
            id: data.id,
            text: data.text,
        };
        this.setState({
            editing:true,
            editedTodo: editTodo
        // }, ()=>{console.log(this.state.editedTodo, this.state.editing)});
        });
        // console.log("Todo #", data.todo.id, "is clicked");
    }
    
    // updateTodo = (editedTodo) => {
    updateTodo(editedTodo){
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

    // delTodo = id => {
    delTodo(id){
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
            <div className="row is-center">
                <div className="col-10 col-5-md">
                    <div className="card">
                        <header>
                            <h4>Todos</h4>
                        </header>
                        {this.state.editing ? (
                            <EditForm editing={this.state.editing} 
                                editedTodo={this.state.editedTodo} 
                                updateTodoProps={this.updateTodo} 
                            />
                        ) : (
                            <AddForm addTodoProps={this.addTodoItem}/>
                        )}
                    </div>
                    <hr/>
                    <div className="card">
                        {
                            this.state.todos.length<1?
                            <div className="loader"></div>
                            :
                            <Table todos={this.state.todos} getEditTodoProps={this.getEditTodo} deleteTodoProps={this.delTodo}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
