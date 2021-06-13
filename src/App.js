import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { isMobile } from 'react-device-detect';
import ProgressWheel from './charts/progressWheel';
import { SimpleGrid, Grid, GridItem, Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import SecurityDataBlock from './components/securityDataBlock';
import {
  ConnectedScatterData,
  barLineData,
  doughnutBarData,
  cs_d_block_data,
  doughnutLineData,
} from './chartData';

const GridCharts = ({ cData }) => {
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
      gap={10}
      px={[8, 20]}
      my={[4, 12]}
    >
      <GridItem colSpan={1}>
        <ChartBlock {...cData[0]} />
      </GridItem>

      <GridItem colSpan={[1, 2]}>
        <ChartBlock {...cData[1]} csWidth={isMobile ? 250 : 500} />
      </GridItem>
    </Grid>
  );
};
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
