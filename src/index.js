import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


//Rotas
import Home from './pages/home/home';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import User from './pages/user/user';
import ErrorPage from './pages/errorPage/errorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "user",
        element: <User/>
      },
      {
        path: "skirt",
        element: <skirt/>
      },
      {
        path: "explore",
        element: <explore/>
      }

    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
