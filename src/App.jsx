import React, { useEffect, useState } from "react";
import "./App.css";

// Read on react-router
// https://react-router.com
// Managing complex states

let todo = {
  id: Date.now(),
  text: "Take a bath1",
  isCompleted: false,
};

// function useCustomState(initialValue){
//   let value = initialValue

//   function setValue(updatedValue){
//     value = updatedValue
//     return value
//   }
//   return [value, setValue]
// }

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

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoText,
        isCompleted: false,
      },
    ]);
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
    let toBeMarkAsCompleted = todos.find((t) => t == todo);
    toBeMarkAsCompleted.isCompleted = true;
    setTodos([...todos.filter((t) => t != todo), toBeMarkAsCompleted]);
  }

  function deleteTodo(todo) {
    let newTodoList = todos.filter((singleTodo) => singleTodo != todo);
    setTodos(newTodoList);
  }

  function markAsIncomplete(todo) {
    let toBeMarkAsIncomplete = todos.find((t) => t == todo);
    toBeMarkAsIncomplete.isCompleted = false;
    setTodos([...todos.filter((t) => t != todo), toBeMarkAsIncomplete]);
  }

  return (
    <div className="center">
      <div className="app">
        <h1 className="title">Todo app</h1>
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
                !todo.isCompleted && (
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
                {todo.isCompleted ? (
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
