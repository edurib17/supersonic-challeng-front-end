import React, { useState } from "react";
import arrow_down from "../../assets/arrow-down.svg";
import confirm from "../../assets/confirm.svg";
import check_table from "../../assets/check-table.svg";
import check_table_orange from "../../assets/check-table-orange.svg";

import {
  Container,
  Icon,
  Step,
  IconCheck,
  IconCheckTable,
  Status,
  ContainerLeft,
  ContainerRight,
  Table,
  Tr,
  Td,
  Link,
} from "./styles";

interface IBottomProps {
  step: string;
  status: boolean;
  description: string;
  steps: {
    sub_etapa: string;
    responsavel: string;
    link?: string;
    sub_status: string;
    status: boolean;
  }[];
}

const Bottom: React.FC<IBottomProps> = ({
  step,
  status,
  description,
  steps,
}) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <Container onClick={() => setShowTable(!showTable)}>
        <ContainerLeft>
          <Icon src={arrow_down} />
          <Step>{step}</Step>
        </ContainerLeft>
        <ContainerRight>
          {status ? <IconCheck src={confirm} /> : null}
          <Status color={status === true ? "green" : "orange"}>
            {description}
          </Status>
        </ContainerRight>
      </Container>
      {showTable ? (
        <Table>
          {steps.map((step) => (
            <Tr>
              <Td>
                {step.status ? (
                  <IconCheckTable src={check_table} />
                ) : (
                  <IconCheckTable src={check_table_orange} />
                )}
                {step.sub_etapa}
              </Td>
              <Td>{step.responsavel}</Td>
              <Td>
                {step.sub_status} {step.link ? <Link>{step.link}</Link> : ""}
              </Td>
            </Tr>
          ))}
        </Table>
      ) : null}
    </>
  );
};

export default Bottom;
