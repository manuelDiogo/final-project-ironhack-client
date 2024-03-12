// src/components/Navbar.jsx


import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";

import { Box, Link, Icon, Container, Badge, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   // <== ADD

  
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
      
      <Link to="/" as={ReactRouterLink}>
        <button>Home</button>
      </Link>

      
      {isLoggedIn && (
        <>
          <Link to="/user" as={ReactRouterLink}>
            <button>User</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup" as={ReactRouterLink}> <button>Sign Up</button> </Link>
          <Link to="/login" as={ReactRouterLink}> <button>Login</button> </Link>
        </>
      )}
    </Flex>
  );
}

export default Navbar;

// import React from 'react';
// import { useContext, useState } from 'react'
// import { Box, Link, Icon, Container, Badge, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
// import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
// import { Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
// import { AuthContext } from "../context/auth.context";

// function Navbar() {

//     const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

//     return (
//         <Flex
//             position="fixed"
//             top="0"
//             left="0"
//             right="0"
//             zIndex="999"
//             p={2}
//             bg="#07B8C0"
//             color="black"
//             justifyContent="space-between"
//             alignItems="center"
//         >
//             <Box display="flex" mt="10px" ml="20px" alignItems="center">
//                 <Link
//                     to={"/"}

//                     as={ReactRouterLink}
//                 >
//                     <Flex alignItems="center">
//                         <Icon boxSize={14} />
//                         <Text
//                             fontSize="40px"
//                             ml="5px"
//                             color="white"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "#000000" }}
//                         >
//                             EasyDoctor
//                         </Text>
//                     </Flex>
//                 </Link>

//             </Box>
//             <Box p="2" display="flex" flexDirection="column" justifyContent="center"></Box>
//             <Flex width="50%" justifyContent="space-between">
//                 {/* <Button
//                         ref={btnRef}
//                         mt="10px"
//                         color="black"
//                         fontSize="30px"
//                         fontWeight="bold"
//                         bg="transparent"
//                         border="none"
//                         _hover={{ textDecoration: "none", color: "gray.500" }}
//                         onClick={onOpen}
//                         leftIcon={<FaSearch />}
//                     >
//                         search
//                     </Button> */}

//                 <Flex alignItems="center" justifyContent="center">
//                 </Flex>
//                 {!isLoggedIn && (
//                     <Flex alignItems="center">
//                         <Link
//                             fontSize="20px"
//                             as={ReactRouterLink}
//                             to="/signup"
//                             mr="55px"
//                             color="white"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "#000000" }}
//                         >
//                             SignUp
//                         </Link>
//                         <Link
//                             fontSize="20px"
//                             as={ReactRouterLink}
//                             to="/login"
//                             mr="55px"
//                             color="white"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "#000000" }}
//                         >
//                             Login
//                         </Link>

//                         {/* <Link
//                             fontSize="30px"
//                             as={ReactRouterLink}
//                             to="/cart"
//                             color="black"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "gray.500" }}
//                         >
//                             <Flex mr="30px" align="center" position="relative">
//                                 <Icon as={FaShoppingCart} boxSize={14} />
//                                 <Badge
//                                     position="absolute"
//                                     bottom="30px"
//                                     left="62%"
//                                     transform="translateX(-50%)"
//                                     colorScheme='teal'
//                                     fontSize="xl"
//                                     borderRadius="full"
//                                     variant="solid"
//                                     padding="1px 10px"
//                                 >
//                                     {pro.length}
//                                 </Badge>
//                             </Flex>
//                         </Link> */}
//                     </Flex>
//                 )}
//                 {isLoggedIn && (
//                     <Flex alignItems="center">
//                         <Link
//                             fontSize="20px"
//                             as={ReactRouterLink}
//                             to="/user"
//                             mr="55px"
//                             color="white"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "#000000" }}
//                         >
//                             User
//                         </Link>
//                         <Link
//                             fontSize="20px"
//                             as={ReactRouterLink}
//                             to="/"
//                             mr="55px"
//                             color="white"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "#000000" }}
//                         >
//                             Logout
//                         </Link>

//                         {/* <Link
//                             fontSize="30px"
//                             as={ReactRouterLink}
//                             to="/cart"
//                             color="black"
//                             fontWeight='bold'
//                             _hover={{ textDecoration: "none", color: "gray.500" }}
//                         >
//                             <Flex mr="30px" align="center" position="relative">
//                                 <Icon as={FaShoppingCart} boxSize={14} />
//                                 <Badge
//                                     position="absolute"
//                                     bottom="30px"
//                                     left="62%"
//                                     transform="translateX(-50%)"
//                                     colorScheme='teal'
//                                     fontSize="xl"
//                                     borderRadius="full"
//                                     variant="solid"
//                                     padding="1px 10px"
//                                 >
//                                     {pro.length}
//                                 </Badge>
//                             </Flex>
//                         </Link> */}
//                     </Flex>
//                 )}
//             </Flex>
//         </Flex >

//     )
// }

// export default Navbar;