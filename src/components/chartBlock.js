import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import DoughnutChart from '../charts/doughnutChart';
import ConnectedScatter from '../charts/connectedScatter';
import BarChart from '../charts/barChart';

function ChartBlock(props) {
  const colors = props.colors || ['#FF453C', '#FFBD35', '#13ABDC'];
  const texts = props.text || ['Critical', 'Medium', 'High'];

  return (
    <Flex
      flexDirection="column"
      bg="white"
      p="4"
      border="1px solid black"
      width={['', '100%']}
    >
      <Text color="#2C2D2D" fontSize="2xl" fontWeight="700">
        {props.heading}
      </Text>
      <Flex
        align="center"
        direction={['column', 'row']}
        justify="space-around"
        py="4"
      >
        {props.doughnutChart && (
          <DoughnutChart
            colors={colors}
            data={props.data}
            width={200}
            height={200}
            innerRadius={65}
            outerRadius={80}
            middleText={props.middleText}
          />
        )}
        {props.barchart && (
          <BarChart width={200} height={200} data={props.barData} />
        )}
        {props.connectedScatter && props.ConnectedScatterData && (
          <ConnectedScatter
            data={props.ConnectedScatterData}
            width={250}
            height={200}
          />
        )}
      </Flex>
      <Flex align="center" my="4" flexWrap="wrap">
        {texts.map((el, i) => (
          <Flex key={i}>
            <Box
              bg={colors[i]}
              width="15px"
              height="15px"
              mx="10px"
              borderRadius="50%"
            />
            <Text mr="4">{el}</Text>
          </Flex>
        ))}
      </Flex>
      <hr />
      <Text color="#006BD4" my="4">
        {props.bottomText}
      </Text>
    </Flex>
  );
}

export default ChartBlock;
