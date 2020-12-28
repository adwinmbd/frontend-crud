import React, { Component } from 'react'

export default class TableRow extends Component {
    render(){
        const { id,text } = this.props.todo
        const { deleteTodoProps, getEditTodoProps, todo } = this.props
        return(
                <tr>
                    <td>{text}</td>
                    <td className="has-text-right">
                        <button className="button is-text is-small is-warning" 
                        onClick={()=>getEditTodoProps(todo)}>
                            <span className="icon">
                                <img height="32" width="32" src="./src//assets/create-outline.svg" />
                            </span>
                        </button>
                        <button className="button is-text is-small is-danger" 
                        onClick={()=>deleteTodoProps(id)}>
                            <span className="icon">
                                <img height="32" width="32" src="./src/assets/trash-outline.svg" />
                            </span>
                        </button>
                    </td>
                </tr>
        )
    }
}