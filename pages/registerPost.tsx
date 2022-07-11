import { useState } from "react";
import { Modal } from "../components/ui/Modal";
import RegisterItem from "../components/RegisterPost/RegisterItem";
import styled from "styled-components";

function RegisterPost(): JSX.Element {
  return (
    <Main>
      <RegisterItem />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

export default RegisterPost;
