import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function SecurityDataBlock() {
  const data = [
    { upper: '15', lower: 'Incidents' },
    {
      upper: '|',
      lower: 'Patch Implant',
    },

    { upper: '4', lower: 'Network' },
    { upper: '4', lower: 'Code' },
    { upper: '4', lower: 'Web' },
    { upper: '3', lower: 'Oss' },
    {
      upper: '|',
      lower: 'Patch Implant',
    },

    {
      upper: '2m 5s',
      lower: 'MTTD',
    },
    {
      upper: '3d4h5m',
      lower: 'MTTR',
    },
    {
      upper: '5h 30m',
      lower: 'Patch Implant',
    },
  ];
  return (
    <Flex
      direction={['row', 'row']}
      flexWrap="wrap"
      align="center"
      justify="space-around"
      border="1px solid black"
      width="100%"
      py={[4, 8]}
    >
      {data.map((text, i) => (
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
