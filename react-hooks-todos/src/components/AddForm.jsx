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
            <div className="field has-addons has-addons-centered">
                <div className="control">
                    <input
                        className="input"
                        placeholder="Todo details ..." 
                        name="text"
                        value={ inputText.text } 
                        onChange={ onChange } 
                        type="text"
                    />
                </div>
                <div className="control">
                    <button className="button is-primary">
                        <span className="icon is-small">
                            <img className="mr-1" height="32" width="32" src="./src/assets/add-circle-outline.svg" />
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}