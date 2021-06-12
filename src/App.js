import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
import BarChart from './charts/barChart';
import ConnectedScatter from './charts/connectedScatter';
import DoughnutChart from './charts/doughnutChart';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];
var i = 0;

const data2 = [
  {
    date: '1-May-12',
    close: 58.13,
  },
  {
    date: '30-Apr-12',
    close: 53.98,
  },
  {
    date: '27-Apr-12',
    close: 67,
  },
  {
    date: '26-Apr-12',
    close: 89.7,
  },
  {
    date: '25-Apr-12',
    close: 99,
  },
  {
    date: '18-Apr-12',
    close: 443.34,
  },
  {
    date: '17-Apr-12',
    close: 543.7,
  },
  {
    date: '16-Apr-12',
    close: 580.13,
  },
  {
    date: '13-Apr-12',
    close: 605.23,
  },
  {
    date: '30-Mar-12',
    close: 599.55,
  },
  {
    date: '29-Mar-12',
    close: 609.86,
  },
  {
    date: '28-Mar-12',
    close: 617.62,
  },
  {
    date: '27-Mar-12',
    close: 614.48,
  },
  {
    date: '26-Mar-12',
    close: 606.98,
  },
];

function App() {
  const [data, setData] = useState([]);

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
      <ConnectedScatter data={data2} />
    </div>
  );
}

export default App;
