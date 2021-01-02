import React, { useState } from "react";
import styled from "styled-components";
import MyDropzone from "./MyDropzone";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export default function App() {
  const [data, setData] = useState();

  return (
    <Container>
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} />
      {data ? JSON.stringify(data) : ""}
    </Container>
  );
}
