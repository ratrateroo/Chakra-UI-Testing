import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Button,
} from '@chakra-ui/react';

const LogIn = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" type="text" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
        <FormHelperText>We'll never share your information.</FormHelperText>
      </FormControl>
      <Button colorScheme="blue">Button</Button>
    </Box>
  );
};

export default LogIn;
