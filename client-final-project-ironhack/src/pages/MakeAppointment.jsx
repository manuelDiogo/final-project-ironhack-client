import React, { useState, useEffect, useContext } from "react";
import { Link as ReactRouterLink, useParams } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../context/auth.context";
import { Box, Card, Heading, Text, Button, Link, Stack, Divider } from "@chakra-ui/react";

function MakeAppointment() {
    const [appointment, setAppointment] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const { appointmentsId } = useParams();
    
    //const API_URL = "http://localhost:5005";

    const API_URL = "https://final-project-ironhack.onrender.com";

    useEffect(() => {
        axios.get(`${API_URL}/api/appointments/${appointmentsId}`)
            .then((response) => {
                setAppointment(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [appointmentsId]);

    if (isLoading) {
        return <Box pt="500px">Loading</Box>;
    }

    if (error) {
        return <Box>Error: {error.message}</Box>;
    }

    return (
        <Box bg="#07B8C0" width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Card variant='outline' width="900px">
                <Stack spacing={6} p={8}>
                    <Heading fontWeight="bold" fontSize="40px">Your appointment:</Heading>
                    <Divider />
                    <Text fontSize="20px"><b>Day:</b> {appointment.day}</Text>
                    <Text fontSize="20px"><b>Patient:</b> {appointment.user.name} {appointment.user.surname}</Text>
                    <Text fontSize="20px"><b>Doctor:</b> {appointment.doc.doctor_name}</Text>
                    <Text fontSize="20px"><b>Specialty:</b> {appointment.doc.specialty}</Text>
                    <Text fontSize="20px"><b>Place:</b> {appointment.doc.place_of_activity}</Text>
                    <Text fontSize="20px"><b>Location:</b> {appointment.doc.city}</Text>
                    <Text fontSize="20px"><b>Insurance:</b> {appointment.doc.healthcare_insurance}</Text>
                    <Link as={ReactRouterLink} to={`/user/${user._id}`}>
                    <Button  width="100%" colorScheme='blue'>Confirm Appointment</Button>
                    </Link>
                </Stack>
            </Card>
        </Box>
    );
}

export default MakeAppointment;