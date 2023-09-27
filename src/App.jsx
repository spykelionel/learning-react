import React, { useState } from "react";
import "./App.css";


let todo = {
  id: Date.now(),
  text: "Take a bath1",
  isCompleted: false,
}

function App() {
  const [todos, setTodos] = useState([todo]);

  const [todoText, setTodoText] = useState("")

  function addTodo(){
      setTodos([...todos, {
       id: Date.now(),
       text: todoText,
       isCompleted: false
     }])
     setTodoText("")
  }

  function handleInputChange(event){
      const value = event.target.value;
      setTodoText(value)
  }

  function markTodoAsCompleted(todo){
      let toBeMarkAsCompleted = todos.find(t=>t==todo)
      toBeMarkAsCompleted.isCompleted = true
      setTodos([...todos.filter(t=>t!=todo), toBeMarkAsCompleted])
  }

  function deleteTodo(todo){
      let newTodoList = todos.filter(singleTodo=>singleTodo!=todo)
      setTodos(newTodoList)
  }

  function markAsInComplete(todo){
      let toBeMarkAsInComplete = todos.find(t=>t==todo)
      toBeMarkAsInComplete.isCompleted = false
      setTodos([...todos.filter(t=>t!=todo), toBeMarkAsInComplete])
  }

  return (
    <div className="center">
      <div >
      <h1 className="title">Todo app</h1>
      <div>
        <input onChange={handleInputChange} type="text" value={todoText}/>
        <button onClick={addTodo} type="button">Add Todo</button>
      </div>
      <div>
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo, index) =>
            (
              !todo.isCompleted && 
              <div key={index}>
                <li className="todo_text">{index+1}. {todo.text}</li>
                <button onClick={()=>markTodoAsCompleted(todo)} type="button">
                  mark is completed
                </button>
                <button onClick={()=>deleteTodo(todo)} type="button">Delete</button>
              </div>
            )
          )}
        </ul>
      </div>
      <div>
        <h2>List of Completed Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <div key={index}>
              {todo.isCompleted ? (
                <div>
                  <li className="todo_text">{todo.text}</li>
                  <button onClick={()=>markAsInComplete(todo)} type="button">
                    mark is incomplete
                  </button>
                  <button onClick={()=>deleteTodo(todo)} type="button">Delete</button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
