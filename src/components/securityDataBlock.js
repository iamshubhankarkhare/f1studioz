import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { securitylockData } from '../chartData';

function SecurityDataBlock() {
  return (
    <Flex
      direction={['row', 'row']}
      flexWrap="wrap"
      align="center"
      justify="space-around"
      border="1px solid black"
      borderColor="#D8D8D8"
      width="100%"
      py={[4, 8]}
    >
      {securitylockData.map((text, i) => (
        <Flex key={i} p="2" justify="center" align="center">
          <Flex direction="column" align="center" justify="center">
            {text.upper === '|' ? (
              <Box
                display={['none', 'block']}
                width="1px"
                height="12"
                bg="#979797"
                my="4"
              ></Box>
            ) : (
              <>
                <Text color="#2C2D2D" fontSize={['xl', '2xl']} fontWeight="700">
                  {text.upper}
                </Text>
                <Text color="#646464" fontSize={['md', '2xl']} fontWeight="400">
                  {text.lower}
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default SecurityDataBlock;
