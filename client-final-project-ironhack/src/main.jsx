import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from "./context/auth.context";

// const colors = {
//   site :{
//     900: white
//   }
// }

// const theme = extendTheme({colors, fonts});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ChakraProvider>

          <App />

        </ChakraProvider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
)
