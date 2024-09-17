import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Import Framer Motion
import dayBackground from '../assets/Day_background.png'; // Adjust the path based on your file structure

// Create motion-enabled Chakra components
const MotionBox = motion(Box);

const HomePage = () => {
  // Determine overlay color based on color mode for better readability
  const sectionOverlayBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.5)');

  // Determine text color based on color mode
  const textColor = useColorModeValue('blue.900', 'blue.200');

  // Determine text shadow based on color mode for better readability
  const textShadow = useColorModeValue(
    '1px 1px 2px rgba(255, 255, 255, 0.7)',
    '1px 1px 2px rgba(0, 0, 0, 0.7)'
  );

  return (
    <Box
      as="section"
      id="home"
      pt={0}
      mt="0"
      backgroundImage={`url(${dayBackground})`} // Use imported image here
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
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
        bg: 'rgba(0, 0, 0, 0.1)', // Dark overlay to enhance text readability
        zIndex: 0,
      }}
    >
      {/* Content Container with Semi-Transparent Background */}
      <Container maxW="container.md" zIndex={1}>
        <MotionBox
          bg={sectionOverlayBg} // Semi-transparent background for content
          p={{ base: 6, md: 12 }}
          borderRadius="lg"
          boxShadow="xl"
          backdropFilter="blur(5px)" // Adds a subtle blur effect to enhance readability
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <VStack spacing={6} align="center">
            {/* Main Heading with Animation */}
            <MotionBox
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Heading
                as="h1"
                size={{ base: 'xl', md: '2xl' }} // Reduced font sizes for smaller text
                textAlign="center"
                color={textColor}
                textShadow={textShadow}
                fontFamily="heading" // Ensure this matches your theme
              >
                Paws & Relax
              </Heading>
            </MotionBox>

            {/* Subheading with Animation */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }} // Reduced font sizes for smaller text
                textAlign="center"
                color={textColor}
                textShadow={textShadow}
              >
                Worried about leaving your furry friends? Don't be.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }} // Reduced font sizes for smaller text
                textAlign="center"
                color={textColor}
                textShadow={textShadow}
              >
                At Paws & Relax, we offer more than just pet sitting—we provide peace of mind.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }} // Reduced font sizes for smaller text
                textAlign="center"
                color={textColor}
                textShadow={textShadow}
              >
                Your pets will be loved, cared for, and treated like family while you're away.
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HomePage;
