/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

import { Container, Menu } from "../../ui-lib/index";

export default function () {
  return (
    <Container>
      <Menu>
        <Menu.Item>
          <Link to="/">Homepage</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about-us">About us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
}
