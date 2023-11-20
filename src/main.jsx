import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx' 
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(     [
  {  path: "/",  element: <App />, },
  {  path: "/login",  element: <Login />, },
  {  path: "/create-account",  element: <Signup />, },
] );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
         <RouterProvider router={router} />
    </ChakraProvider> 
  </React.StrictMode>,
)
