import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navigation from './components/Navigation';


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navigation/>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
         
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
