import { useState, useEffect, useContext, React } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import axios from 'axios';

function MakeAppointment() {
    const [appointment, setAppointment] = useState([]);
    const [error, setError] = useState(null);

    const { user } = useContext(AuthContext);

    const API_URL = "http://localhost:5005"

    const params = useParams()

    useEffect(() => {

        const today = new Date();

        const weekDay = today.getDay();


        //console.log(params)

        axios
            .get(`${API_URL}/api/appointments/${params.appointmentsId}`)
            .then((response) => {
                //console.log(response.data)
                setAppointment(response.data);
                
            })
            .catch((error) => {
                setError(error);
            });
    },[]);

    console.log(appointment)


    return (
        <Box pt="500px" >
            <Text>
                {appointment.day}
            </Text>
            <Text>
                {user.name}
            </Text>
        </Box>
    )
}

export default MakeAppointment;