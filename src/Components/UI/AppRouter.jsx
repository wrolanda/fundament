import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router/router";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(route =>
        <Route key={Date.now()} path={route.path} element={route.element}/>
      )}
      {publicRoutes.map(route =>
        <Route key={Date.now()} path={route.path} element={route.element}/>
      )}
    </Routes>
  );
};

export default AppRouter;