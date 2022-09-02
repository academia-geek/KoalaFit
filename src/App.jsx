import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './Routes/AppRoutes'
import React from "react";

function App() {

  return (
    <div>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </div>
  )
}

export default App
