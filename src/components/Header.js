/** @jsxImportSource @emotion/react */
import React from "react";
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
  useBreakpointValue,
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
      right="0"
      width="94.5%"
      mx="auto"
      zIndex="10"
      py={4}
      px={10}
      background="rgba(243, 238, 225, 0.1)" // Slight transparent desert color
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      borderRadius="0 0 10px 10px"
      backdropFilter="blur(10px)"
    >
      <Flex maxW="container.xl" mx="auto" align="center">
        <Box width="50px" height="50px" overflow="hidden" mr={4}>
          <Image
            src="BoneLogo.webp"
            alt="Paws &amp; Relax Logo"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
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
            <Button colorScheme="orange" ml={4} size="sm">
              Book Now
            </Button>
          </Flex>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          mt={4}
          p={4}
          bg="rgba(255, 204, 153,)"
          spacing={6}
          align="center"
          display={{ md: "none" }}
        >
          <NavLink href="#home" mobile>
            Home
          </NavLink>
          <NavLink href="#about" mobile>
            About Us
          </NavLink>
          <NavLink href="#services" mobile>
            Services
          </NavLink>
          <NavLink href="#booking" mobile>
            Contact
          </NavLink>
          <NavLink href="#testimonials" mobile>
            Testimonials
          </NavLink>
          <Button
            colorScheme="orange" // Desert tone button
            size="sm"
            width="100%"
            _hover={{ transform: "scale(1.05)" }} // Subtle scale-up effect on hover
          >
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
    fontWeight="bold"
    p={mobile ? 1 : 2} // Adds more padding for better spacing
    _hover={{
      color: "#ff9966",  // Slightly darker and more visible hover color
      transform: "scale(1.1)",  // Slightly bigger scale effect
      transition: "all 0.3s ease-in-out",  // Smooth transition for both color and scale
    }}
    display={mobile ? "block" : "inline"}
    width={mobile ? "100%" : "auto"}
    textAlign="center"
  >
    {children}
  </Link>
);


export default Header;
