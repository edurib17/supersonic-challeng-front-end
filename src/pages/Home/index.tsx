import React from "react";
//components
import Aside from "../../components/Aside";
import CardWelcome from "../../components/CardWelcome";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Aside />
      <CardWelcome/>
    </Container>
  );
};

export default Home;
