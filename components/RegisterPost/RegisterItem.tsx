import styled from "styled-components";
import MainPost from "./MainPost";
import PreViewPost from "./PreViewPost";

export default function RegisterItem(): JSX.Element {
  return (
    <Container>
      <MainSection>
        <MainPost />
      </MainSection>
      <PrevSection>
        <PreViewPost />
      </PrevSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  display: flex;
  background-color: #121212;
  position: absolute;
  width: 50%;
  height: 100%;
`;

const PrevSection = styled.div`
  display: flex;
  background-color: #0c0c0c;
  height: 100%;
  width: 100%;
`;
