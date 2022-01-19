import React from "react";
//Icons
import Logo from "../../assets/icon.svg";
import Check from "../../assets/check.svg";
import Results from "../../assets/results.svg"

import {
  Container,
  ContainerImg,
  Image,
  Line1,
  Line2,
  Line3,
  StatusProject,
  StatusResults,
  IconCheck,
  IconResults
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <ContainerImg>
        <Image src={Logo} alt="Logo" />
      </ContainerImg>
      <Line1 />
      <StatusProject>
        Status do Projeto
        <IconCheck src={Check} />
      </StatusProject>

      <Line2 />
      <StatusResults>
        Resultados
        <IconResults src={Results} />
      </StatusResults>
      <Line3 />
    </Container>
  );
};

export default Aside;
