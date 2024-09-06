import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      as="section"
      id="home"  // Added ID for smooth scrolling links
      pt={0}  // No top padding so the background image starts from the very top
      mt="0"  // Removes any extra margin that might exist
      backgroundImage="url('/Day_background.png')" 
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"  // Ensure full-screen height
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={1.5} align="center" p={8} borderRadius="md" maxW="container.md">
        <Heading as="h1" size="2xl" textAlign="center" color="blue.900">
          Paws & Relax
        </Heading>
        <Text fontSize="lg" textAlign="center" color="blue.800">
          Worried about leaving your furry friends? Don’t be.
        </Text>
        <Text fontSize="lg" textAlign="center" color="blue.800">
          At Paws & Relax, we offer more than just pet sitting—we provide peace of mind.
        </Text>
        <Text fontSize="lg" textAlign="center" color="blue.800">
          Your pets will be loved, cared for, and treated like family while you’re away.
        </Text>
      </VStack>
    </Box>
  );
};

export default HomePage;
