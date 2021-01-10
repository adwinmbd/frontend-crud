import React, { useState, useEffect } from 'react';
import AddForm from './AddForm'
import Table from './Table'
import EditForm from './EditForm'

export default function Home(){ 

    const [todos, setTodos] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editedTodo, setEditedTodo]= useState({});


    useEffect(() => {

        const getTodos = async () =>{
            try {
                const res = await fetch("/api/todos")
                .then((r) => r.json());
                setTodos(Object.values(res.todos))
                } catch (e) {
                    console.log(e);
                return;
            }
        };
        getTodos();
    },[])

    const addTodoItem = todo => {

        const sendTodo = async () => {
            try{
                const res = await fetch("/api/todos", {
                    method: "POST",
                    body: JSON.stringify(todo),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    },
                }).then((r) => r.json());

                setTodos([...todos, res.todo])
                setEditing(false)
                return;
            }catch(e){
                console.log(e);
                return;
            }
        };

        sendTodo();
        return;
    };

    const getEditTodo = data => {

        setEditedTodo(data)
        setEditing(true)
        return;
    }
    
    const updateTodo = (editedTodo) => {
       const emendTodo = async () => {
            try {
                await fetch(`/api/todos/${editedTodo.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(editedTodo),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }).then((r) => r.json());

                const editTodo = [...todos.map((todo)=>(todo.id === editedTodo.id?editedTodo:todo))];

                setTodos(editTodo)
                setEditing(false)
                return;
            } catch (e) {
                console.log(e);
                return;
            }
        };
        emendTodo();
    }

    const delTodo = id => {
        const delTodo = async () => {
            try {
                await fetch(`/api/todos/${id}`, {
                method: "DELETE",
                });

                setTodos([
                    ...todos.filter(todo => {
                        return todo.id !== id
                    }),
                ])
                setEditing(false)
                
                return;
            } catch (e) {
                console.log(e);
                return;
            }
       };
       delTodo();
    };


    return(
        <div className="row is-center">
            <div className="col-10 col-5-md">
                <div className="card">
                    <header>
                        <h4>Todos</h4>
                    </header>
                    {editing ? (
                        <EditForm editing={ editing } 
                            editedTodo={ editedTodo } 
                            updateTodoProps={ updateTodo } 
                        />
                    ) : (
                        <AddForm addTodoProps={ addTodoItem }/>
                    )}
                </div>
                <hr/>
                <div className="card">
                    {
                        todos.length<1?
                        <div className="loader"></div>
                        :
                        <Table todos={ todos } getEditTodoProps={ getEditTodo } deleteTodoProps={ delTodo }/>
                    }
                </div>
            </div>
        </div>
    )
}
