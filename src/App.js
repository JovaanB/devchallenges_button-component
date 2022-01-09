import NavBar from "./NavBar";
import styled from "styled-components";
import ConfigurationList from "./ConfigurationList";

const RightContainer = styled.div`
  padding-left: 83px;

  & h1 {
    margin: 53px 0px 28px 0px;
    color: #4f4f4f;
    font-size: 24px;
    font-weight: 500;
  }
`;

const TextIcon = styled.p`
  color: #828282;
  font-size: 12px;
`;
const TextCreated = styled.p`
  color: #a9a9a9;
  font-size: 14px;
`;

const App = () => {
  return (
    <main className="layout">
      <NavBar />
      <RightContainer>
        <h1>Buttons</h1>
        <ConfigurationList />
        <TextIcon>
          Icons:{" "}
          <a
            href="https://mui.com/components/material-icons"
            alt="Material Icons"
            target="_blank"
            rel="noreferrer"
          >
            Material Icons
          </a>
        </TextIcon>
        <TextCreated>
          Created by{" "}
          <a
            href="https://github.com/JovaanB"
            alt="Github of creator - JovaanB"
            target="_blank"
            rel="noreferrer"
          >
            <b>JovaanB</b>
          </a>{" "}
          - devChallenges.io
        </TextCreated>
      </RightContainer>
    </main>
  );
};

export default App;
