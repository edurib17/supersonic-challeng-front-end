import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 933px;
  height: 63px;
  background: #ffffff;
  border-radius: 15px;
  margin-top: 12px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
`;

export const ContainerLeft = styled.div`
  display: flex;
  background: #ffffff;
  align-items: center;
  border-radius: 15px;
  padding-left: 25px;
`;

export const ContainerRight = styled.div`
  display: flex;
  margin-right: 110px;
  align-items: center;
  background: #ffffff;
`;

export const Icon = styled.img`
  background: #ffffff;
  width: 15px;
  height: 9px;
  margin-right: 16px;
`;

export const Step = styled.h3`
  background: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

export const IconCheck = styled.img`
  background: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Status = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.color === "green" ? "#2dd45c;" : "#FECE6F")};
  background: #ffffff;
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 0px 0px 15px 15px;
  margin-top: 1px;
  overflow: hidden;
  position: relative;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 15px;
  background: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #2f2e41;
  border: -1px solid #e6e6e6;
  strong {
    background: #ffffff;
  }
`;

export const IconCheckTable = styled.img`
  background: #ffffff;
  margin-right: 5px;
`;

export const Link = styled.strong``;
