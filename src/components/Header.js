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
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import boneLogo from "../assets/BoneLogo.webp"; // Import your logo image

// Create motion-enabled Chakra components
const MotionFlex = motion(Flex);
const MotionLinkChakra = motion(Link);
const MotionButtonChakra = motion(Button);
const MotionIconButton = motion(IconButton);
const MotionVStack = motion(VStack);

// Define animation variants
const navLinkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Determine colors based on color mode
  const bgColor = useColorModeValue(
    "rgba(243, 238, 225, 0.1)", // Light mode
    "rgba(0, 0, 0, 0.6)" // Dark mode
  );

  const linkColor = useColorModeValue("blue.900", "blue.200");
  const linkHoverColor = useColorModeValue("#ff9966", "#ffad80");
  const buttonColorScheme = "orange";

  // Define mobile menu background color
  const mobileMenuBg = useColorModeValue(
    "rgba(255, 204, 153, 0.15)", // Light mode
    "rgba(0, 0, 0, 0.15)" // Dark mode
  );

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      width={{ base: "100%", sm: "95%", md: "94.5%" }} // Responsive width
      mx="auto"
      zIndex="10"
      py={{ base: 3, md: 4, lg: 6 }} // Responsive vertical padding
      px={{ base: 4, md: 6, lg: 10 }} // Responsive horizontal padding
      background={bgColor} // Slight transparent desert color
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      borderRadius={{ base: "0", md: "0 0 10px 10px" }} // Rounded corners on larger screens
      backdropFilter="blur(10px)"
    >
      <MotionFlex
        maxW="container.xl"
        mx="auto"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <MotionFlex
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          display="flex"
          alignItems="center"
        >
          <Box
            width={{ base: "40px", md: "70px", lg: "80px" }} // Responsive logo size
            height={{ base: "40px", md: "50px", lg: "80px" }} // Ensure equal width and height
            overflow="hidden"
            mr={4}
          >
            <Image
              src={boneLogo} // Use imported image here
              alt="Paws &amp; Relax Logo"
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="full" // Keep image circular
            />
          </Box>
          <Box
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // Responsive font size
            color="blue.900"
            lineHeight="1.2" // Adjust line height for better text appearance
          >
            Paws &amp; Relax
          </Box>
        </MotionFlex>

        <Spacer />

        {/* Desktop Navigation */}
        {!isMobile && (
          <MotionFlex
            as="nav"
            align="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {["Home", "About Us", "Services", "Contact", "Testimonials"].map(
              (link, index) => (
                <MotionLinkChakra
                  key={link}
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  mr={{ base: 2, md: 4, lg: 6 }} // Responsive right margin
                  color={linkColor}
                  fontWeight="bold"
                  p={{ base: 2, md: 3, lg: 4 }} // Responsive padding
                  textDecoration="none" // Remove underline
                  _hover={{ textDecoration: "none" }} // Ensure no underline on hover
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navLinkVariants}
                  whileHover={{
                    color: linkHoverColor,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  textAlign="center"
                  fontSize={{ base: "sm", md: "md", lg: "lg" }} // Responsive font size
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </MotionLinkChakra>
              )
            )}
            <MotionButtonChakra
              colorScheme={buttonColorScheme}
              ml={{ base: 2, md: 4, lg: 6 }} // Responsive left margin
              size={{ base: "sm", md: "md", lg: "lg" }} // Responsive button size
              fontSize={{ base: "sm", md: "md", lg: "lg" }} // Responsive font size
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (window.location.href = "#booking")} // Update the path as needed
              aria-label="Book Now"
            >
              Book Now
            </MotionButtonChakra>
          </MotionFlex>
        )}

        {/* Mobile Navigation: Hamburger Menu */}
        {isMobile && (
          <MotionIconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            aria-label="Toggle Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            size={{ base: "md", md: "lg" }} // Responsive icon size
            fontSize={{ base: "lg", md: "xl" }} // Responsive font size
          />
        )}
      </MotionFlex>

      {/* Mobile Navigation Menu */}
      <Collapse in={isOpen} animateOpacity>
        {isMobile && (
          <MotionVStack
            mt={2} // Adjust top margin as needed
            p={{ base: 4, md: 6 }} // Responsive padding
            bg={mobileMenuBg} // Use the pre-defined variable
            spacing={{ base: 4, md: 6 }} // Increased spacing for better readability
            align="center"
            display={{ md: "none" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {["Home", "About Us", "Services", "Contact", "Testimonials"].map(
              (link, index) => (
                <MotionLinkChakra
                  key={link}
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  width="100%"
                  color="blue.900"
                  fontWeight="bold"
                  p={{ base: 2, md: 3 }} // Increased padding for better spacing
                  textAlign="center"
                  textDecoration="none" // Remove underline
                  _hover={{ textDecoration: "none" }} // Ensure no underline on hover
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navLinkVariants}
                  whileHover={{
                    color: linkHoverColor,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  fontSize={{ base: "md", md: "lg" }} // Responsive font size
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </MotionLinkChakra>
              )
            )}
            <MotionButtonChakra
              colorScheme={buttonColorScheme}
              size={{ base: "sm", md: "md", lg: "lg" }} // Responsive button size
              fontSize={{ base: "sm", md: "md", lg: "lg" }} // Responsive font size
              width="100%"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (window.location.href = "#booking")} // Update the path as needed
              aria-label="Book Now"
            >
              Book Now
            </MotionButtonChakra>
          </MotionVStack>
        )}
      </Collapse>
    </Box>
  );
};

export default Header;
