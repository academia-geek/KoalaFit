import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
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