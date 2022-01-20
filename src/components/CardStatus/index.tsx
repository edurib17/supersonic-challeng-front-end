import React from "react";
import Ellipse from "../../assets/ellipse.svg";

import {
  Container,
  ContainerTitle,
  Title,
  ContainerIcon,
  IconEllipse,
  ContainerDescription,
  Description,
} from "./styles";

const CardStatus: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>O que nós estamos fazendo:</Title>
        <ContainerIcon>
          <IconEllipse src={Ellipse} alt="ellipse" />
        </ContainerIcon>
      </ContainerTitle>
      <ContainerDescription>
        <Description>Estamos aguardando aprovação do layout.</Description>
      </ContainerDescription>
    </Container>
  );
};

export default CardStatus;
