import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { isMobile } from 'react-device-detect';
import ProgressWheel from './charts/progressWheel';
import { SimpleGrid, Grid, GridItem, Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import SecurityDataBlock from './components/securityDataBlock';
import {
  ConnectedScatterData,
  doughnutBarData,
  cs_d_block_data,
  doughnutLineData,
} from './chartData';

function App() {
  console.log(doughnutBarData[0].bData);
  return (
    <>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={10}
        px={[8, 20]}
      >
        <GridItem colSpan={1}>
          <ChartBlock {...doughnutLineData[0]} />
        </GridItem>

        <GridItem colSpan={[1, 2]}>
          <ChartBlock {...doughnutLineData[1]} csWidth={isMobile ? 250 : 500} />
        </GridItem>
      </Grid>
      <SimpleGrid columns={[1, 1, 1, 2]} p={['8', 20]} spacing={[10, 10]}>
        {[0, 1].map((el) => (
          <ChartBlock key={el} {...doughnutBarData[el]} />
        ))}
      </SimpleGrid>
      <Flex px={[8, 20]}>
        <SecurityDataBlock />
      </Flex>
      <SimpleGrid columns={[1, 1, 1, 2]} p={['8', 20]} spacing={[10, 10]}>
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
              middleText={true}
            />
          ))}
      </SimpleGrid>
    </>
  );
}

export default App;
