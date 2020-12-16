import React from 'react'
import './TodoListitem.css'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    console.log(todo)
    return <> <li>
        <label className={todo.complete ? 'complete' : undefined}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} className="point" />
        </label>{todo.text}  <strong>{todo.complete ? "done" : 'do it now'}</strong>
    </li>
        <br /> <hr /></>
}

export default TodoListItem;
