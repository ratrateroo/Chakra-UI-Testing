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
import { Routes, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
      <Box textAlign="center" fontSize="xl">
        <Navigation />
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
};

export default App;
