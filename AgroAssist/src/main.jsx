import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import Home from './Component/Home.jsx'
import './index.css'
import { Router } from 'react-router-dom'
import Market from './Component/Market.jsx'
import Login from './Component/Login.jsx'
import Career from './Component/Career.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     Component:[
//       {
//     path: "/home",
//     element: <Home/>,
//     },
//       {
//     path: "/contact",
//     element: <Contact/>,
//     },
//   {
//     path: "/about",
//     element: <About/>,
//   }]
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/blogs",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
