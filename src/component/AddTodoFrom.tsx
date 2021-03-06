import React, { ChangeEvent, FormEvent, useState } from 'react'
interface AddTodoFormProps {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }
    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" disabled={newTodo.length === 0} onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}
export default AddTodoForm