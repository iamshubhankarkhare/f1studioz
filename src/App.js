import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { SimpleGrid, Text, Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import SecurityDataBlock from './components/securityDataBlock';
import InfoBar from './components/infoBar';
import GridCharts from './components/gridCharts';
import HBarChart from './charts/horizontalBar';
import {
  barLineData,
  doughnutBarData,
  cs_d_block_data,
  doughnutLineData,
} from './chartData';

function App() {
  return (
    <Flex m={[4, 12]} direction="column">
      <HBarChart height={200} width={200} data={[10, 20, 30, 20]} />
      <Flex align="center" justify="space-between" px={[8, 20]} my="4">
        <Text fontSize={['lg', '2xl']} fontWeight="700">
          Hello David!
        </Text>
        <Text fontSize={['sm', 'lg']} color="#646464" fontWeight="400">
          Last updated on :23.2.20
        </Text>
      </Flex>
      <InfoBar />
      <GridCharts cData={doughnutLineData} />
      <SimpleGrid columns={[1, 1, 1, 2]} px={['8', 20]} spacing={[10, 10]}>
        {[0, 1].map((el) => (
          <ChartBlock key={el} {...doughnutBarData[el]} />
        ))}
      </SimpleGrid>
      <GridCharts cData={barLineData} />
      <Flex px={[8, 20]}>
        <SecurityDataBlock />
      </Flex>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        px={['8', 20]}
        spacing={[10, 10]}
        my={[4, 12]}
      >
        {cs_d_block_data &&
          cs_d_block_data.map((el, i) => (
            <ChartBlock
              key={i}
              heading={el.heading}
              bottomText={el.bottomText}
              doughnutData={el.dData}
              ConnectedScatterData={el.csData}
              connectedScatter={true}
              doughnutChart={true}
            />
          ))}
      </SimpleGrid>
    </Flex>
  );
}

export default App;
