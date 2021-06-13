import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import DoughnutChart from '../charts/doughnutChart';
import ConnectedScatter from '../charts/connectedScatter';

function ChartBlock(props) {
  console.log(props.ConnectedScatterData);
  console.log(props);
  return (
    <Flex flexDirection="column" bg="white">
      <Text color="#2C2D2D" fontSize="2xl" fontWeight="700">
        Heading
      </Text>
      <Flex align="center">
        <DoughnutChart
          data={props.data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={80}
        />
        {props.ConnectedScatterData && (
          <ConnectedScatter
            data={props.ConnectedScatterData}
            width={250}
            height={200}
          />
        )}
      </Flex>
      <hr />
      <Text color="#006BD4">bottom</Text>
    </Flex>
  );
}

export default ChartBlock;
