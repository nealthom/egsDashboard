import React from "react";
import styled from "styled-components";

import LineChart from "./LineChart";

const ChartContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      <LineChart input={data} />
    </ChartContainer>
  );
}
