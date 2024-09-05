import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, Card, CardBody, Image, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const TestimonialsPage = () => {
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Paws & Care took amazing care of my dog while I was on vacation. Highly recommended!', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', text: 'The team at Paws & Care is professional and caring. My cats were in great hands!', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mike Johnson', text: 'I was worried about leaving my pet, but Paws & Care put my mind at ease. Excellent service!', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Box as="section" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">What Our Clients Say</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardBody>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  borderRadius="full"
                  boxSize="100px"
                  mx="auto"
                  mb={4}
                />
                <Text fontWeight="bold" textAlign="center">{testimonial.name}</Text>
                <Text mt={2}>{testimonial.text}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Box as="form" maxWidth="600px" mx="auto" mt={10}>
          <Heading as="h3" size="lg" mb={4}>Submit Your Review</Heading>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Review</FormLabel>
              <Textarea placeholder="Share your experience with Paws & Care" />
            </FormControl>
            <Button colorScheme="blue" type="submit">Submit Review</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default TestimonialsPage;
