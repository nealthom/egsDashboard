import React, { useState } from "react";
import styled from "styled-components";
import MyDropzone from "MyDropzone";

import LineChart from "components/LineChart";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export default function Spreadsheet() {
  const [data, setData] = useState();

  return (
    <Container>
      <MyDropzone set={setData} />
      {data ? (
        <ChartContainer>
          <h2>{data.dayOfWeek}</h2>
          <h3>{`${data.date.month}/${data.date.day}/${data.date.year}`}</h3>
          <LineChart input={data} />
        </ChartContainer>
      ) : (
        ""
      )}
    </Container>
  );
}
