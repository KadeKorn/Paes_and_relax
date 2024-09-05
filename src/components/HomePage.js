import React from 'react';
import { Box, Heading, Text, Button, Image, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box as="section" py={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Loving Care for Your Pets While You're Away
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="container.md">
          Welcome to Paws & Relax, where we treat your furry friends like family. Our dedicated team ensures your pets receive the love and attention they deserve when you can't be there.
        </Text>
        <Image
          src="/images/happy-pets.jpg"
          alt="Happy pets being cared for"
          borderRadius="md"
          boxSize="400px"
          objectFit="cover"
        />
        <Button colorScheme="blue" size="lg" as="a" href="#booking">
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;
