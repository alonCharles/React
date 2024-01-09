import {useEffect, useState} from 'react'
import './App.css';

function App() {
const [todos, setTodos] = useState([]);
const [todoEdit, setTodoEdit] = useState(null);

// save task to local storage
useEffect(() => {
  const json = localStorage.getItem("todos");
  const loadedTodos = JSON.parse(json);
  if (loadedTodos) {
    setTodos(loadedTodos)
  }
}, []);

useEffect(() => {
  if(todos.length > 0) {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json)
  }
}, [todos])

// handle submit
function handleSubmit(e) {
  e.preventDefault()

  let todo = document.getElementById('todoAdd').value
  const newTodo = {
    id: new Date().getTime(),
    text: todo.trim(),
    completed: false
  };
  if (newTodo.text.length > 0) {
    setTodos([...todos].concat(newTodo));
  } else {
    alert("Enter Valid Task")
  }
  document.getElementById('todoAdd').value = ""
  console.log('handle running')
}
// handle delete
function deleteToDo(id) {
  let updatedTodos = [...todos].filter((todo) => todo.id !== id)
  setTodos(updatedTodos)
}

// toggle todo complete
function toggleComplete(id) {
  let updatedTodos = [...todos].map((todo) => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
}

//handle edits
function submitEdits(newtodo) {
  const updatedTodos = [...todos].map((todo) => {
    if (todo.id === newtodo.id) {
      todo.text = document.getElementById(newtodo.id).value
    } return todo
  });
  setTodos(updatedTodos);
  setTodoEdit(null)
}

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" align="right" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => 
        <div className='todo' key={todo.id}>
          <div className='todo-text'>
            <input 
              type='checkbox' 
              id='completed' 
              checked={todo.completed} 
              onChange={() => toggleComplete(todo.id)}
            />
            {/* check if task is in edit mode */}
            {todo.id === todoEdit ?
              (<input
                type='text'
                id={todo.id}
                defaultValue={todo.text}
                />) :
                (<div>{todo.text}</div>)
            }
          </div>
          <div className='todo-actions'>
            {/* buttons to display depending on mode */}
            {todo.id === todoEdit ?
            (
              <button onClick={() => submitEdits(todo)}>Submit Edits</button>
            ) :
            (
              <button onClick={() => setTodoEdit(todo.id)}>Edit</button>
            )
          }
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  
  );
}

export default App;
