import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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