import { useState } from "react";
import { Modal } from "../components/ui/Modal";
import RegisterItem from "../components/RegisterPost/RegisterItem";
import styled from "styled-components";

function RegisterPost(): JSX.Element {
  const [modal, setModal] = useState(true);
  return (
    <Main>
      {modal && <Modal width="100%" height="100%" element={RegisterItem} setModal={setModal} />}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

export default RegisterPost;
