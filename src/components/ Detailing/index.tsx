import React from "react";
import details from "../../data/details.json";
import Bottom from "../Bottom";
import { Container, Title, Border, ContainerTable, TitleTable } from "./styles";

const Detailing: React.FC = () => {
  return (
    <Container>
      <Title>Detalhamento do projeto</Title>
      <Border />
      <ContainerTable>
        <TitleTable>Etapa</TitleTable>
        <TitleTable>Responsável</TitleTable>
        <TitleTable>Status</TitleTable>
      </ContainerTable>
      {details.map((detail, index) => (
        <Bottom
          key={index}
          step={detail.step}
          status={detail.status}
          description={detail.description}
          steps={detail.steps}
        />
      ))}
    </Container>
  );
};

export default Detailing;
