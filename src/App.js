import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
import BarChart from './charts/barChart';
import ConnectedScatter from './charts/connectedScatter';
import DoughnutChart from './charts/doughnutChart';
import Test from './charts/test';
import ProgressWheel from './charts/progressWheel';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];
const ConnectedScatterData = [
  {
    name: 'Regular',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-08-05', count: '50' },
    ],
  },
];

function App() {

  return (
    <div className="App">
      <h2>Graphs with React</h2>
      <BarChart width={200} height={200} data={datas[2]} />
      <DoughnutChart
        data={datas[2]}
        width={300}
        height={300}
        innerRadius={80}
        outerRadius={100}
      />
      <ConnectedScatter data={ConnectedScatterData} />
      {/* <Test /> */}
      <ProgressWheel radius="80" />
    </div>
  );
}

export default App;
