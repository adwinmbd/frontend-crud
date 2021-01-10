import React from 'react'
import TableRow from './TableRow'

export default function Table(props) {


    const { todos, getEditTodoProps, deleteTodoProps} = props;
    return (
            <table className="striped">
                <tbody>
                    {todos.map((todo, index) => (
                        <TableRow key={ index } todo={ todo } 
                        deleteTodoProps={ deleteTodoProps } 
                        getEditTodoProps={ getEditTodoProps }
                        />
                    ))}
                </tbody>
            </table>
    );

}