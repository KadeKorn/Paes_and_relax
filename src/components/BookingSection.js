import React from 'react';
import { Box, VStack, Heading, Text, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const BookingSection = () => {
  return (
    <Box as="section" py={10}>
      <VStack spacing={6} align="stretch" maxW="container.md" mx="auto">
        <Heading as="h2" size="xl" textAlign="center">Book Your Pet Care Service</Heading>
        <Text textAlign="center">Schedule a visit today and give your pets the loving care they deserve!</Text>

        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input placeholder="Enter your full name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email address" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Service Type</FormLabel>
              <Input placeholder="e.g., Dog Walking, Cat Sitting, etc." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Preferred Date</FormLabel>
              <Input type="date" />
            </FormControl>

            <FormControl>
              <FormLabel>Additional Information</FormLabel>
              <Textarea placeholder="Tell us more about your pet and any special requirements" />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" width="full">
              Schedule a Visit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default BookingSection;
