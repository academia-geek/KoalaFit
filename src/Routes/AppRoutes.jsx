import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import PaginaHome from '../Pages/PaginaHome'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from "./PrivateRouter";
import { db } from '../Firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const AppRoutes = () => {

  const [auth, setAuth] = useState(false);
  const [dataUser, setDataUser] = useState()

  const registerUser = async(id,data) =>{
    await setDoc(doc(db, "users", id), data);
  }


  useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        
        setAuth(true);
        localStorage.setItem("idUserLogin", user.uid)
        setDataUser(user)
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
                 <Dashboard  dataUser={dataUser}/>
            </PrivateRouter>   
          }
        />
    
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes