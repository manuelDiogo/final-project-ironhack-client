import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import FindDoctor from "./pages/FindDoctor"
import './App.css'

function App() {

  return (
    <Box>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Homepage />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/finddoctor" element ={<FindDoctor />} />

        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </Box>
  )
}

export default App