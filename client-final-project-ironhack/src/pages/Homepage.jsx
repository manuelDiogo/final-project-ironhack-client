import React from 'react';
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Homepage () {

    return(
        <Box pt="500px">
            <Link to="/finddoctor" >
                <Text>
                    TODAY
                </Text>
            </Link>
        </Box>
    )

}

export default Homepage

{/* <Link to={`/details/${items.id}`}>
                                        <Button variant='solid' leftIcon={<MdAddShoppingCart />} colorScheme='blue'>
                                            details
                                        </Button>
                                    </Link> */}