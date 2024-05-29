import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componenets/About/About.jsx';
import Home from './componenets/Home/Home.jsx';
import Contact from './componenets/Contact/Contact.jsx';
import Friends from './componenets/Friends/Friends.jsx';
import Friend from './componenets/Friend/Friend.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend',
        element:<Friend></Friend>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router = {router}
    >
    </RouterProvider>
  </React.StrictMode>,
)
