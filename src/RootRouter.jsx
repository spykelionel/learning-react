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
    // in browser
    // localhost:5157/notdefined
  },
  {
    path: "users", 
    element: <Users />,
    children: [
      {
        path: ":username",
        element: <User />,
        errorElement: <PageNotFound />,
      },
      {
        path: "second",
        handle: <p>Second</p>,
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

const singleUser = {
    "id": 28,
    "firstName": "Kody",
    "lastName": "Terry",
    "maidenName": "Larkin",
    "age": 28,
    "gender": "male",
    "email": "xisherwoodr@ask.com",
    "phone": "+81 859 545 8951",
    "username": "xisherwoodr",
    "password": "HLDqN5vCF",
    "birthDate": "1979-01-09",
    "image": "https://robohash.org/consequunturabnon.png",
    "bloodGroup": "B−",
    "height": 172,
    "weight": 90.2,
    "eyeColor": "Blue",
    "hair": {
        "color": "Brown",
        "type": "Wavy"
    },
    "domain": "elpais.com",
    "ip": "51.102.180.216",
    "address": {
        "address": "210 Green Road",
        "city": "Manchester",
        "coordinates": {
            "lat": 41.7909099,
            "lng": -72.51195129999999
        },
        "postalCode": "06042",
        "state": "CT"
    },
    "macAddress": "B4:B6:17:3C:41:E5",
    "university": "Science University of Tokyo",
    "bank": {
        "cardExpire": "05/23",
        "cardNumber": "201443655632569",
        "cardType": "diners-club-enroute",
        "currency": "Yen",
        "iban": "GT70 4NNE RDSR 0AJV 6AQI 4XH1 RWOC"
    },
    "company": {
        "address": {
            "address": "109 Summit Street",
            "city": "Burlington",
            "coordinates": {
                "lat": 44.4729749,
                "lng": -73.2026566
            },
            "postalCode": "05401",
            "state": "VT"
        },
        "department": "Support",
        "name": "Leffler, Beatty and Kilback",
        "title": "Recruiting Manager"
    },
    "ein": "09-1129306",
    "ssn": "389-74-9456",
    "userAgent": "Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4"
}

function User() {
  const { username } = useParams();
  const userInfo = useUser(username)
console.log(userInfo)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Information about {userInfo.firstName}</h1>
      <p>Age: {userInfo.age}</p>
      <p>Gender: {userInfo.gender}</p>
      <img src={userInfo.image} alt={userInfo.username} width="70px"/>
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
  const [error, setError] = useState(null)

  useEffect(() => {
    function fetchUsers() {
      fetch("https://dummyjson.com/users")
        .then((result1) => result1.json())
        .then((result2) => {
          setUsers(result2);
        })
        .catch((err)=>{
            // runs on error
            console.log(err)
            setError(err)
        })
        .finally(()=>{
            // always runs
        })
    }

    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users</h1> {/*This h1 tag will always render */}
      {/* <p>All users</p> */}
      {error && <p>{JSON.stringify(error)}</p>}
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
