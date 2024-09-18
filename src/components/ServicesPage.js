import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Container,
  useColorModeValue,
  //Image, // Import Image if you plan to add images
  //Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import Framer Motion
import servicesBG from "../assets/Services_BG.webp"; // Import the background image

// Create motion-enabled Chakra components
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionButtonComponent = motion(Button);

// Sample services array (add more services as needed)
const services = [
  {
    name: "Pet Sitting (Cats, Dogs, and More)",
    description:
      "Your pets—whether cats, dogs, or other furry friends—will enjoy personalized, in-home care tailored to their needs. From daily walks and playtime for dogs to cozy cuddles and feeding for cats, I make sure your pets feel comfortable, safe, and loved while you're away.",
    price:
      "Rates vary based on the level of care—contact me for a personalized quote.",
    // image: 'path_to_image', // Uncomment and add image path if available
  },
  {
    name: "Overnight Sitting",
    description:
      "Full overnight care for your home and pets. I'll stay with your furry friend to provide companionship, nighttime walks, feedings, and ensure your home stays secure while you're away.",
    price: "$60–$80 per night",
    // image: 'path_to_image', // Uncomment and add image path if available
  },
  // Add more services here
];

const ServicesPage = () => {
  // Determine overlay color based on color mode for better readability
  const overlayBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.1)"
  );

  // Determine text color based on color mode
  const textColor = useColorModeValue("gray.800", "gray.100");

  // Determine card background based on color mode
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.6)"
  );

  return (
    <Box
      as="section"
      py={10}
      backgroundImage={`url(${servicesBG})`} // Use imported image here
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
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: overlayBg, // Maintain existing overlay background
        zIndex: 0,
      }}
    >
      {/* Content Container with Semi-Transparent Background */}
      <Container maxW="container.lg" zIndex={1}>
        <Box
          bg={overlayBg} // Semi-transparent background for content
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          backdropFilter="blur(5px)" // Adds a subtle blur effect to enhance readability
        >
          <VStack spacing={8} align="center">
            {/* Main Heading with Animation */}
            <MotionBox
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading
                as="h1"
                size="2xl"
                textAlign="center"
                color={textColor}
                fontFamily="heading" // Ensure this matches your theme
              >
                Our Services
              </Heading>
            </MotionBox>

            {/* Subheading with Animation */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Text fontSize="xl" textAlign="center" color={textColor}>
                We offer a range of pet care services to suit your needs.
              </Text>
            </MotionBox>

            {/* Services Grid with Animations */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
              {services.map((service, index) => (
                <MotionCard
                  key={index}
                  bg={cardBg} // Semi-transparent background for cards
                  boxShadow="md"
                  borderRadius="md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02, boxShadow: "xl" }}
                  whileTap={{ scale: 0.98, boxShadow: "md" }}
                >
                  <CardHeader>
                    <Heading size="md" textAlign="center" color={textColor}>
                      {service.name}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="center" color={textColor}>
                      {service.description}
                    </Text>
                    {/* If you have images, you can add them here */}
                    {/* 
                    <Image
                      src={service.image}
                      alt={service.name}
                      mx="auto" // Centers the image horizontally
                      mt={4}
                      borderRadius="md"
                      boxSize="150px"
                      objectFit="cover"
                    />
                    */}
                  </CardBody>
                  <CardFooter>
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      width="100%"
                      color={textColor}
                    >
                      {service.price}
                    </Text>
                  </CardFooter>
                </MotionCard>
              ))}
            </SimpleGrid>

            {/* Call-to-Action Button with Animation */}
            <MotionButtonComponent
              colorScheme="blue"
              size="lg"
              onClick={() => (window.location.href = "/booking")} // Update the path as needed
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Book a Service"
            >
              Book a Service
            </MotionButtonComponent>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
