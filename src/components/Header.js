/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Flex, Spacer, Link, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.xl" mx="auto" align="center">
        <Box fontWeight="bold" fontSize="xl">
          Paws & Care
        </Box>
        <Spacer />
        <Flex as="nav">
          <Link href="#" mr={4}>Home</Link>
          <Link href="#" mr={4}>About Us</Link>
          <Link href="#" mr={4}>Services</Link>
          <Link href="#" mr={4}>Testimonials</Link>
          <Link href="#" mr={4}>FAQ</Link>
          <Link href="#" mr={4}>Contact</Link>
        </Flex>
        <Button colorScheme="blue" ml={4}>Book Now</Button>
      </Flex>
    </Box>
  );
};

export default Header;
