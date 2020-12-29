import React, { useState } from "react";
import MyDropzone from "./MyDropzone";

import "./styles.css";

export default function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} />
      {data ? JSON.stringify(data) : ""}
    </div>
  );
}
