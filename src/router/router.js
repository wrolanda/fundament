import About from "../pages/About";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {Navigate} from "react-router-dom";
import React from "react";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/', element: <Navigate to='/posts'/>},
  {path: '/about', element: <About/>},
  {path: '/home', element: <Home/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostIdPage/>},
  {path: '/login', element: <Navigate to='/posts'/>},
  {path: '*', element: <Error/>},
]

export const publicRoutes = [
  {path: '/', element: <Navigate to='/login'/>},
  {path: '/login', element: <Login />},
  {path: '/about', element: <Navigate to='/login'/>},
  {path: '/home', element: <Navigate to='/login'/>},
  {path: '/posts', element: <Navigate to='/login'/>},
  {path: '*', element: <Error/>},
]