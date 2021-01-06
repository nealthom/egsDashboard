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

export default function App() {
  const [data, setData] = useState();

  return (
    <Container>
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} />
      {data ? <LineChart input={data} /> : ""}
    </Container>
  );
}
