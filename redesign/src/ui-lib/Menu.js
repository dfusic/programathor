/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Menu = (props) => {
  return <StyledMenuList>{props.children}</StyledMenuList>;
};

const Item = (props) => {
  return <StyledMenuItem>{props.children}</StyledMenuItem>;
};

const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  & li:first-of-type {
    margin-left: 0 !important;
  }
`;
const StyledMenuItem = styled.li`
  font-family: "Montserrat", sans-serif;
  margin: 0 8px;

  & a {
    text-decoration: none;
  }
`;

Menu.Item = Item;

export default Menu;
