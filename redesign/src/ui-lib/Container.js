/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

export default function (props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0 auto;
  max-width: 1200px;
`;
