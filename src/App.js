import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage';

const App = () => {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;

