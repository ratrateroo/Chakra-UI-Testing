import React from 'react';
import {
    
  Box,
  Text,
  VStack,
   
  Grid,
  theme,
} from '@chakra-ui/react';
 


const Navigation = () => {
  return (
     
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
           
          <VStack spacing={8}>
            
            <Text>
              Edit  and save to reload.
            </Text>
         
          </VStack>
        </Grid>
      </Box>
    
  );
}

export default Navigation;
