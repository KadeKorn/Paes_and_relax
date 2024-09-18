import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import BookingSection from './components/BookingSection';
import TestimonialsPage from './components/TestimonialsPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh"> 
        <Header />
        <VStack spacing={0} align="stretch">
          <Box id="home">
            <HomePage />
          </Box>
          <Box id="aboutus">
            <AboutUs />
          </Box>
          <Box id="services">
            <ServicesPage />
          </Box>
          <Box id="contact">
            <BookingSection />
          </Box>
          <Box id="testimonials">
            <TestimonialsPage />
          </Box>
        </VStack>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
