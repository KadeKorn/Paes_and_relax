import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      as="section"
      id="home"  // Added ID for smooth scrolling links
      pt={0}
      mt="0"
      backgroundImage="url('/Paws_and_Relax/Day_background.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing={1}
        align="center"
        p={{ base: 2, md: 8 }} // Responsive padding
        borderRadius="md"
        maxW="container.md"
        textAlign="center"
      >
        {/* Responsive Heading */}
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }} // Adjust font size based on screen
          color="blue.900"
        >
          Paws & Relax
        </Heading>

        {/* Responsive Text */}
        <Text
          fontSize={{ base: "md", md: "lg" }} // Smaller font on mobile, larger on desktop
          textAlign="center"
          color="blue.800"
        >
          Worried about leaving your furry friends? Don't be.
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          color="blue.800"
        >
          At Paws & Relax, we offer more than just pet sitting—we provide peace of mind.
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          color="blue.800"
        >
          Your pets will be loved, cared for, and treated like family while you're away.
        </Text>
      </VStack>
    </Box>
  );
};

export default HomePage;
