import About from "../Components/pages/About";
import Home from "../Components/pages/Home";
import Posts from "../Components/pages/Posts";
import PostIdPage from "../Components/pages/PostIdPage";
import {Navigate} from "react-router-dom";
import React from "react";
import Error from "../Components/pages/Error";
import Login from "../Components/pages/Login";

export const privateRoutes = [
  {path: '/about', element: <About/>},
  {path: '/home', element: <Home/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostIdPage/>},
  {path: '/', element: <Navigate to="/posts"/>},
  {path: '*', element: <Error/>},
]

export const publicRoutes = [
  {path: '/login', element: <Login />},
]