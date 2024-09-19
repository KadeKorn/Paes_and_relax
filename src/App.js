import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
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
      <Box minHeight="100vh" overflow="hidden">
        <Header />
        {/* Scroll Container */}
        <Box
          as="main"
          height="100vh"
          overflowY="scroll"
          scrollSnapType="y mandatory"
          scrollBehavior="smooth"
        >
          {/* Sections */}
          <Box id="home" scrollSnapAlign="start">
            <HomePage />
          </Box>
          <Box id="aboutus" scrollSnapAlign="start">
            <AboutUs />
          </Box>
          <Box id="services" scrollSnapAlign="start">
            <ServicesPage />
          </Box>
          <Box id="contact" scrollSnapAlign="start">
            <BookingSection />
          </Box>
          <Box id="testimonials" scrollSnapAlign="start">
            <TestimonialsPage />
          </Box>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
