import React from 'react';
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor-patient.png";

function Homepage() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let day = days[today.getDay()];

    return (
        <Box bg="#07B8C0" width="100vw" height="100vh" overflow="hidden">
            <Flex justify="flex-end" align="center" pr="300px" py={4} height="100%">
                <Box position="fixed" left={0} bottom={0} width="40%" zIndex={999}>
                    <Image src={doctor} alt="doctor" />
                </Box>
                <Box textAlign="left">
                    <Text fontSize='50px' color="white">Today is <b>{day}</b>!</Text>
                    <Text pt="40px" fontSize='50px' color="white">Get A Doctor...</Text>
                    <Link to="/finddoctor" >
                        <Button colorScheme='orange' textColor ="white" mt="30px" size="lg" fontSize='30px'>    
                        Today!
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
}

export default Homepage;