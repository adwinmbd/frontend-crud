import React, { Component } from 'react'

export default class TodoItem extends Component {


  render() { 
    const todo = this.props
    const { id,text } = this.props.todo
    return (
        <li className="list-item">
            <div className="is-flex" style={{ alignItems: 'center' }}>
                <span className="is-pulled-left">{text}</span>
                <div style={{flex: '1'}}></div>
                <button className="button is-text is-pulled-right is-small is-warning"
                    onClick={() => this.props.getEditTodoProps(todo)}>
                    <span className="icon">
                        <img className="mr-1" height="32" width="32" src="./src/assets/create-outline.svg" />
                    </span>
                </button>
                &nbsp;
                <button className="button is-text is-pulled-right is-small is-danger"
                    onClick={() => this.props.deleteTodoProps(id)}>
                    <span className="icon">
                        <img className="mr-1" height="32" width="32" src="./src/assets/trash-outline.svg" />
                    </span>
                </button>
            </div>
        </li>
    )
  }
}