import React from "react";

import {
  Container,
  ContainerTitle,
  Title,
  ContainerSubTitle,
  SubTitle,
  ContainerDescription,
  Description,
} from "./styles";

const CardWelcome: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>
          Olá, <br /> mundo!
        </Title>
      </ContainerTitle>
      <ContainerSubTitle>
        <SubTitle>
          Seja bem vindo(a) à plataforma de acompanhamento do seu projeto!
        </SubTitle>
      </ContainerSubTitle>
      <ContainerDescription>
        <Description>
          Aqui sua equipe pode verificar o status de cada etapa, se atualizar
          sobre o andamento geral do projeto e ser informado sobre os retornos
          que aguardamos de vocês.
        </Description>
      </ContainerDescription>
    </Container>
  );
};

export default CardWelcome;
