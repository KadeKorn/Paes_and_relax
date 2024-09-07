import React from 'react';
import { Box, Heading, Text, Image, Container } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box
      as="section"
      py={1}
      backgroundImage="url('/About BG.webp')" // Add your image path
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="container.xl">
        <Box
          bg="rgba(255, 255, 255, 0.125)" // Semi-transparent white background for readability
          p={8}
          borderRadius="lg"
          color="black"  // Ensure text remains black
        >
          <Heading as="h2" size="xl" textAlign="center" mb={8} color="black">
            About Paws & Relax
          </Heading>

          <Box>
            {/* Wrapping Image */}
            <Image
              src="/IMG_6951.jpg"
              alt="Founder of Paws & Relax"
              borderRadius="full"
              boxSize="300px"
              float="left"
              mr={6}
              mb={4}
            />

            {/* First Paragraph */}
            <Text fontSize="lg" fontWeight="medium">
              Paws & Relax was born out of my passion for animals and my desire to create a service that truly understands the needs of busy Arizonans. My name is Kade Korn, and as an ASU grad working remotely in technology, I understand the importance of finding trustworthy, compassionate care for your pets while you’re away.
            </Text>

            {/* Second Paragraph */}
            <Text fontSize="lg" mt={4} fontWeight="medium">
              Growing up in Arizona, I’ve always had a deep connection with this community, and I know firsthand how much we Arizonans value our pets as part of the family. Working remotely allows me the flexibility to offer my full attention to caring for your pets, giving them the love and care they deserve.
            </Text>

            {/* Third Paragraph */}
            <Text fontSize="lg" mt={4} fontWeight="medium">
              Whether you're traveling, working long hours, or just need a helping hand, I’m here to make sure your pets are safe, happy, and well taken care of. This isn’t just a job for me—it’s something I love to do. From one Arizonan to another, I look forward to helping your furry friends relax while you’re away.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
