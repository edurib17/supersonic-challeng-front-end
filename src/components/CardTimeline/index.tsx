import React from "react";
import IconDate from "../../assets/date.svg";
import Timeline from "../Timeline";
import {
  Container,
  ContainerHeader,
  TitleTimeline,
  StatusTimeline,
  CardPrevision,
  ContainerDate,
  TitleDate,
  ImgDate,
  Date,
} from "./styles";

const CardTimeline: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <TitleTimeline>Timeline do projeto</TitleTimeline>
        <StatusTimeline>
          O seu projeto está em <strong>risco de sofrer atraso.</strong>
        </StatusTimeline>
        <CardPrevision>
          <ImgDate src={IconDate} alt="Date-Icon" />
          <TitleDate>previsão de entrega final</TitleDate>
          <ContainerDate>
            <Date>18 de Junho</Date>
          </ContainerDate>
        </CardPrevision>
      </ContainerHeader>
      <Timeline />
    </Container>
  );
};

export default CardTimeline;
