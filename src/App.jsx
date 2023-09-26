import React, { useState, useEffect, memo } from "react";
import styles from "./App.module.css";

/*
* Exercises
* 1. Write a Hello component that 
renders the text "Hello your_name"
 - Every componenet returns
 a component, which might be plane
 HTML or JSX.

* 2. Instead of using a static name
value for the name prop, use a
controled value instead. 
Hint: Use a state.

* 3. Create a button that handles
a click event. This button should 
console.log(myName).

- react,
DOM, virtual DOM, 
component,
props, 
states, 
events, 
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
  return (
    <header className={styles.header}>
      <p>Header</p>
      {children}
    </header>
  );
};

const Body = () => {
  const [nameObject, setNameObject] = useState({id:0, name: "John"});
  const [index, setIndex] = useState(0);
  const [names] = useState([
    {
      id: 0,
      name: "A",
    },
    {
      id: 1,
      name: "B",
    },
    {
      id: 2,
      name: "C",
    },
  ]);

  return (
    <section className={styles.section}>
      <p>Name: {nameObject.name}, ID: {nameObject.id}</p>
      <button
        onClick={() => {
          if (index <= names.length) {
            setIndex(index + 1);
            setNameObject(names[index]);
          }
        }}
      >
        Change name
      </button>
      
      <p>All students</p>
      <div>
        {names.map((n,index)=>(
          <div>{n.id} - {n.name}</div>
          ))}
      </div>
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
  return (
    <>
      <Header>
        <p>This is the header</p>
      </Header>
      <Body />
      <Footer />
    </>
  );
}

export default App;
