import React from 'react';
import { Box, VStack, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of pet care services including dog walking, pet sitting, overnight stays, and pet taxi services."
    },
    {
      question: "How long are your typical pet sitting visits?",
      answer: "Our standard pet sitting visits are 30 minutes, but we can accommodate longer visits upon request."
    },
    {
      question: "Do you offer services on weekends and holidays?",
      answer: "Yes, we provide our services 7 days a week, including holidays, to ensure your pets are always taken care of."
    },
    {
      question: "Are your pet sitters insured and bonded?",
      answer: "Yes, all our pet sitters are fully insured and bonded for your peace of mind."
    },
    {
      question: "How do I book a service?",
      answer: "You can book a service through our website's booking section or by calling our customer service line."
    }
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Frequently Asked Questions
      </Heading>
      <VStack spacing={4} align="stretch">
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold">{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default FAQPage;
