import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import BookingSection from './components/BookingSection';
import TestimonialsPage from './components/TestimonialsPage';
import './App.css'; // Ensure this is imported

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh"> {/* Ensure this Box takes up the full viewport height */}
        <Header />
        <VStack spacing={8} align="stretch" p={5}>
          <HomePage />
          <AboutUs />
          <ServicesPage />
          <BookingSection />
          <TestimonialsPage />
        </VStack>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
