/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Flex, Spacer, Link, Button, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed" // Make the navbar fixed at the top of the page
      top="0"
      left="0"
      width="100%"
      zIndex="10"
      py={4}
      px={6}
      background="rgba(243, 238, 225, 0.85)" // Restore background with transparency for visibility
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle drop shadow
      borderRadius="0 0 10px 10px" // Slight rounded bottom corners to enhance style
      backdropFilter="blur(10px)" // Add a blur effect for smoothness
    >
      <Flex maxW="container.xl" mx="auto" align="center">
        {/* Logo */}
        <Image
          src="/BoneLogo.webp" // Correct path relative to the public folder
          alt="Paws & Relax Logo"
          boxSize="40px" // Adjust the size of the logo
          mr={4} // Add space between logo and the text
          borderRadius="full" 
        />
        <Box fontWeight="bold" fontSize="xl" color="blue.900">
          Paws & Relax
        </Box>
        <Spacer />
        {/* Navigation Links */}
        <Flex as="nav">
          <Link
            href="#home"
            mr={4}
            color="blue.900"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            Home
          </Link>
          <Link
            href="#about"
            mr={4}
            color="blue.900"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            About Us
          </Link>
          <Link
            href="#services"
            mr={4}
            color="blue.900"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            Services
          </Link>
          <Link
            href="#contact"
            mr={4}
            color="blue.900"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            Contact
          </Link>
          <Link
            href="#testimonials"
            mr={4}
            color="blue.900"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            Testimonials
          </Link>
        </Flex>
        {/* CTA Button */}
        <Button colorScheme="blue" ml={4}>
          Book Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
//Why Us / About Us
//Pricing / Services
//Testimonials
//Contact
