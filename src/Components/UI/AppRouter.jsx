import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../hooks/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/posts"/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
};

export default AppRouter;