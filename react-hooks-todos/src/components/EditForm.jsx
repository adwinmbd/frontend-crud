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
            <div className="field has-addons has-addons-centered">
                <div className="control">
                    <input
                        className="input"
                        placeholder="Update Todo details..." 
                        name="text"
                        value={ inputText.text } 
                        onChange={ onChange } 
                        type="text"
                    />
                </div>
                <div className="control">
                    <button className="button is-warning">
                        <span className="icon is-small">
                            <img className="mr-1" height="32" width="32" src="./src/assets/create-outline.svg" />
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}