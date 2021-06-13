import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DoughnutChart = (props) => {
  const colors = props.colors;

  colors.sort(() => Math.random() - 0.5);
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value((d) => d)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  useEffect(() => {
    const data = createPie(props.data);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll('g.arc').data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append('g')
      .attr('class', 'arc');

    const path = groupWithUpdate
      .append('path')
      .merge(groupWithData.select('path.arc'));

    const eventObj = {
      mouseover: function (d) {
        console.log('over called');
        d3.select(this)
          .transition()
          .attr(
            'd',
            d3
              .arc()
              .innerRadius(props.innerRadius - 2)
              .outerRadius(props.outerRadius + 10)
          );
      },

      mouseout: function (d) {
        console.log('called');
        d3.select(this)
          .transition()
          .duration(500)
          .attr(
            'd',
            d3
              .arc()
              .innerRadius(props.innerRadius)
              .outerRadius(props.outerRadius)
          );
      },
    };

    path
      .attr('class', 'arc')
      .attr('d', createArc)
      .attr('fill', (d, i) => colors[i])
      .on('mouseover', eventObj.mouseover)
      .on('mouseout', eventObj.mouseout);
    if (props.middleText === true) {
      group
        .append('text')
        .style('fill', 'black')
        .style('font-size', '28px')
        .style('font-weight', 'bold')
        .attr('transform', 'translate(0,' + 5 + ')')
        .attr('text-anchor', 'middle')
        .html(props.data.reduce((a, b) => a + b));

      group
        .append('text')
        .style('fill', 'black')
        .style('font-size', '28px')
        .style('font-weight', 'bold')
        .attr('transform', 'translate(0,' + 30 + ')')
        .attr('text-anchor', 'middle')
        .html('Total');
    }
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.width / 2} ${props.height / 2})`}
      />
    </svg>
  );
};

export default DoughnutChart;
