import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import Framer Motion
import TestBG from "../assets/TestBG.webp"; // Import the background image

// Create motion-enabled Chakra components
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Paws & Relax took amazing care of my dog while I was on vacation. Highly recommended!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "The team at Paws & Relax is professional and caring. My cats were in great hands!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Mike Johnson",
      text: "I was worried about leaving my pet, but Paws & Relax put my mind at ease. Excellent service!",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Determine overlay color based on color mode for better readability
  const sectionOverlayBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)", // Light mode
    "rgba(0, 0, 0, 0.05)" // Dark mode
  );

  // Determine text color based on color mode
  const textColor = useColorModeValue("gray.800", "gray.100");

  // Determine card background based on color mode
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.3)",
    "rgba(0, 0, 0, 0.6)"
  );

  return (
    <Box
      as="section"
      py={10}
      backgroundImage={`url(${TestBG})`} // Use imported image here
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh" // Ensures the section takes up at least full viewport height
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: sectionOverlayBg, // Semi-transparent overlay
        zIndex: 0,
      }}
    >
      {/* Content Container with Semi-Transparent Background */}
      <Container maxW="container.lg" zIndex={1}>
        <MotionBox
          bg={sectionOverlayBg} // Semi-transparent background for content
          p={{ base: 6, md: 12 }}
          borderRadius="lg"
          boxShadow="xl"
          backdropFilter="blur(5px)" // Adds a subtle blur effect to enhance readability
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <VStack spacing={8} align="stretch">
            {/* Main Heading with Animation */}
            <MotionBox
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                color="blue.900"
                textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
                fontFamily="heading" // Ensure this matches your theme
              >
                What Our Clients Say
              </Heading>
            </MotionBox>

            {/* Testimonials Grid with Animations */}
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={10}
              width="100%"
            >
              {testimonials.map((testimonial, index) => (
                <MotionCard
                  key={testimonial.id}
                  bg={cardBg} // Semi-transparent background for cards
                  borderRadius="md"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "lg" }}
                  whileTap={{ scale: 0.95, boxShadow: "md" }}
                >
                  <CardBody>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      borderRadius="full"
                      boxSize="100px"
                      mx="auto"
                      mb={4}
                      objectFit="cover"
                      loading="lazy" // Improve performance with lazy loading
                    />
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      color={textColor}
                      mb={2}
                    >
                      {testimonial.name}
                    </Text>
                    <Text textAlign="center" color={textColor}>
                      "{testimonial.text}"
                    </Text>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default TestimonialsPage;
