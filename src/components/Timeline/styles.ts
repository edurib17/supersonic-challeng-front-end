import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 290px;
  top: 125px;
`;

export const Line = styled.div`
  position: absolute;
  width: 290px;
  height: 0px;
  left: -240px;
  top: -15px;
  border: 2px solid #7ee14a;
`;

export const LineInProgress = styled.div`
  position: absolute;
  width: 118px;
  height: 0px;
  left: 50px;
  top: -15px;
  border: 2px solid #cccccc;
`;

export const Event1 = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  left: -240px;
  top: -22px;
`;

export const Event2 = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  left: -130px;
  top: -22px;
`;

export const Event3 = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  left: -10px;
  top: -22px;
`;

export const Event4 = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  left: 80px;
  top: -22px;
`;

export const Event5 = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  left: 160px;
  top: -22px;
`;

export const Icon = styled.img`
  background: #ffffff;
`;

export const Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 5px;
  top: 5px;
  background: ${(props) =>
    props.color === "orange"
      ? "#FECE6F"
      : props.color === "gray"
      ? "#CCCCCC"
      : "#7ee14a"};
  border-radius: 10px;
`;

export const Title = styled.h2`
  position: absolute;
  left: -9px;
  top: 25px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${(props) =>
    props.color === "orange"
      ? "#FECE6F"
      : props.color === "gray"
      ? "#CCCCCC"
      : "#7ee14a"};
  background: #ffffff;
`;
