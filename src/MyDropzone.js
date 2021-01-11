import React, { useCallback } from "react";
import styled from "styled-components";
import { ExcelRenderer } from "react-excel-renderer";
import { useDropzone } from "react-dropzone";

import convert from "./utils/convert";

const StyledDropBox = styled.div`
  padding: 2rem;
  background: steelblue;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  border: black 2px dotted;
  transition: all 0.3s ease-in;

  &:hover {
    border: black 2px solid;
    color: steelblue;
    background: #fff;
  }
`;

//Removes resp.column
//that contain the column letters
function MyDropzone({ set }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        ExcelRenderer(file, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            resp.rows.shift();

            const converted = convert(resp.rows);
            set(converted);
          }
        });
      });
    },
    [set]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDropBox {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n Drop </p>
    </StyledDropBox>
  );
}

export default MyDropzone;
