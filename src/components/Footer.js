import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaYelp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

// Create motion-enabled Chakra components
const MotionLink = motion(Link);
const MotionIconButtonChakra = motion(IconButton);

// Define animation variants for links
const linkVariants = {
  hover: {
    color: '#ff9966', // Slightly darker and more visible hover color
    scale: 1.1, // Slightly bigger scale effect
    transition: { type: 'spring', stiffness: 300 },
  },
};

// Define animation variants for IconButtons
const iconButtonVariants = {
  hover: {
    color: '#ff9966',
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: {
    scale: 0.9,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Footer = () => {
  // Determine background color based on color mode
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  // Determine text color based on color mode
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      as="footer"
      py={{ base: 6, md: 8, lg: 10 }} // Responsive padding
      position="relative"
      zIndex={1}
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 6, lg: 8 }}
          justify="space-between"
          align="center"
        >
          {/* Navigation Links */}
          <Stack direction="row" spacing={{ base: 2, md: 4, lg: 6 }}>
            {['Home', 'About Us', 'Services', 'Contact', 'Testimonials'].map((link) => (
              <MotionLink
                key={link}
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }} // Responsive font size
                _hover={{ textDecoration: 'none' }}
                variants={linkVariants}
                whileHover="hover"
                aria-label={`Navigate to ${link}`}
              >
                {link}
              </MotionLink>
            ))}
          </Stack>

          {/* Copyright */}
          <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}>
            © 2024 Paws & Relax. All rights reserved.
          </Text>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={{ base: 2, md: 4, lg: 6 }}>
            <MotionIconButtonChakra
              as="a"
              href="https://www.yelp.com" // Replace with your Yelp URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              icon={<FaYelp />}
              variant="ghost"
              size="lg"
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }} // Responsive icon size
              rounded="full"
              variants={iconButtonVariants}
              whileHover="hover"
              whileTap="tap"
            />
            <MotionIconButtonChakra
              as="a"
              href="https://www.instagram.com" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              size="lg"
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }} // Responsive icon size
              rounded="full"
              variants={iconButtonVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
