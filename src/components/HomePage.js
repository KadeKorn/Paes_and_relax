import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      as="section"
      py={10}
      backgroundImage="url('/Day_background.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="100vh"  // Adjust the height as needed
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6} align="center" bg="rgba(255, 255, 255, 0.8)" p={6} borderRadius="md">
        <Heading as="h1" size="2xl" textAlign="center" color="blue.900">
          Loving Care for Your Pets While You're Away
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="container.md" color="blue.800">
          Welcome to Paws & Relax, where we treat your furry friends like family. Our dedicated team ensures your pets receive the love and attention they deserve when you can't be there.
        </Text>
        <Button colorScheme="blue" size="lg" as="a" href="#booking">
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;
