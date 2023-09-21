import { createContext, useContext, useRef, useState } from "react";
import "./App.css";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("John")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const logUserInfo = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <div>
        <Hello name={name}/>
        <p>User Info</p>
        <form action="" onSubmit={logUserInfo}>
          <input
            onChange={handleFirstName}
            value={firstName}
            type="text"
            placeholder="Input First name"
          />
          <br />
          <input
            onChange={handleLastName}
            value={lastName}
            type="text"
            placeholder="Input Last name"
          />
          <br />
          <input
            onChange={handleGender}
            value={gender}
            type="text"
            placeholder="Input Gender"
          />
          <br />
          <Button name={"Submit"} type={"submit"}/>
        </form>
      </div>
      <UserInfo firstName={firstName} lastName={lastName} gender={gender} />
    </div>
  );
}

export default App;

// Object Oriented Programming Overview.

function UserInfo({ firstName, lastName, gender }) {
  return (
    <div>
      <p>User Info: </p>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
}

function Button({name, type}){
  // const {name, type} = props
  // const name = props.name
  // const type = props.type;
  return <button type={
    type
  }>{name}</button>
}

