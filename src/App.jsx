import React, { useState, useEffect } from "react";
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

* 3. Create a button that handles
a click event. This button should 
console.log(myName).

*/ 

function Hello({name}){
  return <h1>Hello {name}</h1>
}

function App() {
  const [myName] = useState("Jane")
  const [conditionalClass, setConditionalClass] = useState(false)

useEffect(function(){
  if(myName){
    setConditionalClass(true)
  } else {
    setConditionalClass(false)
  }
}, [myName])

  // function function_to_handle_click;
  return (
   <div className={`${(conditionalClass && 'present') || (!conditionalClass && "absent")}`}>
    <Hello name={myName} />
    <button 
      >
        Click Me!
    </button>
   </div>
  );
}


export default App;
