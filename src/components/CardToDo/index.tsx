import React from "react";
import Files from "../../assets/files.svg";
import {
  Container,
  ContainerTitle,
  Title,
  ContainerImg,
  Image,
  ContainerDescription,
  Description,
} from "./styles";

const CardToDo: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>O que precisamos de você:</Title>
        <ContainerImg>
          <Image src={Files} alt="Files" />
        </ContainerImg>
      </ContainerTitle>
      <ContainerDescription>
        <Description>Estamos aguardando aprovação do layout.</Description>
      </ContainerDescription>
    </Container>
  );
};

export default CardToDo;
