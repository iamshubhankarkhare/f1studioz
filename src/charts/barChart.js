import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarChart({ width, height, data }) {
  const svgHeight = 200;
  const svgWidth = 200;
  const paddingLeft = 10;
  const paddingRight = 10;
  const paddingBottom = 20;
  const [dataSet, setData] = React.useState(data);
  const svgRef = React.useRef();

  useEffect(() => {
    const maxValue = Math.max(...data);
    const highestYValue = maxValue + maxValue / 3;
    const svg = d3.select(svgRef.current);
    const xScale = d3
      .scaleBand()
      .domain(dataSet.map((element, index) => index))
      .range([paddingLeft, svgWidth - paddingRight])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, highestYValue])
      .range([svgHeight - paddingBottom, 2]);

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

      .attr('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(index))
      .attr('y', -svgHeight + paddingBottom)
      .attr('width', xScale.bandwidth() / 2)
      .transition()
      .duration(1000)
      .attr('fill', '#005D9D')
      .attr('height', (value) => svgHeight - yScale(value) - paddingBottom);
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

export default BarChart;
