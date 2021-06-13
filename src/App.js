import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import BarChart from './charts/barChart';
import ConnectedScatter from './charts/connectedScatter';
import DoughnutChart from './charts/doughnutChart';
import Test from './charts/test';
import ProgressWheel from './charts/progressWheel';
import { Flex } from '@chakra-ui/react';
import ChartBlock from './components/chartBlock';
import { ConnectedScatterData } from './chartData';

const datas = [
  [10, 30, 40],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];

function App() {
  console.log(ConnectedScatterData.cs1);
  return (
    <Flex justify="space-around">
      <ChartBlock
        data={datas[2]}
        ConnectedScatterData={ConnectedScatterData.cs1}
      />
      <ChartBlock
        data={datas[0]}
        ConnectedScatterData={ConnectedScatterData.cs2}
      />
    </Flex>
  );
}

export default App;
