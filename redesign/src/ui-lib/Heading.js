/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

export default function (props) {
  const { fontSize, color } = props;

  return (
    <StyledHeading fontSize={fontSize} color={color}>
      {props.children}
    </StyledHeading>
  );
}

const StyledHeading = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;
