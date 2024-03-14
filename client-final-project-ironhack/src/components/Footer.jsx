import React from 'react';
import { Box, Container, Heading, Text, Link, Icon, Flex, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

function Footer() {
    return (

        <Flex
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            zIndex="990"
            p={2}
            bg="#07B8C0"
        >
            <Link
                ml="auto"
                pr="55px"
                fontSize="20px"
                as={ReactRouterLink}
                to="/about"
                color="white"
                fontWeight='bold'
                _hover={{ textDecoration: "none", color: "#000000" }}
            >
                About
            </Link>
        </Flex>

    );
}

export default Footer;

// display="flex" mt="10px" alignItems="center" justify="flex-end"