import React from 'react';
import { Box, VStack, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Link, SimpleGrid } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Box as="section" py={10}>
      <VStack spacing={8} align="stretch" maxW="container.xl" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center">Contact Us</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" />
              </FormControl>
              <Button colorScheme="blue" type="submit">Send Message</Button>
            </VStack>
          </Box>

          <Box>
            <VStack spacing={4} align="stretch">
              <Text fontWeight="bold">Business Email:</Text>
              <Text>info@pawsandcare.com</Text>

              <Text fontWeight="bold">Phone Number:</Text>
              <Text>(555) 123-4567</Text>

              <Text fontWeight="bold">Follow Us:</Text>
              <SimpleGrid columns={3} spacing={4}>
                <Link href="#" isExternal><FaFacebook size={24} /></Link>
                <Link href="#" isExternal><FaTwitter size={24} /></Link>
                <Link href="#" isExternal><FaInstagram size={24} /></Link>
              </SimpleGrid>

              <Text fontWeight="bold">Our Service Area:</Text>
              <Box h="300px" bg="gray.200">
                {/* Replace this Box with an actual Google Map component */}
                <Text textAlign="center" pt={8}>Google Map will be embedded here</Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ContactPage;
