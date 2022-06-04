import React from 'react';
import {
  Flex,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  Button,
  Link,
} from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex>
        <HStack>
          <Link>Log In</Link>
          <Link>Sign Up</Link>
        </HStack>
      </Flex>
      <Grid minH="100vh" p={3}></Grid>
    </Box>
  );
};

export default Navigation;
