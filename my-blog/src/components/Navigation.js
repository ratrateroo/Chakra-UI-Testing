import React from 'react';
import { Flex, Box, HStack, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex>
        <HStack>
          <Link to="/login" style={{ padding: 5 }}>
            Log In
          </Link>
          <Link to="/signup" style={{ padding: 5 }}>
            Sign Up
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
