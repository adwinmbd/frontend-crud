import React from 'react'

export default function TableRow (props) {

    const { id,text } = props.todo
    const { deleteTodoProps, getEditTodoProps, todo } = props
    return(
            <tr>
                <td>{text}</td>
                <td className="pull-right">
                    <button className="button icon-only" onClick={()=>getEditTodoProps(todo)}>
                        <img height="18" width="18" src="./src/assets/create-outline.svg" />
                    </button>
                    <button className="button error icon-only" onClick={()=>deleteTodoProps(id)}>
                        <img height="18" width="18" src="./src/assets/trash-outline.svg" />
                    </button>
                </td>
            </tr>
    )
}