import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';

const services = [
  {
    name: 'Pet Sitting (Cats, Dogs, and More)',
    description: "Your pets—whether cats, dogs, or other furry friends—will enjoy personalized, in-home care tailored to their needs. From daily walks and playtime for dogs to cozy cuddles and feeding for cats, I make sure your pets feel comfortable, safe, and loved while you're away.",
    price: 'Rates vary based on the level of care—contact me for a personalized quote.',
  },
  {
    name: 'Overnight Sitting',
    description: "Full overnight care for your home and pets. I'll stay with your furry friend to provide companionship, nighttime walks, feedings, and ensure your home stays secure while you're away.",
    price: "$60–$80 per night",
  },
];

const ServicesPage = () => {
  return (


    <Box
      as="section"
      py={10}
      backgroundImage="url('Services BG.webp')"  // Path to your background image
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"  // Ensures it covers the viewport
    >
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="Black">Our Services</Heading>
        <Text fontSize="xl" textAlign="center" color="Black">We offer a range of pet care services to suit your needs.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {services.map((service, index) => (
            <Card key={index} bg="rgba(255, 255, 255, 0.3)" boxShadow="md">
              <CardHeader>
                <Heading size="md">{service.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{service.description}</Text>
              </CardBody>
              <CardFooter>
                <Text fontWeight="bold">{service.price}</Text>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <Box textAlign="center">
          <Button colorScheme="blue" size="lg">Book a Service</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServicesPage;
