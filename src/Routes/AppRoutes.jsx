import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import PaginaHome from '../Pages/PaginaHome'
import Dashboard from '../Pages/Dashboard'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from "./PrivateRouter";

const AppRoutes = () => {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);

  return (
    <BrowserRouter>
    <Routes>
      <Route
          path="/"
          element={
            <PublicRouter isAutentication={auth}>
                <PaginaHome/>
            </PublicRouter>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRouter isAutentication={auth}>
                 <Dashboard />
            </PrivateRouter>   
          }
        />
    <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes