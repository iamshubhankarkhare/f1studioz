import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function HBarChart({ width, height, data }) {
  const svgHeight = 200;
  const svgWidth = 200;
  const paddingLeft = 10;
  const paddingRight = 10;
  const paddingBottom = 20;
  const [dataSet, setData] = React.useState(data);
  const svgRef = React.useRef();

  useEffect(() => {
    const maxValue = Math.max(...data);
    const highestXValue = maxValue + maxValue / 3;
    const color = d3
      .scaleOrdinal()
      .range(['#00B59B', '#FFBE1A', '#FF453C', '#486CFB']);

    const svg = d3.select(svgRef.current);
    const yScale = d3
      .scaleBand()
      .domain(dataSet.map((element, index) => index))
      .range([svgHeight, paddingBottom])
      .padding(0.5);

    const xScale = d3
      .scaleLinear()
      .domain([0, highestXValue])
      .range([2, svgWidth - paddingRight]);

    const xAxis = d3.axisBottom(xScale).ticks(dataSet.length);

    svg
      .select('.x-axis')
      .style('transform', ` translateY(${svgHeight - paddingBottom}px)`)
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale);

    svg
      .select('.y-axis')
      .style('transform', ` translateX(${paddingLeft * 2}px)`)
      .call(yAxis);

    svg
      .selectAll('.bar')
      .data(dataSet)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', paddingBottom)
      .attr('y', (value, index) => yScale(index))
      .attr('height', yScale.bandwidth() / 2)
      .transition()
      .duration(1000)
      .attr('width', (value) => xScale(value) - paddingLeft)
      .style('fill', function (d, i) {
        return color(i);
      });
  }, [dataSet]);

  return (
    <>
      <svg width={svgWidth} height={svgHeight} ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
    </>
  );
}

export default HBarChart;
