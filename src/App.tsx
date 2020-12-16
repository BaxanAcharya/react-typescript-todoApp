import React, { useState } from 'react';
import AddTodoForm from './component/AddTodoFrom';
import TodoList from './component/TodoList';

const initialTodos: Array<Todo> = [
  {
    text: 'Walk the dog',
    complete: true
  },
  {
    text: 'Brush the teeth',
    complete: false
  },
  {

    text: 'Wash your face',
    complete: true
  },
  {
    text: 'Do light excercise',
    complete: true
  },
]
const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }
  return <div>
    <AddTodoForm addTodo={addTodo} />
    <TodoList todos={todos} toggleTodo={toggleTodo} />
  </div>
}
export default App
