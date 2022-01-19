import React from "react";

import { Container, Contact, Help, Monday } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Help>Ajuda</Help>
      <Monday>Monday</Monday>
      <Contact>Contato</Contact>
    </Container>
  );
};

export default Header;
