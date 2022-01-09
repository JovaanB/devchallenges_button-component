import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  margin-bottom: 45px;
`;

const TitleContainer = styled.div`
  color: #333;
  font-size: 12px;
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  margin-right: 155px;
`;

const ConfigurationItem = ({ title, button }) => {
  return (
    <ItemContainer>
      <TitleContainer>{title}</TitleContainer>
      <ButtonContainer>{button}</ButtonContainer>
    </ItemContainer>
  );
};

export default ConfigurationItem;
