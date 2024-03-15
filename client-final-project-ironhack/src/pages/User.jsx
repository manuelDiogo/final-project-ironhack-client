import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Button, Flex, Card } from '@chakra-ui/react'; // Importing Card component from Chakra UI
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { useParams } from 'react-router-dom';

function User() {
    const [thisUser, setThisUser] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('authToken');
    
    //const API_URL = 'http://localhost:5005';

    const API_URL = "https://final-project-ironhack.onrender.com"

    const params = useParams();
    let userId = user._id;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let day = days[today.getDay()];

    useEffect(() => {
        axios
            .get(`${API_URL}/api/user/${userId}`)
            .then((response) => {
                setThisUser(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    const deleteAppointment = (e, appointmentId) => {
        e.preventDefault();
        axios
            .delete(`${API_URL}/api/appointments/${appointmentId}`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then(() => {
                axios
                    .get(`${API_URL}/api/user/${userId}`)
                    .then((response) => {
                        setThisUser(response.data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        setError(error);
                    });
            })
            .catch((error) => {
                setError(error);
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
                        <Flex width="100vw" bg="#07B8C0" justify="center" pb="50px">
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




// import React from 'react';
// import { useState, useEffect, useContext } from "react";
// import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
// import { AuthContext } from "../context/auth.context";
// import { Link as ReactRouterLink, useNavigate, useParams } from 'react-router-dom';

// import axios from 'axios';

// function User() {
//     const [thisUser, setThisUser] = useState([]);
//     const { user } = useContext(AuthContext);
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null);

//     const storedToken = localStorage.getItem("authToken")

//     const API_URL = "http://localhost:5005"

//     // const API_URL = "https://final-project-ironhack.onrender.com"

//     const params = useParams()

//     let userId = user._id;

//     useEffect(() => {

//         //console.log(params)
//         axios
//             .get(`${API_URL}/api/user/${userId}`)
//             .then((response) => {
//                 console.log(response.data)
//                 setThisUser(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//             });
//     }, []);

//     const deleteAppointment = (e, apointId) => {

//         e.preventDefault();

//         //let apointId = appointment._id

//         //let requestBody = { userId, docId, day }


//         axios
//             .delete(`${API_URL}/api/appointments/${apointId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
//             .then(() => {
//                 axios.get(`${API_URL}/api/user/${userId}`)
//                     .then((response) => {
//                         console.log(response.data)
//                         setThisUser(response.data);
//                         setIsLoading(false);
//                     })
//                     .catch((error) => {
//                         setError(error);
//                     });

//                 console.log("appointment gone")
//             })

//             .catch((error) => {
//                 console.log(error)
//                 setError(error);
//             });
//     }

//     if (isLoading) {
//         return (
//             <Box pt="500px">
//                 Loading
//             </Box>
//         )
//     }

//     return (
//         <Box pt="500px">
//             <Text>
//                 {thisUser.name}{" "}{thisUser.surname}
//             </Text>
//             <Box>
//                 {thisUser.appointments && thisUser.appointments.map((one) => {
//                     //console.log(userAppointment.appointments)
//                     return (
//                         <Box>
//                             <Box>
//                                 {one.day}
//                             </Box>
//                             {one.doc.doctor_name}
//                             <Box>
//                                 {one.doc.specialty}
//                             </Box>
//                             <Box>
//                                 {one.doc.healthcare_insurance}
//                             </Box>
//                             <Button width="865px" variant='solid' colorScheme='blue' onClick={(e) => {
//                                 deleteAppointment(e, one._id);
//                             }}>
//                                 Delete Appointment
//                             </Button>
//                         </Box>
//                     )
//                 })}
//             </Box>
//         </Box>
//     )
// }

// export default User;


// import React, { useState, useEffect, useContext } from 'react';
// import { Box, Text, Button, Flex } from '@chakra-ui/react';
// import axios from 'axios';
// import { AuthContext } from '../context/auth.context';
// import { useParams } from 'react-router-dom';

// function User() {
//     const [thisUser, setThisUser] = useState([]);
//     const { user } = useContext(AuthContext);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const storedToken = localStorage.getItem('authToken');
    
//     const API_URL = 'http://localhost:5005';

//     // const API_URL = "https://final-project-ironhack.onrender.com"

//     const params = useParams();
//     let userId = user._id;

//     useEffect(() => {
//         axios
//             .get(`${API_URL}/api/user/${userId}`)
//             .then((response) => {
//                 setThisUser(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//             });
//     }, []);

//     const deleteAppointment = (e, appointmentId) => {
//         e.preventDefault();
//         axios
//             .delete(`${API_URL}/api/appointments/${appointmentId}`, {
//                 headers: { Authorization: `Bearer ${storedToken}` }
//             })
//             .then(() => {
//                 axios
//                     .get(`${API_URL}/api/user/${userId}`)
//                     .then((response) => {
//                         setThisUser(response.data);
//                         setIsLoading(false);
//                     })
//                     .catch((error) => {
//                         setError(error);
//                     });
//             })
//             .catch((error) => {
//                 setError(error);
//             });
//     };

//     if (isLoading) {
//         return <Box>Loading...</Box>;
//     }

//     return (
//         <Box bg="#07B8C0" width="100vw" height="100vh" display="flex" justifyContent="center">
//             <Box bg="#07B8C0" textAlign="center" position="fixed" width="100%"  pt="100px" zIndex={1}>
//                 <Text bg="#07B8C0" color="white" fontWeight="bold" fontSize="60px">
//                     {thisUser.name} {thisUser.surname}
//                 </Text>
//             </Box>
//             <Flex pt="120px" direction="column" alignItems="center" mt={20}>
//                 {thisUser.appointments &&
//                     thisUser.appointments.map((appointment) => (
//                         <Box key={appointment._id} bg="white" p={4} mb={4} width="80%" maxW="400px">
//                             <Box>{appointment.day}</Box>
//                             <Box>{appointment.doc.doctor_name}</Box>
//                             <Box>{appointment.doc.specialty}</Box>
//                             <Box>{appointment.doc.healthcare_insurance}</Box>
//                             <Button
//                                 width="100%"
//                                 mt={4}
//                                 colorScheme="red"
//                                 onClick={(e) => deleteAppointment(e, appointment._id)}
//                             >
//                                 Delete Appointment
//                             </Button>
//                         </Box>
//                     ))}
//             </Flex>
//         </Box>
//     );
// }

// export default User;