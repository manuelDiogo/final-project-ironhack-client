import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindDoctor from "./pages/FindDoctor";
import User from "./pages/User";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import MakeAppointment from "./pages/MakeAppointment"
import './App.css';

function App() {

  return (
    <Box 
    >
      <Navbar />
     
      <Routes>

        <Route path="/" element={  <Homepage />  } />

        <Route path="/about" element={ <About /> } />

        <Route path="/login" element={ <IsAnon> <Login /> </IsAnon> } />

        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />

        <Route path="/finddoctor" element={<IsPrivate> <FindDoctor /> </IsPrivate> } />

        <Route path="/makeappoint/:appointmentsId" element={ <IsPrivate> <MakeAppointment /> </IsPrivate>} />

        {/* <Route path="/user/:userId" element={<IsPrivate> <User /> </IsPrivate>} /> */}
        <Route path="/user" element={<IsPrivate> <User /> </IsPrivate>} />  

        <Route path="*" element={<Error />} />

      </Routes>
     
      <Footer />
    </Box>
  )
}

export default App



