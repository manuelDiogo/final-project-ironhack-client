import React from 'react';
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor-patient.png"

function Homepage () {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today2 = new Date();

    let day = days[today2.getDay()];

    return(
        <Box pt="10px">
        <Image 
        src= {doctor}
        style={{ 
        position: "fixed", 
        left: 0,
        bottom: 0,
        width: "40%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        paddingTop: "10vw",
        zIndex: "999"
      }}/>
            <Text className = "today"> Today is {day}</Text>
            <Link to="/finddoctor" >
                <Text className = "homepagetext">
                    Get A Doctor
                </Text>
                <Button className = "homebutton"colorScheme='teal' size='lg' >
                    Today
                </Button>
            </Link>
        </Box>
    )

}

export default Homepage




// import React from 'react';
// import { Box, Container, Heading, Text, Button, Image, Wrap, Flex } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";


// function Homepage() {
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     const today2 = new Date();

//     let day = days[today2.getDay()];

//     return (
//         < Flex
//         // bgImage="url("../imagens/doctor-patient.png")"
//         pt="100px"
//         justifyContent="space-between"
//         alignContent="center"
//         width="100vw"
//         height= "100vw"
//         position="fixed"
//         >

//             {/* <Image src = url("../imagens/doctor-patient.png")/> */}
                
            

//             <Container maxW="container.xl" textAlign="center">
//                 <Heading as="h2" fontSize="5xl" mb={4}>
//                     Today is {day}!
//                 </Heading>
//                 <Text fontSize="xl" mb={8}>
//                     Get a doctor
//                 </Text>
//                 <Button colorScheme="blue" size="lg" as={ReactRouterLink} to="/finddoctor">
//                     Today!
//                 </Button>
//             </Container>
//         </Flex >

//     )
// }

// export default Homepage