import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
import BarChart from './charts/barChart';
import DoughnutChart from './charts/doughnutChart';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];
var i = 0;

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
    </div>
  );
}

export default App;
