import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import ConnectedScatter from './charts/connectedScatter';
import DoughnutChart from './charts/doughnutChart';
import Test from './charts/test';
import ProgressWheel from './charts/progressWheel';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import SecurityDataBlock from './components/securityDataBlock';
import {
  ConnectedScatterData,
  doughnutBarData,
  cs_d_block_data,
} from './chartData';

function App() {
  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2]} p={['8', 20]} spacing={[10, 10]}>
        {[0, 1].map((el) => (
          <ChartBlock
            heading={doughnutBarData[el].heading}
            bottomText={doughnutBarData[el].bottomText}
            data={doughnutBarData[el].dData}
            barData={doughnutBarData[el].bData}
            text={doughnutBarData[el].texts}
            colors={doughnutBarData[el].colors}
            barchart={true}
            doughnutChart={true}
            key={el}
          />
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
              data={el.dData}
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
