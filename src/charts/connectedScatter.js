import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function ConnectedScatter({ width, height, data }) {
  const svgRef = React.useRef();
  useEffect(() => {
    const width = 500;
    const height = 300;
    const margin = 50;
    const duration = 250;
    const circleRadius = 6;
    const circleOpacity = '0.85';
    const circleRadiusHover = 8;

    /* Format Data */

    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach(function (d) {
      d.values.forEach(function (d) {
        d.date = parseDate(d.date);
        d.count = +d.count;
      });
    });
    /* Scale */
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data[0].values, (d) => d.date))
      .range([0, width - margin]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data[0].values, (d) => d.count)])
      .range([height - margin, 0]);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    /* Add SVG */
    const svg = d3.select(svgRef.current);

    svg
      .attr('width', width + margin)
      .attr('height', height + margin)
      .attr('transform', `translate(${margin}, ${margin})`);

    /* Add line into SVG */

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.count));

    let lines = svg.append('g').attr('class', 'lines');

    svg
      .append('path')
      .data(data)
      .attr('fill', 'none')
      .attr('stroke', '#69b3a2')
      .attr('stroke-width', 1.5)
      .attr('d', (d) => line(d.values))
      .attr('transform', `translate(30, 30)`);

    /* Add circles in the line */
    lines
      .selectAll('circle-group')
      .data(data)
      .enter()
      .append('g')
      .style('fill', (d, i) => color(i))
      .selectAll('circle')
      .data((d) => d.values)
      .enter()
      .append('g')
      .attr('class', 'circle')
      .attr('transform', `translate(30, 30)`)
      .on('mouseover', function (d) {
        d3.select(this)
          .style('cursor', 'pointer')
          .attr('x', (d) => xScale(d.date) + 5)
          .attr('y', (d) => yScale(d.count) - 10);
      })
      .on('mouseout', function (d) {
        d3.select(this).style('cursor', 'none').transition().duration(duration);
      })
      .append('circle')
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', (d) => yScale(d.count))
      .attr('r', circleRadius)
      .style('opacity', circleOpacity)
      .on('mouseover', function (d) {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr('r', circleRadiusHover);
      })
      .on('mouseout', function (d) {
        d3.select(this).transition().duration(duration).attr('r', circleRadius);
      });

    /* Add Axis into SVG */
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(7)
      .tickFormat(d3.timeFormat('%b'));
    const yAxis = d3.axisLeft(yScale).ticks(7);

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(20, ${height - margin})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(20, 10)`)
      .call(yAxis);
  }, []);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}

export default ConnectedScatter;
