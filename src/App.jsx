import { useState } from "react";
import "./App.css";

function App() {
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

  const logUserInfo = e => {
    e.preventDefault()
    console.log(userInfo)
  }

  return (
    <div>
      <div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>User Info: </p>
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

// Object Oriented Programming Overview.
