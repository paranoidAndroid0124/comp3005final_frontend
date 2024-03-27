import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// pages
import { LoginPage, RegisterPage } from './pages';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>, 
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router}/>
);