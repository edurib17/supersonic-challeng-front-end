import React from "react";

//components
import Aside from "../../components/Aside";
import CardStatus from "../../components/CardStatus";
import CardTimeline from "../../components/CardTimeline";
import CardToDo from "../../components/CardToDo";
import CardWelcome from "../../components/CardWelcome";
import Header from "../../components/Header";
import Detailing from "../../components/ Detailing";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Aside />
      <CardWelcome />
      <CardStatus />
      <CardToDo />
      <CardTimeline />
      <Detailing />
    </Container>
  );
};

export default Home;
