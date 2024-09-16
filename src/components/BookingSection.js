import React from 'react';
import { Box, VStack, Heading, Text, Button, SimpleGrid, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const BookingSection = () => {
  return (
    <Box
      as="section"
      py={10}
      backgroundImage="url('Booking BG.webp')" // Background image
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative" // To place the transparent overlay over the background image
    >
      {/* Transparent overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="rgba(255, 255, 255, 0.2)" // Slightly transparent white overlay
        zIndex={1} // Ensure the content stays above this layer
      />

      {/* Content */}
      <VStack spacing={6} align="stretch" maxW="container.md" mx="auto" zIndex={2} position="relative">
        {/* Main Heading */}
        <Heading as="h2" size="xl" textAlign="center">
          Get in Touch
        </Heading>

        {/* Subheading */}
        <Text textAlign="center" fontSize="lg">
          Schedule a visit today and give your pets the loving care they deserve! Feel free to text or call us for bookings.
        </Text>

        {/* Phone, Email, and Social Media */}
        <VStack spacing={4} textAlign="center">
          {/* Phone */}
          <Text fontSize="lg">
            <Text as="span" fontWeight="bold">Phone:</Text> (555) 123-4567
          </Text>

          {/* Email */}
          <Text fontSize="lg">
            <Text as="span" fontWeight="bold">Email:</Text> info@pawsandcare.com
          </Text>

          {/* Call to Action Button */}
          <Button colorScheme="blue" size="lg" width="full" onClick={() => window.location.href = 'tel:5551234567'}>
            Call Now
          </Button>

          {/* Social Media */}
          <Text fontWeight="bold" mt={4}>Follow Us:</Text>
          <SimpleGrid columns={3} spacing={4} justifyContent="center">
            <Link href="#" isExternal><FaFacebook size={36} /></Link>
            <Link href="#" isExternal><FaInstagram size={36} /></Link>
          </SimpleGrid>
        </VStack>

      </VStack>
    </Box>
  );
};

export default BookingSection;
