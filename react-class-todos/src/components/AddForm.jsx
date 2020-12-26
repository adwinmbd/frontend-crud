import React, { Component } from "react"

export default class AddForm extends Component {

    state = {
        text: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let newTodo ={text:this.state.text}
        this.props.addTodoProps(newTodo);
        this.setState({
            text: ""
        });
        newTodo = {}
    };

    render() {
        const {text}=this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <input
                            className="input"
                            placeholder="Add a todo..." 
                            name="text"
                            value={text} 
                            onChange={this.onChange} 
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
}