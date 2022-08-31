import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Ejemplo from '../Components/Ejemplo'
import PaginaHome from '../Pages/PaginaHome'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={
            <PaginaHome/>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes