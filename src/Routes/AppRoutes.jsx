import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Ejemplo from '../Components/Ejemplo'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={
            <Ejemplo/>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes