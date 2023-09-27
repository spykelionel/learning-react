import React, { useState, useEffect, memo } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "Take a bath1",
      isCompleted: false,
    },
    // {
    //   id: 1,
    //   text: "Take a bath2",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   text: "Take a bath3",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   text: "Cook",
    //   isCompleted: true,
    // },
    // {
    //   id: 4,
    //   text: "Go to the market",
    //   isCompleted: true,
    // },
  ]);

  const [todoText, setTodoText] = useState("")

  return (
    <div className="center">
      <div >
      <h1 className="title">Todo app</h1>
      <div>
        <input onChange={(event)=>{
          const value = event.target.value;
          setTodoText(value)
        }} type="text" value={todoText}/>
        <button onClick={()=>{
           setTodos([...todos, {
            id: Date.now(),
            text: todoText,
            isCompleted: false
          }])
          setTodoText("")
        }} type="button">Add todo</button>
      </div>
      <div>
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo, index) =>
            (
              !todo.isCompleted && 
              <div key={index}>
                <li className="todo_text">{index+1}. {todo.text}</li>
                <button onClick={() => {
                  let toBeMarkAsCompleted = todos.find(t=>t==todo)
                  toBeMarkAsCompleted.isCompleted = true
                  setTodos([...todos.filter(t=>t!=todo), toBeMarkAsCompleted])
                  console.log(todos)
                }} type="button">
                  mark is completed
                </button>
                <button onClick={()=>{
                  let newTodoList = todos.filter(singleTodo=>singleTodo!=todo)
                  setTodos(newTodoList)
                }} type="button">Delete</button>
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
                  <button onClick={() =>{
                    let toBeMarkAsCompleted = todos.find(t=>t==todo)
                    toBeMarkAsCompleted.isCompleted = false
          
                    setTodos([...todos.filter(t=>t!=todo), toBeMarkAsCompleted])
                    console.log(todos)
                  }} type="button">
                    mark is incomplete
                  </button>
                  <button type="button">Delete</button>
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
