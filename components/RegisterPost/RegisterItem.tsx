import styled from "styled-components";
import MainPost from "./MainPost";
import PreViewPost from "./PreViewPost";

export default function RegisterItem(): JSX.Element {
  return (
    <>
      <MainSection>
        <MainPost />
      </MainSection>
      <PrevSection>
        <PreViewPost />
      </PrevSection>
    </>
  );
}
// flex grow는 일정 비율을 가지게 하고 싶을 때 쓰는 flex속성
// flex grow , flex shrink , flex-basis
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  position: relative;
  min-width: 0px;
  z-index: 1;
  flex: 1 1 0%;
`;

const PrevSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  position: relative;
  min-width: 0px;
  flex: 1 1 0%;
  position: relative;
`;
