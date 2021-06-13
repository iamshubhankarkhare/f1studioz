import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import ProgressWheel from '../charts/progressWheel';

function InfoBar() {
  const data1 = [
    { left: '407', right: 'Applications' },
    { left: '57', right: 'Critical ( 14% of Total )' },
    { left: '20', right: 'Warning ( 06% of Total )' },
  ];
  const data2 = ['MTTD - 25s', 'MTTA - 2m 3s', 'MTTR - 4h 36m 6s'];
  return (
    <Flex
      bg="#D6E8EA"
      mx={[8, 20]}
      p="4"
      justify="space-around"
      align="center"
      borderRadius="3px"
      flexDirection={['column', 'row']}
    >
      <Flex my={[4, 0]}>
        <ProgressWheel radius="80" />
      </Flex>
      <Box
        width={['150px', '1px']}
        height={['1px', '130px']}
        bg="#C9C9C9"
      ></Box>

      <Flex direction="column" justify="center" align="center" my={[4, 0]}>
        {data1.map((el, i) => (
          <Flex key={i} my="2">
            <Text fontSize={['xl', '2xl']} fontWeight="700">
              {el.left}
            </Text>
            <Text fontSize={['xl', '2xl']} mx="2" color="#646464">
              {el.right}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box
        width={['150px', '1px']}
        height={['1px', '130px']}
        bg="#C9C9C9"
      ></Box>

      <Flex direction="column" my={[4, 0]}>
        {data2.map((el, i) => (
          <Text fontSize={['xl', '2xl']} fontWeight="700" key={i} my="2">
            {el}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}

export default InfoBar;
