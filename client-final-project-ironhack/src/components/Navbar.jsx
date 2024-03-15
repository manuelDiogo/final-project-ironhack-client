// src/components/Navbar.jsx

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

import { Box, Link, Icon, Container, Badge, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";


function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   // <== ADD
    
    const [isLoading, setIsLoading] = useState(true)

    //let userId = user._id

    //console.log(user, "18")

    // useEffect(() => {

    //     setUserId(user._id)
    //     setIsLoading(false)

    // }, [user]);

    useEffect(() => {
        if (user && user._id) {
            setIsLoading(false);
        } else {
            setIsLoading(false); // Set isLoading to false even if the user is not logged in
        }
    }, [user]);

    if (isLoading === true) {
        return (
            <p>Loading</p>
        )
    }

    //  Update the rendering logic to display different content 
    //  depending on whether the user is logged in or not
    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="999"
            p={2}
            bg="#07B8C0"
            color="black"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box display="flex" mt="10px" ml="20px" alignItems="center">
                <Link
                    to={"/"}

                    as={ReactRouterLink}
                >
                    <Flex alignItems="center">
                        
                        <Text
                            fontSize="40px"
                            ml="5px"
                            color="white"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "#000000" }}
                        >
                            EasyDoctor
                        </Text>
                    </Flex>
                </Link>

            </Box>
            <Box p="2" display="flex" flexDirection="column" justifyContent="center"></Box>
            <Flex width="50%" justifyContent="space-between">


                <Flex alignItems="center" justifyContent="center">
                </Flex>
                {!isLoggedIn && (
                    <Flex alignItems="center">
                        <Link
                            fontSize="20px"
                            as={ReactRouterLink}
                            to="/signup"
                            mr="55px"
                            color="white"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "#000000" }}
                        >
                            SignUp
                        </Link>
                        <Link
                            fontSize="20px"
                            as={ReactRouterLink}
                            to="/login"
                            mr="55px"
                            color="white"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "#000000" }}
                        >
                            Login
                        </Link>

                    </Flex>
                )}
                {isLoggedIn &&  (
                    <Flex alignItems="center">
                        <Link
                            fontSize="20px"
                            as={ReactRouterLink}
                            to={`/user/${user._id}`}
                            // to="/user"
                            mr="55px"
                            color="white"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "#000000" }}
                        >
                            User
                        </Link>
                        <Link
                            fontSize="20px"
                            as={ReactRouterLink}
                            to="/"
                            mr="55px"
                            color="white"
                            fontWeight='bold'
                            _hover={{ textDecoration: "none", color: "#000000" }}
                            onClick={logOutUser}
                        >
                            Logout
                        </Link>
                    </Flex>
                )}
            </Flex>
        </Flex >
    );
}

export default Navbar;

//user &&

//<Icon boxSize={14} />