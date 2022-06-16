import React from 'react';
import { Flex, Box, HStack, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex>
        <HStack>
          <Link>Log In</Link>
          <Link>Sign Up</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
