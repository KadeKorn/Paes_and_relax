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
          scrollBehavior="auto" // Change to 'auto' or remove
        >
          {/* Sections */}
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
          {/* <Box id="testimonials">
            <TestimonialsPage />
          </Box> */}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
