import React, { useState } from 'react';
import { Box, Container, Heading, Text, Button, Input, FormControl, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//const API_URL = "http://localhost:5005";

const API_URL = "https://final-project-ironhack.onrender.com"

function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleSurname = (e) => setSurname(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name, surname };

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

    return (
        <Box bg="#07B8C0" width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Container bg="#07B8C0" centerContent>
                <Box p="6" maxW="lg" borderWidth="1px" borderRadius="lg" bg="white">
                    <Heading mb="4">Sign Up</Heading>
                    <form onSubmit={handleSignupSubmit}>
                        <FormControl id="email" isRequired>
                            <Text>Email:</Text>
                            <Input
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="Enter your email"
                            />
                        </FormControl>
                        <FormControl id="password" mt="4" isRequired>
                            <Text>Password:</Text>
                            <Input
                                type="password"
                                value={password}
                                onChange={handlePassword}
                                placeholder="Enter your password"
                            />
                        </FormControl>
                        <FormControl id="name" mt="4" isRequired>
                            <Text>Name:</Text>
                            <Input
                                type="text"
                                value={name}
                                onChange={handleName}
                                placeholder="Enter your name"
                            />
                        </FormControl>
                        <FormControl id="surname" mt="4" isRequired>
                            <Text>Surname:</Text>
                            <Input
                                type="text"
                                value={surname}
                                onChange={handleSurname}
                                placeholder="Enter your surname"
                            />
                        </FormControl>
                        <Button mt="4" colorScheme="teal" type="submit">
                            Sign Up
                        </Button>
                    </form>
                    {errorMessage && <Text color="red.500" mt="4">{errorMessage}</Text>}
                    <Text mt="4">Already have an account? <Link to={"/login"}>Login</Link></Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Signup;




// import React from 'react';
// import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// // const API_URL = "https://final-project-ironhack.onrender.com"

// function Signup(props) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [surname, setSurname] = useState("");
//     const [errorMessage, setErrorMessage] = useState(undefined);

//     const navigate = useNavigate();

//     const handleEmail = (e) => setEmail(e.target.value);
//     const handlePassword = (e) => setPassword(e.target.value);
//     const handleName = (e) => setName(e.target.value);
//     const handleSurname = (e) => setSurname(e.target.value);

//     const handleSignupSubmit = (e) => {
//         e.preventDefault();
//         // Create an object representing the request body
//         const requestBody = { email, password, name, surname };

//         axios.post(`${API_URL}/auth/signup`, requestBody)
//             .then(() => {
//                 navigate('/login');
//             })
//             .catch((error) => {
//                 const errorDescription = error.response.data.message;
//                 setErrorMessage(errorDescription);
//             })
//     }

//     return (
//         <div>
//             <h1>Sign Up</h1>

//             <form onSubmit={handleSignupSubmit}>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={handleEmail}
//                 />

//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={handlePassword}
//                 />

//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={handleName}
//                 />

//                 <label>Surname:</label>
//                 <input
//                     type="text"
//                     name="surname"
//                     value={surname}
//                     onChange={handleSurname}
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}

//             <p>Already have account?</p>
//             <Link to={"/login"}> Login</Link>
//         </div>
//     )
// }

// export default Signup