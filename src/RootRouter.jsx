import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useParams,
  useOutletContext,
} from "react-router-dom";
import App from "./App";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page not Found</h1>,
  },
  {
    path: "users", // /about
    element: <Users />,
    children: [
      {
        path: ":username",
        element: <User />,
        errorElement: <PageNotFound />,
      },
      {
        path: "second",
        handle: <>Fir</>,
        element: <div style={{ textAlign: "center" }}>Second User</div>,
      },
    ],
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

function PageNotFound() {
  const { username } = useParams();
  return <div>{username} not found</div>;
}

function User() {
  const { username } = useParams();
  const userInfo = useUser(username)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Information about {userInfo.firstName}</h1>
      <p>Age: {userInfo.age}</p>
      <p>Gender: {userInfo.gender}</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

function useUser(username){
    const users = useOutletContext();
    const [user, setUser] = useState({})

    useEffect(()=>{
        const userInfo = users.find(
            (u) => u.firstName.toLowerCase() === username.toLowerCase()
          );
          setUser(userInfo)
    }, [username])
   
        return user
}

function Contact() {
  const todos = useSelector((state) => state.todos);
  return (
    <div style={{ textAlign: "center" }}>
      {todos.map((todo) => (
        <p key={todo.text}>{todo.text}</p>
      ))}
      <h1>Contact</h1>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {
    function fetchUsers() {
      fetch("https://dummyjson.com/users")
        .then((users) => users.json())
        .then((users) => {
          setUsers(users);
        });
    }

    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users</h1> {/*This h1 tag will always render */}
      {/* <p>All users</p> */}
      {users.users.map((user, index) => (
        <p key={user.id}>
          <Link to={`${user.firstName}`}>
            {user.id}. {user.firstName}
          </Link>
        </p>
      ))}
      <Outlet context={users.users}></Outlet> {/*Render any child here*/}
    </div>
  );
}

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
