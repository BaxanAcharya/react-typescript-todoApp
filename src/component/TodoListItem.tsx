import React from 'react'


interface TodoListItemProps{
    todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> =({todo})=>{
return <li><label><input type="checkbox" checked={todo.complete} /></label>{todo.text}</li>
}

export default TodoListItem;
