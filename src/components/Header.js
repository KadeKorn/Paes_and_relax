/** @jsxImportSource @emotion/react */
// This component implements a mobile-first design for the header, including a responsive
// navigation menu that adapts to different screen sizes using Chakra UI's responsive utilities.
import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Image,
  IconButton,
  VStack,
  Collapse,
  useDisclosure,
  useBreakpointValue
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="10"
      py={4}
      px={6}
      background="rgba(243, 238, 225, 0.85)"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      borderRadius="0 0 10px 10px"
      backdropFilter="blur(10px)"
    >
      <Flex maxW="container.xl" mx="auto" align="center">
        <Image
          src="/BoneLogo.webp"
          alt="Paws &amp; Relax Logo"
          boxSize="40px"
          mr={4}
          borderRadius="full"
        />
        <Box fontWeight="bold" fontSize="xl" color="blue.900">
          Paws &amp; Relax
        </Box>
        <Spacer />
        {isMobile ? (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        ) : (
          <Flex as="nav">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#booking">Contact</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <Button colorScheme="blue" ml={4} size="sm">
              Book Now
            </Button>
          </Flex>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          mt={4}
          p={4}
          bg="white"
          spacing={4}
          align="stretch"
          display={{ md: "none" }}
        >
          <NavLink href="#home" mobile>Home</NavLink>
          <NavLink href="#about" mobile>About Us</NavLink>
          <NavLink href="#services" mobile>Services</NavLink>
          <NavLink href="#booking" mobile>Contact</NavLink>
          <NavLink href="#testimonials" mobile>Testimonials</NavLink>
          <Button colorScheme="blue" size="sm" width="100%">
            Book Now
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <Link
    href={href}
    mr={mobile ? 0 : 4}
    color="blue.900"
    _hover={{ color: "blue.500", textDecoration: "underline" }}
    display={mobile ? "block" : "inline"}
    width={mobile ? "100%" : "auto"}
  >
    {children}
  </Link>
);

export default Header;
