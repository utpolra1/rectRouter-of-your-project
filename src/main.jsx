import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Home from './Home.jsx';
import Contract from '../Contract.jsx';
import Aboute from './Aboute.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import User from './User/User.jsx';
import UserDatils from './UserDatils.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path: "/contacts",
        element:<Contract></Contract>
      },
      {
        path:"/about",
        element:<Aboute></Aboute>
      },
      {
        path:"/footer",
        element:<Footer></Footer>
      },
      {
        path:"/user",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element:<User></User>
      },
      {
        path:"/post/:post",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.post}`)
        ,element:<UserDatils></UserDatils>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
