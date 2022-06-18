import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Link, Outlet, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Box textAlign="center" fontSize="xl">
        <Navigation />
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Outlet />
      </Box>
    </ChakraProvider>
  );
};

export default App;
