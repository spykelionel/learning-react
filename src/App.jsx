import React, { useState, useEffect, memo } from "react";
import styles from "./App.module.css";

/*
* Exercises
* 1. Write a Hello component that 
renders the text "Hello your_name"
 - Every React componenet returns
 a component, which might be plane
 HTML or JSX.

* 2. Instead of using a static name
value for the name prop, use a
controled value instead. 
Hint: Use a state.

* 3. Create a button that handles
a click event. This button should 
console.log(myName).

1.
<button onClick={()=>{
console.log(myName)
}}>Print my name</button>

2.
<button onClick={function(){
console.log(myName)
}}>Print my name</button>

- react,
DOM, virtual DOM, 
component,
props, 
states, 
events,
handling inputs,
Effects,
List rendering,
conditional rendering,
 - useMemo, useCallback
 - memo
*/

// function Hello({ name }) {
//   return <h1>Hello {name}</h1>;
// }

const Header = ({ children }) => {
  // const children = props.children
  // const {children} = props
  let childrenCopy = children
  // console.log(Object.is(children, childrenCopy))
  return (
    <header onClick={()=>{
      console.log("YOu clicked the header")
    }} className={styles.header}>
      <p>Header</p>
      {children}
    </header>
  );
};

const Body = () => {
  const [name, setName] = useState("Name");
  const [person, setPerson] = useState({
    age: 29,
    name: "",
    color: "",
    height: "",
    gender: "",
  });

  // useEffect(()=>{
  //   console.log(name)

  // })
  // // useEffect(()=>{
  // //   console.log(name)
  // // }, [name])
  // // useEffect(()=>{}, [])
  return (
    <section className={styles.section}>
      <h1>Events </h1>
      <input
        onChange={(event) => {
        //  const value = event.target.value
        const {value} = event.target
          setName(event.target.value);
        }}
        type="text"
        value={name}
      />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
};

function App() {
  const [myName, setMyName] = useState("Initial name");
  return (
    <>
      <Header>
        <>This is the header</>
      </Header>
      <Body />
      <Footer />
    </>
  );
}

export default App;
