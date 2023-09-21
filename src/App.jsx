import { createContext, useContext, useRef, useState } from "react";
import "./App.css";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("John");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const handleUserInfoChange = (event) =>
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const logUserInfo = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <div>
        <Hello name={name} />
        <p>User Info</p>
        <form action="" onSubmit={logUserInfo}>
          <input
            onChange={handleUserInfoChange}
            value={userInfo.firstName}
            type="text"
            name="firstName"
            placeholder="Input First name"
          />
          <br />
          <input
            onChange={handleUserInfoChange}
            value={userInfo.lastName}
            type="text"
            name="lastName"
            placeholder="Input Last name"
          />
          <br />
          <input
            onChange={handleUserInfoChange}
            value={userInfo.gender}
            type="text"
            name="gender"
            placeholder="Input Gender"
          />
          <br />
          <Button name={"Submit"} type={"submit"} />
        </form>
      </div>
      <UserInfo
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        gender={userInfo.gender}
      />
    </div>
  );
}

export default App;

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

function Button({ name, type }) {
  // const {name, type} = props
  // const name = props.name
  // const type = props.type;
  return <button type={type}>{name}</button>;
}
