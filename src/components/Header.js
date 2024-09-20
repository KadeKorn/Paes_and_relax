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
const MotionBox = motion(Box);
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

// Define logo shake animation
const logoVariants = {
  hover: {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.5 },
  },
};

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  // Adjusted breakpoint from md to lg
  const isMobile = useBreakpointValue({ base: true, lg: false });

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

  // Define text color for "Paws & Relax"
  const textColor = useColorModeValue("blue.900", "blue.200");

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="100%"
      mx="auto"
      zIndex="10"
      py={{ base: 2, md: 3, lg: 4 }} // Adjusted vertical padding
      px={{ base: 4, md: 6, lg: 10 }} // Responsive horizontal padding
      background={bgColor}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      borderRadius={{ base: "0", md: "0 0 10px 10px" }}
      backdropFilter="blur(10px)"
    >
      <MotionFlex
        // Made maxW responsive
        maxW={{ base: "100%", md: "container.md", lg: "container.lg", xl: "container.xl" }}
        mx="auto"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <Flex align="center">
          <MotionBox
            // Reduced logo size on smaller screens
            width={{ base: "30px", md: "60px", lg: "70px" }}
            height={{ base: "30px", md: "60px", lg: "70px" }}
            overflow="hidden"
            mr={{ base: 2, md: 4, lg: 4 }}
            variants={logoVariants}
            whileHover="hover"
          >
            <Image
              src={boneLogo}
              alt="Paws &amp; Relax Logo"
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="full"
            />
          </MotionBox>
          <MotionBox
            fontWeight="bold"
            fontSize={{ base: "sm", md: "lg", lg: "xl" }} // Adjusted font sizes
            color={textColor}
            lineHeight="1.2"
            whileHover={{
              color: linkHoverColor,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            Paws &amp; Relax
          </MotionBox>
        </Flex>

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
                  mr={{ base: 1, md: 2, lg: 4 }} // Adjusted margins
                  color={linkColor}
                  fontWeight="bold"
                  p={{ base: 1, md: 2, lg: 3 }} // Adjusted padding
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
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
                  textAlign="center"
                  fontSize={{ base: "xs", md: "sm", lg: "md" }} // Adjusted font sizes
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </MotionLinkChakra>
              )
            )}
            <MotionButtonChakra
              colorScheme={buttonColorScheme}
              ml={{ base: 1, md: 3, lg: 4 }} // Adjusted margin-left
              size={{ base: "sm", md: "sm", lg: "md" }}
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (window.location.href = "#contact")}
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
            size="md"
            fontSize="lg"
          />
        )}
      </MotionFlex>

      {/* Mobile Navigation Menu */}
      <Collapse in={isOpen} animateOpacity>
        {isMobile && (
          <MotionVStack
            mt={2}
            p={4}
            bg={mobileMenuBg}
            spacing={4}
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
                  color={linkColor}
                  fontWeight="bold"
                  p={2}
                  textAlign="center"
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
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
                  fontSize={{ base: "sm", md: "sm", lg: "md" }} // Adjusted font sizes
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </MotionLinkChakra>
              )
            )}
            <MotionButtonChakra
              colorScheme={buttonColorScheme}
              size="sm"
              fontSize="sm"
              width="100%"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (window.location.href = "#contact")}
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
