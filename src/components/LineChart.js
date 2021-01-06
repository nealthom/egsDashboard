import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear
} from "d3";

const StyledSvg = styled.svg`
  background: #eee;
  overflow: visible;
  margin-bottom: 2rem;
  display: block;
  width: 500px;
  height: 300px;
`;

function LineChart({ input }) {
  const [data, setData] = useState([]);
  const maxSize = 1533;
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    setData(input.hours);
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 500]);

    const yScale = scaleLinear().domain([0, maxSize]).range([300, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 8);

    svg.select(".x-axis").style("transform", "translateY(300px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(500px)").call(yAxis);

    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // renders path element, and attaches
    // the "d" attribute from line generator above
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => myLine(value.map((value) => value.TotalInPlay)))
      .attr("fill", "none")
      .attr("stroke", "blue");
    // .on("mouseover", function (d, i) {
    //   console.log("mouseover", d);
    //   select(this).transition().attr("stroke", "red");
    // })
    // .on("mouseout", function (d, i) {
    //   console.log("mouseover", d);
    //   select(this).transition().attr("stroke", "blue");
    // });
  }, [data, input.hours]);

  return (
    <>
      <StyledSvg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </StyledSvg>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default LineChart;
