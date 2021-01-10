import React, { Component } from 'react'
import TableRow from './TableRow'

export default class Table extends Component {

    render(){
        const { todos, getEditTodoProps, deleteTodoProps} = this.props;
        return (
                <table className="striped">
                    <tbody>
                        {todos.map((todo, index) => (
                            <TableRow key={index} todo={todo} 
                            deleteTodoProps={deleteTodoProps} 
                            getEditTodoProps={getEditTodoProps}
                            />
                        ))}
                    </tbody>
                </table>
        );

    }
}