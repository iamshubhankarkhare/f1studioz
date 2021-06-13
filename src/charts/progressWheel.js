import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ProgressWheel = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    const start = 0;
    const end = 25;

    const colours = {
      fill: '#16B49B',
      track: '#D8D8D8',
      text: '#2C2D2D',
      stroke: '#FFFFFF',
    };

    const radius = props.radius;
    const border = 12;
    const strokeSpacing = 4;
    const endAngle = Math.PI * 2;
    const formatText = d3.format('.0%');
    const boxSize = radius * 2;
    let count = end;
    let progress = start;
    const step = end < start ? -0.01 : 0.01;

    //Define the circle
    let circle = d3
      .arc()
      .startAngle(0)
      .innerRadius(radius)
      .outerRadius(radius - border);

    //setup SVG wrapper
    const svg = d3.select(ref.current);
    svg.attr('width', boxSize).attr('height', boxSize);

    // ADD Group container
    const g = svg
      .append('g')
      .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

    //Setup track
    const track = g.append('g').attr('class', 'radial-progress');
    track
      .append('path')
      .attr('class', 'radial-progress__background')
      .attr('fill', colours.track)
      .attr('stroke', colours.stroke)
      .attr('stroke-width', strokeSpacing + 'px')
      .attr('d', circle.endAngle(endAngle));

    //Add colour fill
    const value = track
      .append('path')
      .attr('class', 'radial-progress__value')
      .attr('fill', colours.fill)
      .attr('stroke', colours.stroke)
      .attr('stroke-width', strokeSpacing + 'px');

    //Add text value
    const numberText = track
      .append('text')
      .attr('class', 'radial-progress__text')
      .attr('fill', colours.text)
      .style('font-size', '28px')
      .style('font-weight', 'bold')
      .attr('text-anchor', 'middle')
      .attr('dy', '.5rem');

    function update(progress) {
      //update position of endAngle
      value.attr('d', circle.endAngle(endAngle * progress));
      //update text value
      numberText.text(formatText(progress));
    }

    (function iterate() {
      //call update to begin animation
      update(progress);
      if (count > 0) {
        //reduce count till it reaches 0
        count--;
        //increase progress
        progress += step;
        //Control the speed of the fill
        setTimeout(iterate, 10);
      }
    })();
  }, [props.data]);

  return <svg ref={ref}></svg>;
};

export default ProgressWheel;
