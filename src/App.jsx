import { useState } from 'react'
import './App.css'

const App = () => {

  const [todoTerm, setTodoTerm] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title: todoTerm, completed: false}]
    })


    setTodoTerm("")
  }


  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }


  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    }
  )}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='item'>Add Todo List:</label>
        <input id='item' value={todoTerm} onChange={(e) => setTodoTerm(e.target.value)}/>
        <button>Add</button>
      </form>
      <h1>To-do List</h1>
      <ul>
        {todos.length === 0 && <h3>No Todos</h3>}
        {todos.map(todo => {
         return( <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>)
        })}
        
      </ul>
    </>
  )
         
}

export default App
