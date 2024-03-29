import React from 'react';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link as ReactRouterLink, useNavigate  } from 'react-router-dom';
import { Box, Heading, Text, Button, Wrap, Card, Stack, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import axios from 'axios';

function FindDoctor() {
    const [doctors, setDoctors] = useState([]);
    //const [error, setError] = useState(null);
    
    const { user } = useContext(AuthContext);

    //const API_URL = "http://localhost:5005"

    const API_URL = "https://final-project-ironhack.onrender.com"

    const navigate = useNavigate();

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

    const createAppointment = (e, docId) => {

        e.preventDefault();

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const today = new Date();

        let day = days[today.getDay()];

        let userId = user._id

        let requestBody = { userId, docId, day }

        axios
            .post(`${API_URL}/api/appointments`, requestBody)
            .then((response) => {
                console.log(response.data)
                navigate(`/makeappoint/${response.data}`);
            })
            .catch((error) => {
                setError(error);
            });
    }

    return (
        <Box width="100vw" bg="#07B8C0"  pb="70px">
            <Wrap pt="100px" justify="center">
                {doctors && doctors.map((one) => {
                    return (
                        <Box bg="#07B8C0">
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            width="900px"
                            justifyContent='center'
                            flexWrap='wrap'
                            alignItems='center'
                        >
                            <Stack>
                                <CardBody>
                                    <Heading  fontWeight="bold" fontSize="40px">{one.doctor_name}</Heading>
                                    <Divider />
                                    <Text pt="20px"  fontSize="20px">
                                    <b>Specialty:</b> {one.specialty}
                                    </Text>
                                    <Text pt="10px"  fontSize="20px">
                                    <b>Place:</b> {one.place_of_activity}
                                    </Text>
                                    <Text pt="10px"  fontSize="20px">
                                    <b>Location:</b> {one.city}
                                    </Text>
                                    <Text pt="10px"  fontSize="20px">
                                    <b>Insurance:</b> {one.healthcare_insurance}
                                    </Text>
                                </CardBody>
                                <CardFooter justify="center" >
                                    <Button width="865px" variant='solid' colorScheme='blue' onClick={(e) => {
                                        createAppointment(e, one._id);
                                    }}>
                                        Make an Appointment
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                        </Box>
                    )
                })}
            </Wrap>
        </Box>
    )
}

export default FindDoctor;