import React, { useState } from "react";
import styled from "styled-components";
import MyDropzone from "utils/MyDropzone";
import Chart from "components/chart/Chart";
import convert from "utils/convertEGSOccupancy";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Spreadsheet({ title }) {
  const [data, setData] = useState();

  return (
    <Container>
      <h1>{title}</h1>
      <MyDropzone set={setData} convert={convert} />
      {data ? <Chart data={data} /> : ""}
    </Container>
  );
}
