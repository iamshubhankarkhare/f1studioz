import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import BarChart from './charts/barChart';
import ConnectedScatter from './charts/connectedScatter';
import DoughnutChart from './charts/doughnutChart';
import Test from './charts/test';
import ProgressWheel from './charts/progressWheel';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import SecurityDataBlock from './components/securityDataBlock';
import { ConnectedScatterData, cs_d_block_data } from './chartData';

const datas = [
  [10, 30, 40],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];
function App() {
  return (
    <>
      <Flex px={[8, 20]}>
        <SecurityDataBlock />
      </Flex>
      <SimpleGrid columns={[1, 2]} p={['8', 20]} spacing={[10, 10]}>
        {cs_d_block_data.map((el, i) => (
          <ChartBlock
            key={i}
            heading={el.heading}
            bottomText={el.bottomText}
            data={el.dData}
            ConnectedScatterData={el.csData}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default App;
