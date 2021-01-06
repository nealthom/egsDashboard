import React, { useState } from "react";
import styled from "styled-components";
import MyDropzone from "MyDropzone";

import LineChart from "components/LineChart";
import { Button } from "components/common";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function App() {
  const [data, setData] = useState();

  return (
    <Container>
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} />
      {data ? JSON.stringify(data) : ""}
      <ChartContainer>
        <LineChart />
        <Button>Update Data</Button>
        <Button>Filter Data</Button>
      </ChartContainer>
    </Container>
  );
}
