import React from "react";
//components
import Aside from "../../components/Aside";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Aside />
    </Container>
  );
};

export default Home;
