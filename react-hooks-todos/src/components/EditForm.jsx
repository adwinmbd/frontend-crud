import React, { useState } from "react"

export default function EditForm(props){ 


    const [inputText, setInputText] = useState({
        text: props.editedTodo.text,
    })

    const [inputId, setInputId] = useState({
        id: props.editedTodo.id,
    })

    const onChange = e => {

       setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
      })
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        let editTodo ={id:inputId.id, text:inputText.text}
        props.updateTodoProps(editTodo);
        
        setInputText({
            text: "",
        })
        setInputId({
              id: "",
        })
        editTodo={}
    };

    return (
        <form onSubmit={ handleSubmit }>
            <p className="grouped">
            <input 
                type="text" 
                placeholder="Update todo ..." 
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