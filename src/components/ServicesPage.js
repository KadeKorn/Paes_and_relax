import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';

const services = [
  {
    name: 'Dog Walking',
    description: 'Daily walks to keep your furry friend active and happy.',
    price: '$20 per 30-minute walk',
  },
  {
    name: 'Cat Sitting',
    description: 'In-home care for your feline companions while you\'re away.',
    price: '$30 per visit',
  },
  {
    name: 'Pet Boarding',
    description: 'Overnight care in our comfortable facilities.',
    price: '$50 per night',
  },
  {
    name: 'Pet Grooming',
    description: 'Professional grooming services to keep your pet looking their best.',
    price: 'Starting at $40',
  },
];

const ServicesPage = () => {
  return (
    <Box as="section" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Our Services</Heading>
        <Text fontSize="xl" textAlign="center">We offer a range of pet care services to suit your needs.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {services.map((service, index) => (
            <Card key={index}>
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
