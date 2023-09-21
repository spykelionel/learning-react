import React, { useState } from "react";
import "./App.css";


/*
* Exercises
* 1. Write a Hello component that 
renders the text "Hello your_name"
 - Every componenet returns
 a component, which might plane
 HTML or JSX.

* 2. Instead of using a static name
value for the name prop, use a
controled value instead. 
Hint: Use a state.

*/ 

function Hello({name}){
  return <h1>Hello {name}</h1>
}

function App() {
  const [myName, setMyName] = useState("Jane")

  return (
   <Hello name={myName}>
   </Hello>
  );
}

export default App;
