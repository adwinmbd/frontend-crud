import React, { Component } from "react"

export default class EditForm extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            id:'',
            text:''
        }
    }

    componentDidMount(){
        this.setState({ 
            id:this.props.editedTodo.id,
            text:this.props.editedTodo.text
        });
    }

    /*
    state = {
        id:this.props.editedTodo.id,
        text: this.props.editedTodo.text
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
        let editTodo ={id:this.state.id, text:this.state.text}
        this.props.updateTodoProps(editTodo);
        this.setState({
            id:"",
            text: ""
        });
        editTodo={}
    };

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
              <p className="grouped">
                <input 
                    type="text" 
                    placeholder="Add a todo ..." 
                    name="text" 
                    value={this.state.text} 
                    onChange={this.onChange} 
                />
                <button className="button icon-only">
                  <img height="18" width="18" src="./src/assets/create-outline.svg" />
                </button>
              </p>
            </form>
        )
    }
}