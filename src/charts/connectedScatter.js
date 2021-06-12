import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function ConnectedScatter({ width, height, data }) {
  console.log(data);
  const svgRef = React.useRef();
  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 560 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // parse the date / time
    const parseTime = d3.timeParse('%d-%b-%y');

    // set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // define the line
    const valueline = d3
      .line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.close);
      });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select(svgRef.current);
    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // format the data
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
      console.log(d.date);
    });

    // Scale the range of the data
    x.domain(
      d3.extent(data, function (d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.close;
      }),
    ]);

    // Add the valueline path.
    // svg.append('path').data([data]).attr('class', 'line').attr('d', valueline);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#69b3a2')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.close);
          })
      );
    // Add the scatterplot
    svg
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('cx', function (d) {
        return x(d.date);
      })
      .attr('cy', function (d) {
        return y(d.close);
      })
      .attr('fill', '#69b3a2');

    var xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat('%a'));
    var yAxis = d3.axisLeft(y).ticks(7);

    // Add the X Axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.right},${height + margin.bottom})`)
      .call(xAxis);

    // Add the Y Axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.right},0)`)
      .call(yAxis);
  }, []);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}

export default ConnectedScatter;
