import React from 'react';
import { Box, Heading, Text, Image, VStack, Container } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box as="section" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center">
            About Paws & Care
          </Heading>

          <Text fontSize="lg">
            At Paws & Care, we understand that your pets are more than just animals – they're family.
            Our mission is to provide loving, attentive care for your furry friends when you can't be there.
            Founded in 2010, we've been serving our local community with passion and dedication, ensuring
            that every pet receives the individual attention they deserve.
          </Text>

          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Meet Our Founder
            </Heading>
            <Image
              src="/founder-image.jpg"
              alt="Founder of Paws & Care"
              borderRadius="md"
              float="left"
              mr={6}
              mb={4}
              maxW="200px"
            />
            <Text fontSize="md">
              Jane Doe, the founder of Paws & Care, has been an animal lover all her life.
              With over 15 years of experience in pet care and a degree in Animal Behavior,
              Jane started Paws & Care to combine her passion with her expertise. Her goal
              is to create a service that pet owners can trust completely, knowing their
              beloved companions are in the best hands possible when they're away.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUs;
