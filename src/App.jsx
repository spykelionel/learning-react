import React from "react";
import "./App.css";


/*
* Exercises
* 1. Write a Hello component that 
renders the text "Hello your_name"
 - Every componenet returns
 a component, which might plane
 HTML or JSX.

* 2.  

*/ 

function Hello({name}){
  return <h1>Hello {name}</h1>
}

function App() {

  return (
   <Hello name="John">
   </Hello>
  );
}

export default App;
