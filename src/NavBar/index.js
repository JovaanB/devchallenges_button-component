import React from "react";
import styled from "styled-components";
import logo from "../assets/devchallenges.png";

const NavBarContainer = styled.div`
  width: 237px;
  background-color: #fafbfd;
  height: 100vh;
  padding-left: 56.5px;
  padding-top: 48px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 122px 0;
  cursor: pointer;

  & img {
    margin-right: 5px;
  }
`;

const StyledLi = styled.li`
  font-weight: 500;
  font-size: 14px;
  color: #9e9e9e;
  list-style: none;
  margin-bottom: 30px;
  cursor: pointer;

  &:nth-child(4) {
    color: #090f31;
    font-weight: 700;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <img src={logo} alt="logo" height="30px" />
        <p>DevChallenges</p>
      </LogoContainer>
      <nav>
        <ul>
          <StyledLi>Colors</StyledLi>
          <StyledLi>Typography</StyledLi>
          <StyledLi>Spaces</StyledLi>
          <StyledLi>Buttons</StyledLi>
          <StyledLi>Inputs</StyledLi>
          <StyledLi>Grid</StyledLi>
        </ul>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
