import React, { Component } from "react"

export default class AddForm extends Component {


    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            text:''
        }
    }

    /*
    state = {
        text: ""
    };
    */

    // onChange = e => {
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // handleSubmit = e => {
    handleSubmit(e){
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
              <p className="grouped">
                <input 
                    type="text" 
                    placeholder="Add a todo ..." 
                    name="text" 
                    value={text} 
                    onChange={this.onChange} 
                />
                <button className="button primary icon-only">
                  <img height="18" width="18" src="./src/assets/add-circle-outline.svg" />
                </button>
              </p>
            </form>
        )
    }
}