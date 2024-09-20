import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Link,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { FaInstagram, FaYelp } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion
import bookingBG from '../assets/Booking_BG.webp'; // Import the background image

// Create motion-enabled Chakra components
const MotionButton = motion(Button);
const MotionLink = motion(Link);
const MotionBox = motion(Box);

const BookingSection = () => {
  // Determine overlay color based on color mode for better readability
  const sectionOverlayBg = useColorModeValue('rgba(255, 69, 0, 0.1)', 'rgba(255, 69, 0, 0.1)');

  // Determine text shadow based on color mode for better readability
  const textShadow = useColorModeValue(
    '2px 2px 4px rgba(0, 0, 0, 0.3)',
    '2px 2px 4px rgba(255, 255, 255, 0.3)'
  );

  // Colors for icons based on color mode
  const iconColor = useColorModeValue('black', 'white');

  // Adjusted content box background with reduced opacity
  const contentBoxBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.5)');

  return (
    <Box
      as="section"
      py={10}
      backgroundImage={`url(${bookingBG})`} // Use imported image here
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh" // Ensures it covers the viewport
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bg: sectionOverlayBg, // Subtle overlay based on color mode
        zIndex: 0,
      }}
    >
      {/* Content Box with Reduced Opacity */}
      <Box
        bg={contentBoxBg} // Semi-transparent background for content with reduced opacity
        p={{ base: 6, md: 12 }}
        borderRadius="lg"
        boxShadow="xl"
        backdropFilter="blur(10px)" // Maintains blur effect
        zIndex={1}
        maxW="container.md"
        width="100%"
      >
        {/* Main Content Container */}
        <VStack spacing={8} align="center">
          {/* Main Heading with Animation */}
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              color={useColorModeValue('black', 'white')}
              textShadow={textShadow}
              fontFamily="heading" // Use a better font family if desired
            >
              Get in Touch
            </Heading>
          </MotionBox>

          {/* Subheading with Animation */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Text
              textAlign="center"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="semibold"
              color={useColorModeValue('black', 'white')}
              textShadow={textShadow}
            >
              Schedule a visit today and give your pets the loving care they deserve! Feel free to
              text or call us for bookings.
            </Text>
          </MotionBox>

          {/* Contact Information and Actions */}
          <VStack spacing={6} textAlign="center" width="100%">
            {/* Phone */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={useColorModeValue('black', 'white')}
                textShadow={textShadow}
              >
                <Text as="span" fontWeight="bold">
                   Phone: (651) 303-8727
                </Text>
              </Text>
            </MotionBox>

            {/* Email */}
            {/* <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={useColorModeValue('black', 'white')}
                textShadow={textShadow}
              >
                <Text as="span" fontWeight="bold">
                  Email: PawsAndRelax@outlook.com
                </Text>
              </Text>
            </MotionBox> */}

            {/* Call to Action Button with Enhanced Animation */}
            <MotionButton
              colorScheme="orange"
              size="lg"
              width="full"
              onClick={() => (window.location.href = 'tel:6513038727')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Call Now"
              color={'black'}
            >
              Call Now
            </MotionButton>

            {/* Social Media Section */}
            <VStack spacing={4} align="center">
              <Text
                fontWeight="bold"
                color={useColorModeValue('black', 'white')}
                textShadow={textShadow}
              >
                Follow Us:
              </Text>
              <SimpleGrid
                columns={{ base: 2, md: 2 }}
                spacing={4}
                justifyContent="center"
              >
                {/* Yelp Link with Tooltip and Animation */}
                <MotionLink
                  href="https://www.yelp.com" // Replace with your Yelp URL
                  isExternal
                  aria-label="Yelp"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Tooltip label="Our Yelp Page" aria-label="Yelp Tooltip">
                    <FaYelp size={36} color={iconColor} />
                  </Tooltip>
                </MotionLink>

                {/* Instagram Link with Tooltip and Animation */}
                <MotionLink
                  href="https://www.instagram.com" // Replace with your Instagram URL
                  isExternal
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Tooltip label="Our Instagram" aria-label="Instagram Tooltip">
                    <FaInstagram size={36} color={iconColor} />
                  </Tooltip>
                </MotionLink>
              </SimpleGrid>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default BookingSection;
