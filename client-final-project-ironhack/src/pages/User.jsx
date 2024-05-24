import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Button, Flex, Card } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
//import { useParams } from 'react-router-dom';

function User() {
    const [thisUser, setThisUser] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('authToken');
    
    //const API_URL = 'http://localhost:5005';

    const API_URL = "https://final-project-ironhack.onrender.com"

    //const params = useParams();
    //let userId = user._id;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let day = days[today.getDay()];

    // useEffect(() => {
    //     axios
    //         .get(`${API_URL}/api/user/${userId}`)
    //         .then((response) => {
    //             setThisUser(response.data);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         });
    // }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/api/user`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then((response) => {
                setThisUser(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false); // Ensure loading state is false on error
            });
    }, [storedToken]); // Add storedToken as dependency

    // const deleteAppointment = (e, appointmentId) => {
    //     e.preventDefault();
    //     axios
    //         .delete(`${API_URL}/api/appointments/${appointmentId}`, {
    //             headers: { Authorization: `Bearer ${storedToken}` }
    //         })
    //         .then(() => {
    //             axios
    //                 .get(`${API_URL}/api/user/${userId}`)
    //                 .then((response) => {
    //                     setThisUser(response.data);
    //                     setIsLoading(false);
    //                 })
    //                 .catch((error) => {
    //                     setError(error);
    //                 });
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         });
    // };

    // const deleteAppointment = (e, appointmentId) => {
    //     e.preventDefault();
    //     axios
    //         .delete(`${API_URL}/api/appointments/${appointmentId}`, {
    //             headers: { Authorization: `Bearer ${storedToken}` }
    //         })
    //         .then(() => {
    //             axios
    //                 .get(`${API_URL}/api/user`, {
    //                     headers: { Authorization: `Bearer ${storedToken}` }
    //                 })
    //                 .then((response) => {
    //                     setThisUser(response.data);
    //                     setIsLoading(false);
    //                 })
    //                 .catch((error) => {
    //                     setError(error);
    //                     setIsLoading(false); // Ensure loading state is false on error
    //                 });
    //         })
    //         .catch((error) => {
    //             setError(error);
    //             setIsLoading(false); // Ensure loading state is false on error
    //         });
    // };

    const deleteAppointment = (e, appointmentId) => {
        e.preventDefault();
        axios
            .delete(`${API_URL}/api/appointments/${appointmentId}`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then(() => {
                // Reload user data after deleting appointment
                axios
                    .get(`${API_URL}/api/user`, {
                        headers: { Authorization: `Bearer ${storedToken}` }
                    })
                    .then((response) => {
                        setThisUser(response.data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        setError(error);
                        setIsLoading(false); // Ensure loading state is false on error
                    });
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false); // Ensure loading state is false on error
            });
    };

    if (isLoading) {
        return <Box>Loading...</Box>;
    }

    return (
        <Box bg="#07B8C0" width="100vw" height="100vh" display="flex" justifyContent="center" >
            <Box bg="#07B8C0" textAlign="center" position="fixed" width="100%" pt="65px" zIndex={1}>
            <Text bg="#07B8C0" color="white" fontWeight="bold" fontSize="50px">
                    Hello, {thisUser.name} {thisUser.surname}!
                </Text>
                {!thisUser.appointments || thisUser.appointments.length === 0 ? (
                    <Text bg="#07B8C0" color="white" fontSize="30px">
                        You have nothing scheduled today.
                    </Text>
                ) : (
                    <Text bg="#07B8C0" color="white" fontSize="30px">
                        Today, {day}, you have the following scheduled appointments:
                    </Text>
                )}
            </Box>
            <Flex pt="180px" direction="column" alignItems="center" mt={20} width="500px">
                {thisUser.appointments &&
                    thisUser.appointments.map((appointment) => (
                        <Flex width="100vw" bg="#07B8C0" justify="center" pb="40px">
                        <Card
                        textAlign="left"
                            key={appointment._id}
                            bg="white"
                            p={4}
                            mb={4}
                            width="80%"
                            maxW="400px"
                            borderRadius="md" // Rounded corners
                            boxShadow="md" // Adding box shadow for depth
                        >
                            {/* <Text fontWeight="bold">{appointment.day}</Text> */}
                            <Text fontWeight="bold" fontSize="20px">{appointment.doc.doctor_name}</Text>
                            <Text pt="10px"  fontSize="15px"><b>Specialty: </b>{appointment.doc.specialty}</Text>
                            <Text pt="10px"  fontSize="15px"><b>Place: </b>{appointment.doc.place_of_activity}</Text>
                            <Text pt="10px" fontSize="15px"><b>Location: </b>{appointment.doc.city}</Text>
                            <Text pt="10px"  fontSize="15px"><b>Insurance: </b>{appointment.doc.healthcare_insurance}</Text>
                            <Button
                                width="100%"
                                mt={4}
                                colorScheme="red"
                                onClick={(e) => deleteAppointment(e, appointment._id)}
                            >
                                Delete Appointment
                            </Button>
                        </Card>
                        </Flex>
                        
                    ))}
                    
            </Flex>
        </Box>
    );
}

export default User;