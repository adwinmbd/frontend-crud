import React, { Component } from "react"

export default class EditForm extends Component {

    state = {
        // editTodo: this.props.editedTodo /** Not working */
        id:this.props.editedTodo.id,
        text: this.props.editedTodo.text
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let editTodo ={id:this.state.id, text:this.state.text}
        this.props.updateTodoProps(editTodo);
        this.setState({
            id:"",
            text: ""
        });
        editTodo={}
    };

    render() {
        const daTodo = this.props.editedTodo;
        
        return (
            // value={this.state.editTodo.title} /** not working */ 
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <input
                            className="input"
                            placeholder="Add a todo..." 
                            name="text"
                            value={this.state.text} 
                            onChange={this.onChange} 
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
}