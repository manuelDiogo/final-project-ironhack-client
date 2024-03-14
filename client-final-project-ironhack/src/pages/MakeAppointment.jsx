import { useState, useEffect, useContext, React } from "react";
import { AuthContext } from "../context/auth.context";

import { Box, Container, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink, useParams } from "react-router-dom";
import axios from 'axios';



function MakeAppointment() {
    const [appointment, setAppointment] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useContext(AuthContext);

    //const API_URL = "http://localhost:5005"

    const API_URL = "https://final-project-ironhack.onrender.com"

    let params = useParams()

    let userId = user._id;

    //let userId = params

    useEffect(() => {

        const today = new Date();

        const weekDay = today.getDay();

        let userId = user._id;

        //console.log(params)

        axios
            .get(`${API_URL}/api/appointments/${params.appointmentsId}`)
            .then((response) => {
                //console.log(response.data)
                setAppointment(response.data);
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    console.log(appointment)

    if(isLoading) {
        return(
            <Box pt="500px">
                Loading
            </Box>
        )
    }

    return (
        <Box pt="500px" >
            <Text>
                {appointment.day}
            </Text>
            <Text>
                {appointment.doc.doctor_name}
            </Text>
            <Text>
                {user.name}
            </Text>
            <Link
                fontSize="20px"
                as={ReactRouterLink}
                to={`/user/${userId}`}
                mr="55px"
                color="black"
                fontWeight='bold'
                _hover={{ textDecoration: "none", color: "#000000" }}
            >
                Confirm Appointment
            </Link>
        </Box>
    )
}

export default MakeAppointment;