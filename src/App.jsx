import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// Read on react-router
// https://react-router.com
// Managing complex states

let todo = {
  id: Date.now(),
  text: "Take a bath1",
  isComplete: false,
};

// function useCustomState(initialValue){
//   let value = initialValue

//   function setValue(updatedValue){
//     value = updatedValue
//     return value
//   }
//   return [value, setValue]
// }

const BASE_URL = "http://localhost:8000/todos";

function App() {
  const [todos, setTodos] = useState([todo]);
  const [todoText, setTodoText] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (todoText.length <= 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [todoText]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((result1) => result1.json())
      .then((jsonResult1) => {
        console.log(jsonResult1);
        setTodos(jsonResult1.todos);

        // {todos: []}
      });
  }, []);

  function addTodo() {
    const body = JSON.stringify({ text: todoText });
    fetch(`${BASE_URL}/create`, {
      body: body,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result1) => result1.json())
      .then((jsonResult1) => {
        setTodos([...todos, jsonResult1.todo]);
      });

    setTodoText("");
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setTodoText(value);
    if (event.key == "Enter") {
      addTodo();
    }
  }

  function markAsCompleted(todo) {
    const body = JSON.stringify({ isComplete: true });
    fetch(`${BASE_URL}/update/${todo._id}`, {
      body: body,
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result1) => result1.json())
      .then((jsonResult1) => {
        let toBeMarkAsCompleted = todos.find((t) => t == todo);
        toBeMarkAsCompleted.isComplete = true;
        setTodos([...todos.filter((t) => t != todo), toBeMarkAsCompleted]);
      });
  }

  function deleteTodo(todo) {
    fetch(`${BASE_URL}/delete/${todo._id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resul1) => resul1.json())
      .then((jsonResult1) => {
        let newTodoList = todos.filter((singleTodo) => singleTodo != todo);
        setTodos(newTodoList);
      });
  }

  function markAsIncomplete(todo) {
    const body = JSON.stringify({ isComplete: false });
    fetch(`${BASE_URL}/update/${todo._id}`, {
      body: body,
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result1) => result1.json())
      .then((jsonResult1) => {
        let toBeMarkAsIncomplete = todos.find((t) => t == todo);
        toBeMarkAsIncomplete.isComplete = false;
        setTodos([...todos.filter((t) => t != todo), toBeMarkAsIncomplete]);
        // refresh page.
      });
  }

  return (
    <div className="center">
      <div className="app">
        <h1 className="title">Todo app</h1>
        <Link to="/users/john">Visit John</Link>
        <div>
          <input
            onKeyUp={handleInputChange}
            placeholder="Add to list..."
            onChange={handleInputChange}
            type="text"
            value={todoText}
          />
          <button type="button" disabled={disableButton} onClick={addTodo}>
            Add Todo
          </button>
          {todoText.length <= 0 && (
            <p style={{ color: "orange", margin: 0, padding: 0 }}>Input text</p>
          )}
        </div>
        <div className="todo-area">
          <p className="heading">List of Todos</p>
          {todos.length <= 0 && (
            <p style={{ color: "orange", margin: 0, padding: 0 }}>
              Nothing to do
            </p>
          )}
          <ul>
            {todos.map(
              (todo, index) =>
                !todo.isComplete && (
                  <div key={index} className="single-todo">
                    <li className="todo-text">
                      {index + 1}. {todo.text}
                      <span
                        onClick={() => markAsCompleted(todo)}
                        className="sub-button"
                      >
                        &#x2705;
                      </span>
                      <span
                        onClick={() => deleteTodo(todo)}
                        className="sub-button"
                      >
                        &#x274c;
                      </span>
                    </li>
                  </div>
                )
            )}
          </ul>
        </div>
        <div className="todo-area">
          <p className="heading">List of Completed Todos</p>
          <ul>
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                {todo.isComplete ? (
                  <div>
                    <li className="todo-text">{todo.text}</li>
                    <button
                      onClick={() => markAsIncomplete(todo)}
                      type="button"
                    >
                      mark as incomplete
                    </button>
                    <button onClick={() => deleteTodo(todo)} type="button">
                      Delete
                    </button>
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
