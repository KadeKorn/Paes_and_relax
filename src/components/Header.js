/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Flex, Spacer, Link, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      position="absolute"   // Keep the navbar floating on top of the hero section
      top="0"
      left="0"
      width="100%"
      zIndex="10"
      py={4}
      px={6}
      background="rgba(243, 238, 225, 0.85)"  // Pastel green with transparency
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle drop shadow
      borderRadius="0 0 10px 10px"  // Slight rounded bottom corners to enhance style
    >
      <Flex maxW="container.xl" mx="auto" align="center">
        {/* Logo */}
        <Box fontWeight="bold" fontSize="xl" color="blue.900">
          Paws & Relax
        </Box>
        <Spacer />
        {/* Navigation Links */}
        <Flex as="nav">
          <Link href="#" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>Home</Link>
          <Link href="#about" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>About Us</Link>
          <Link href="#services" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>Services</Link>
          <Link href="#testimonials" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>Testimonials</Link>
          <Link href="#faq" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>FAQ</Link>
          <Link href="#contact" mr={4} color="blue.900" _hover={{ color: "blue.500", textDecoration: "underline" }}>Contact</Link>
        </Flex>
        {/* CTA Button */}
        <Button colorScheme="blue" ml={4}>Book Now</Button>
      </Flex>
    </Box>
  );
};

export default Header;
