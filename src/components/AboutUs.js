import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Import Framer Motion
import aboutBG from '../assets/About_BG.webp';  
import founderImg from '../assets/IMG_6951.jpg';

// Create motion-enabled Chakra components
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const AboutUs = () => {
  // Determine overlay color based on color mode for better readability
  const sectionOverlayBg = useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.5)');

  // Determine text color based on color mode
  const textColor = useColorModeValue('gray.800', 'gray.100');

  // Determine text shadow based on color mode for better readability
  const textShadow = useColorModeValue(
    '2px 2px 4px rgba(255, 255, 255, 0.3)',
    '2px 2px 4px rgba(0, 0, 0, 0.3)'
  );

  return (
    <Box
      as="section"
      py={10}
      backgroundImage={`url(${aboutBG})`} // Use imported background image
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"  // Ensures it covers the viewport
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
        bg: sectionOverlayBg, // Semi-transparent overlay
        zIndex: 0,
      }}
    >
      {/* Content Box with Semi-Transparent Background */}
      <Box
        bg={useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.5)')} // Semi-transparent background
        p={{ base: 6, md: 12 }}
        borderRadius="lg"
        boxShadow="xl"
        backdropFilter="blur(10px)" // Adds blur effect
        zIndex={1}
        maxW="container.md"
        width="100%"
      >
        <VStack spacing={8} align="center">
          {/* Main Heading with Animation */}
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              color={useColorModeValue('gray.800', 'gray.100')}
              textShadow={textShadow}
              fontFamily="heading" // Ensure this matches your theme
            >
              About Paws & Relax
            </Heading>
          </MotionBox>

          {/* Founder Image with Animation and Hover Effect */}
          <MotionImage
            src={founderImg}  // Use imported founder image
            alt="Founder of Paws & Relax"
            borderRadius="full"
            boxSize={{ base: '150px', md: '200px', lg: '250px' }} // Responsive sizes
            mx="auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            cursor="pointer"
          />

          {/* About Text with Animation */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            textAlign="center"
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="medium"
              color={textColor}
              mb={4}
            >
              Paws & Relax was born out of my passion for animals and my desire to create a service that truly understands the needs of busy Arizonans. My name is Kade Korn, and as an ASU grad working remotely in technology, I understand the importance of finding trustworthy, compassionate care for your pets while you're away.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="medium"
              color={textColor}
              mb={4}
            >
              Growing up in Arizona, I've always had a deep connection with this community, and I know firsthand how much we Arizonans value our pets as part of the family. Working remotely allows me the flexibility to offer my full attention to caring for your pets, giving them the love and care they deserve.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="medium"
              color={textColor}
            >
              Whether you're traveling, working long hours, or just need a helping hand, I'm here to make sure your pets are safe, happy, and well taken care of. This isn't just a job for me—it's something I love to do. From one Arizonan to another, I look forward to helping your furry friends relax while you're away.
            </Text>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutUs;
