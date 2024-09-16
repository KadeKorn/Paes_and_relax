import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton } from '@chakra-ui/react';
import { FaYelp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" as="footer" py={10}>
      <Container maxW="container.xl">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center">
          <Stack direction="row" spacing={6}>
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#booking">Contact</Link>
            <Link href="#testimonials">Testimonials</Link>
          </Stack>
          <Text>© 2024 Paws & Relax. All rights reserved.</Text>
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="Yelp" icon={<FaYelp />} rounded="full" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} rounded="full" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
