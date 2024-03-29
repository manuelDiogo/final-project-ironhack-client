import React from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Text, Button, Image, Stack, Divider, Center, ButtonGroup, Heading, Link } from "@chakra-ui/react";
import manuelImage from "../assets/manuel.jpg";
import pedroImage from "../assets/pedro.jpg";

function About() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="#07B8C0" width="100vw">
      <Stack direction={{ base: 'column', md: 'row' }} spacing="50px" justifyContent="center" alignItems="center">
        <Card maxW="lg" width={{ base: '80%', md: 'auto' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Pedro</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam sapiente dignissimos earum et vitae, blanditiis dolor deserunt tenetur harum nam debitis molestias, assumenda, voluptate est fugiat labore. Nostrum, repudiandae.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <Image objectFit='cover' maxH="200px" src={pedroImage} />
          </Center>
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2">
              <Link href="https://github.com/plopes86">
                <Button color="white" backgroundColor='gray'>
                  Github
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/pedro-daniel-dinis-lopes/">
                <Button colorScheme='linkedin'>
                  Linkedin
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="lg" width={{ base: '80%', md: 'auto' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Manuel Tavares</Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores est impedit! Incidunt distinctio modi, ea cum esse, laboriosam vero vitae alias ipsam ipsa consequatur in odit labore repudiandae sapiente?
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <Image objectFit='cover' maxH="200px" src={manuelImage} />
          </Center>
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2">
              <Link href="https://github.com/manuelDiogo">
                <Button color="white" backgroundColor='gray'>
                  Github
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/manuel-tavares-6742a1294/">
                <Button colorScheme='linkedin'>
                  Linkedin
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Stack>
    </Box>
  );
}

export default About;




//   import React from 'react';
// import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
// import manuelImage from "../assets/manuel.jpg"
// import pedroImage from "../assets/pedro.jpg"

// function About() {
//     return (
//       <Box>
//         <div className="about">
//           <p style={{ fontSize: "28px" }} className = "abouttext">
//             EasyDoctors API is your gateway to effortless healthcare access in Portugal.<br />
//             With a comprehensive database of doctors across various specialties, it simplifies the process of finding the right practitioner.<br />
//             Instantly check for available appointments today, ensuring timely medical assistance with unparalleled ease and convenience<br />
//           </p>
//           <p classNamestyle={{ fontSize: "24px" }} marginleft="100px">.°˖✧ Developers ✧˖°.</p>
//           <section>
//             <p style={{ fontSize: "24px" }} className = "button">Manuel Tavares</p>
//             <Image
//             src = {manuelImage} className="worker"></Image>
//             <p><a href="https://www.linkedin.com/in/manuel-tavares-6742a1294/"><button className="button">LinkedIn</button></a></p>
//             <p><a href="https://github.com/manuelDiogo"><button className="button"><svg
  
//               viewBox="0 0 496 512"
//               height="1.4em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
//             </svg></button></a></p>
//             <p style={{ fontSize: "24px" }} className = "button">Pedro Lopes</p>
//             <Image
//             src = {pedroImage} className="worker"></Image>
//             <p><a href="https://www.linkedin.com/in/pedro-lopes-4804572b4/"><button className="button">LinkedIn</button></a></p>
//             <p><a href="https://github.com/plopes86"><button className="button"><svg
  
//               viewBox="0 0 496 512"
//               height="1.4em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
//             </svg></button></a></p>
//           </section>
//         </div>
//       </Box>
//     );
//   }
  
//   export default About;



// import React from 'react';
// import { Box, Card, CardHeader, CardBody, CardFooter, Text, Button, Image, Stack, Divider, Center, ButtonGroup, Heading, Link } from "@chakra-ui/react";
// import manuelImage from "../assets/manuel.jpg"
// import pedroImage from "../assets/pedro.jpg"

// function About() {
//   return (
//     <Box display="flex" mt="50px" justifyContent="center" bg="#08bcc4" pb="200px">
//       <Box
//         display="flex"
//         gap="50px"
//         mt="200px"
//         justifyContent="center"
//       >
//         <Card maxW="lg" maxH="lg">
//           <CardBody>
//             <Stack mt="6" spacing="3">
//               <Heading size="md">Pedro</Heading>
//               <Text>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam sapiente dignissimos earum et vitae, blanditiis dolor deserunt tenetur harum nam debitis molestias, assumenda, voluptate est fugiat labore. Nostrum, repudiandae.
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <Center>

//           <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src= {pedroImage} 
//           />
//           </Center>
//           <CardFooter display="flex" justifyContent="center">
//             <ButtonGroup spacing="2">
              
//               <Link href="https://github.com/plopes86">
//                 <Button color="white" backgroundColor='gray'>
//                   Github
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/pedro-daniel-dinis-lopes/">
//                 <Button colorScheme='linkedin'>
//                   Linkedin
//                 </Button>
//               </Link>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>

//         <Card maxW="lg">
//           <CardBody>
//             <Stack mt="6" spacing="3">
//               <Heading size="md">Manuel Tavares</Heading>
//               <Text>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores est impedit! Incidunt distinctio modi, ea cum esse, laboriosam vero vitae alias ipsam ipsa consequatur in odit labore repudiandae sapiente?
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <Center>

//           <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src= {manuelImage}
//           />
//           </Center>
//           <CardFooter display="flex" justifyContent="center">
//             <ButtonGroup spacing="2">
//               <Link href="https://github.com/manuelDiogo">
//                 <Button color="white" backgroundColor='gray'>
//                   Github
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/manuel-tavares-6742a1294/">
//                 <Button colorScheme='linkedin'>
//                   Linkedin
//                 </Button>
//               </Link>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       </Box>
//     </Box>
//   );
// }

// export default About;

// import React from 'react';
// import { Box, Card, CardHeader, CardBody, CardFooter, Text, Button, Image, Stack, Divider, Center, ButtonGroup, Heading, Link } from "@chakra-ui/react";
// import manuelImage from "../assets/manuel.jpg"
// import pedroImage from "../assets/pedro.jpg"

// function About() {
//   return (
//     <Box display="flex" mt="50px" justifyContent="center" bg="#08bcc4" pb="200px">
//       <Box
//         display="flex"
//         gap="50px"
//         mt="200px"
//         justifyContent="center"
//       >
//         <Card maxW="lg" maxH="lg">
//           <CardBody>
//             <Stack mt="6" spacing="3">
//               <Heading size="md">Pedro</Heading>
//               <Text>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam sapiente dignissimos earum et vitae, blanditiis dolor deserunt tenetur harum nam debitis molestias, assumenda, voluptate est fugiat labore. Nostrum, repudiandae.
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <Center>

//           <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src= {pedroImage} 
//           />
//           </Center>
//           <CardFooter display="flex" justifyContent="center">
//             <ButtonGroup spacing="2">
              
//               <Link href="https://github.com/plopes86">
//                 <Button color="white" backgroundColor='gray'>
//                   Github
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/pedro-daniel-dinis-lopes/">
//                 <Button colorScheme='linkedin'>
//                   Linkedin
//                 </Button>
//               </Link>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>

//         <Card maxW="lg">
//           <CardBody>
//             <Stack mt="6" spacing="3">
//               <Heading size="md">Manuel Tavares</Heading>
//               <Text>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores est impedit! Incidunt distinctio modi, ea cum esse, laboriosam vero vitae alias ipsam ipsa consequatur in odit labore repudiandae sapiente?
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <Center>

//           <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src= {manuelImage}
//           />
//           </Center>
//           <CardFooter display="flex" justifyContent="center">
//             <ButtonGroup spacing="2">
//               <Link href="https://github.com/manuelDiogo">
//                 <Button color="white" backgroundColor='gray'>
//                   Github
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/manuel-tavares-6742a1294/">
//                 <Button colorScheme='linkedin'>
//                   Linkedin
//                 </Button>
//               </Link>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       </Box>
//     </Box>
//   );
// }

// export default About;