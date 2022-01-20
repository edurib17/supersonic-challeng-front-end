import React from "react";
import Ellipse from "../../assets/ellipse.svg";
import {
  Container,
  Line,
  LineInProgress,
  Event1,
  Event2,
  Event3,
  Event4,
  Event5,
  Title,
  Circle,
  Icon,
} from "./styles";

const Timeline: React.FC = () => {
  return (
    <Container>
      <Line />
      <LineInProgress />
      <Event1>
        <Circle />
        <Icon src={Ellipse} />
        <Title>Start</Title>
      </Event1>
      <Event2>
        <Circle />
        <Icon src={Ellipse} />
        <Title>Pesquisa e diagnóstico</Title>
      </Event2>
      <Event3>
        <Circle />
        <Icon src={Ellipse} />
        <Title>Wireframe</Title>
      </Event3>
      <Event4>
        <Circle color="orange" />
        <Icon src={Ellipse} />
        <Title color="orange" >Layout</Title>
      </Event4>
      <Event5>
        <Circle color="gray" />
        <Icon src={Ellipse} />
        <Title color="gray" >Entrega</Title>
      </Event5>
    </Container>
  );
};

export default Timeline;
