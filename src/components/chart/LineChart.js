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
  margin: 2rem;
  display: block;
  width: 300px;
  height: 150px;
`;

function LineChart({ input }) {
  const [data, setData] = useState([]);
  const maxSize = 1533;
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    setData(input.hours);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, maxSize]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 8);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

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
      .attr("stroke", "blue")
      .attr("xScale", function (d) {
        return xScale(d.Hour);
      })
      .attr("yScale", function (d) {
        return yScale(d.value);
      });

    svg
      .append("text")
      .attr("x", 300 / 2)
      .attr("y", 0 - "2rem" / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text(`${input.DOW}`);
  }, [data, input]);

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
