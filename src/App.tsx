import React, { useState } from 'react';
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
  return <div>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
  </div>
}
export default App
