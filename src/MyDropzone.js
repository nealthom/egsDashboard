import React, { useCallback } from "react";
import styled from "styled-components";
import { ExcelRenderer } from "react-excel-renderer";
import { useDropzone } from "react-dropzone";

import convert from "./utils/convert";

const StyledDropBox = styled.div`
  padding: 2rem;
  cursor: pointer;
  border: black 2px dotted;
  &:hover {
    border: black 2px solid;
  }
`;

function MyDropzone({ set }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        ExcelRenderer(file, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            //console.log(resp.rows);
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
      <p>Drag 'n' drop some files here, or click to select files</p>
    </StyledDropBox>
  );
}

export default MyDropzone;
