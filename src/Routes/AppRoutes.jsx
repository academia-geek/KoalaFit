import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import PaginaHome from '../Pages/PaginaHome'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={
            <Dashboard/>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes