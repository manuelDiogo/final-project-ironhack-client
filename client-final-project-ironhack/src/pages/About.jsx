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