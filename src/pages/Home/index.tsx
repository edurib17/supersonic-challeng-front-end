import React from "react";
//components
import Aside from "../../components/Aside";
import CardStatus from "../../components/CardStatus";
import CardToDo from "../../components/CardToDo";
import CardWelcome from "../../components/CardWelcome";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Aside />
      <CardWelcome/>
      <CardStatus/>
      <CardToDo/>
    </Container>
  );
};

export default Home;
