import React from 'react';
import {
    FormControl,FormLabel,Input,FormHelperText,
  Box,
   
} from '@chakra-ui/react';
 


const LogIn = () => {
  return (
     
      <Box textAlign="center" fontSize="xl">
     <FormControl>
  <FormLabel htmlFor='email'>Email address</FormLabel>
  <Input id='email' type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
      </Box>
    
  );
}

export default LogIn;
