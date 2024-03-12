import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Box, Container, Heading, Text, Button, Image, UnorderedList, ListItem, Wrap, Card, Stack, CardBody, CardFooter } from "@chakra-ui/react";
import axios from 'axios';

function FindDoctor() {
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState(null);

    const API_URL = "http://localhost:5005"

    useEffect(() => {

        const today = new Date();

        const weekDay = today.getDay();

        axios
            .get(`${API_URL}/api/docsbyweekday/${weekDay}`)
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return (
        <Box width="100vw" bg="#07B8C0" pb="45px" pt="50px" >
            <Wrap pt="100px" justify="space-evenly">
                {doctors && doctors.map((one) => {
                    return (
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{one.doctor_name}</Heading>

                                    <Text py='2'>
                                        Caffè latte is a coffee beverage of Italian origin made with espresso
                                        and steamed milk.
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        Make an Appointment
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    )
                })}
            </Wrap>
        </Box>
    )
}

export default FindDoctor;