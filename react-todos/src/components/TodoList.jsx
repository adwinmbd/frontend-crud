import React, { Component } from 'react'
import TodoItem from "./TodoItem"

export default class TodoList extends Component {

  render() {
    const { deleteTodoProps, getEditTodoProps } = this.props

    return (
       <>
            {this.props.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} 
                    deleteTodoProps={deleteTodoProps} 
                    getEditTodoProps={getEditTodoProps}
                />
            ))}
       </>
    )
  }
}

// {this.props.todos.map((todo, index) => (
