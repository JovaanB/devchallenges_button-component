import React from "react";
import styled from "styled-components";
import { buttonToDisplayTop, buttonToDisplayBottom } from "./config";
import ConfigurationItem from "./ConfigurationItem";

const ConfigurationListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ top }) => (top ? `530px;` : `1000px;`)};
`;

const ConfigurationList = () => {
  return (
    <>
      <ConfigurationListContainer top>
        {buttonToDisplayTop.map(({ title, button }) => (
          <ConfigurationItem title={title} button={button} top />
        ))}
      </ConfigurationListContainer>
      <ConfigurationListContainer>
        {buttonToDisplayBottom.map(({ title, button }) => (
          <ConfigurationItem title={title} button={button} />
        ))}
      </ConfigurationListContainer>
    </>
  );
};

export default ConfigurationList;
