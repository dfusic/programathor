import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  background-color: red;
`;
