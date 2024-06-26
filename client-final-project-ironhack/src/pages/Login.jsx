import React, { useState, useContext } from 'react';
import { Box, Container, Heading, Text, Button, Input, FormControl, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

//const API_URL = "http://localhost:5005";

const API_URL = "https://final-project-ironhack.onrender.com"

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                console.log('JWT token', response.data.authToken);
                storeToken(response.data.authToken);
                authenticateUser();
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <Box bg="#07B8C0" width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Container bg="#07B8C0" centerContent>
                <Box p="6" maxW="lg" borderWidth="1px" borderRadius="lg" bg="white">
                    <Heading mb="4">Login</Heading>
                    <form onSubmit={handleLoginSubmit}>
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
                        <Button mt="4" colorScheme="teal" type="submit">
                            Login
                        </Button>
                    </form>
                    {errorMessage && <Text color="red.500" mt="4">{errorMessage}</Text>}
                    <Text mt="4">Don't have an account yet? <Link to={"/signup"}>Sign Up</Link></Text>
                </Box>
            </Container>
        </Box>
    );
}

export default Login;