import React from "react";
import { Container, Img } from "./style";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
};

export default Navbar;
