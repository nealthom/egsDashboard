import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 5px;
  width: 300px;
  height: 100px;
  background: lightblue;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  outline: none;
  cursor: pointer;

  &:active {
    width: 290px;
    box-shadow: none;
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
