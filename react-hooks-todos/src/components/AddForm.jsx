import React, { useState } from "react"

export default function AddForm(props){ 


    const [inputText, setInputText] = useState({
        text: "",
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        let newTodo ={text:inputText.text}
        props.addTodoProps(newTodo);

        setInputText({
            text: "",
        })

        newTodo = {}
    };

    return (
        <form onSubmit={ handleSubmit }>
            <p className="grouped">
            <input 
                type="text" 
                placeholder="Add a todo ..." 
                name="text" 
                value={ inputText.text } 
                onChange={ onChange } 
            />
            <button className="button primary icon-only">
                <img height="18" width="18" src="./src/assets/add-circle-outline.svg" />
            </button>
            </p>
        </form>
    )
}