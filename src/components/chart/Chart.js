import React from "react";
import styled from "styled-components";

import LineChart from "./LineChart";

const ChartContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 6px;
  & > h2,
  h3 {
    margin: 0;
    padding: 0.25rem;
  }
`;

export default function Chart({ data }) {
  return (
    <ChartContainer>
      {/* <h2>{data.dayOfWeek}</h2>
      <h3>{`${data.date.month}/${data.date.day}/${data.date.year}`}</h3>
      <h5>{data.maxPlayed}</h5> */}

      {data.map((day) => {
        return <LineChart key={day["Business Date"]} input={day.hours} />;
      })}
    </ChartContainer>
  );
}
