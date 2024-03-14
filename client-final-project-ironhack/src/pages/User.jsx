import React from 'react';
import { useState, useEffect, useContext } from "react";
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { AuthContext } from "../context/auth.context";
import { Link as ReactRouterLink, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function User() {
    const [thisUser, setThisUser] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    const storedToken = localStorage.getItem("authToken")

    // const API_URL = "http://localhost:5005"

    const API_URL = "https://final-project-ironhack.onrender.com"

    const params = useParams()

    let userId = user._id;

    useEffect(() => {

        //console.log(params)
        axios
            .get(`${API_URL}/api/user/${userId}`)
            .then((response) => {
                console.log(response.data)
                setThisUser(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    const deleteAppointment = (e, apointId) => {

        e.preventDefault();

        //let apointId = appointment._id

        //let requestBody = { userId, docId, day }


        axios
            .delete(`${API_URL}/api/appointments/${apointId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(() => {
                axios.get(`${API_URL}/api/user/${userId}`)
                    .then((response) => {
                        console.log(response.data)
                        setThisUser(response.data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        setError(error);
                    });

                console.log("appointment gone")
            })

            .catch((error) => {
                console.log(error)
                setError(error);
            });
    }

    if (isLoading) {
        return (
            <Box pt="500px">
                Loading
            </Box>
        )
    }

    return (
        <Box pt="500px">
            <Box>
                {user.name}
            </Box>
            <Box>
                {thisUser.appointments && thisUser.appointments.map((one) => {
                    //console.log(userAppointment.appointments)
                    return (
                        <Box>
                            <Box>
                                {one.doc.doctor_name}
                            </Box>
                            <Box>
                                {user.name}
                            </Box>
                            <Box>
                                {one.day}
                            </Box>
                            <Button width="865px" variant='solid' colorScheme='blue' onClick={(e) => {
                                deleteAppointment(e, one._id);
                            }}>
                                Delete Appointment
                            </Button>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default User;