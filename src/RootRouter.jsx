import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page not Found</h1>
  },
  {
    path: "users", // /about
    element: (
      <div style={{ textAlign: "center" }}>
        <h1>Users</h1> {/*This h1 tag will always render */}
        <Outlet></Outlet> {/*Render any child here*/}
      </div>
    ),
    children: [
      {
        path: ":username",
        element: <User />,
        errorElement: <PageNotFound />
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

function fetchUser(username) {
  const users = [
    {
      name: "john",
      age: 123,
      gender: "M",
    },
    {
      name: "mary",
      age: 23,
      gender: "F",
    },
  ];

  const user = users.find((u) => u.name.toLocaleLowerCase() === username.toLocaleLowerCase());
  return user;
}

function PageNotFound(){
    const { username } = useParams();
    return (
        <div>
            {username} not found
        </div>
    )
}

function User() {
  const { username } = useParams();
  const userInfo = fetchUser(username);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Information about {userInfo.name}</h1>
      <p>Age: {userInfo.age}</p>
      <p>Gender: {userInfo.gender}</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact</h1>
    </div>
  );
}

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
