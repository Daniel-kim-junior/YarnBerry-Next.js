import { Dispatch, SetStateAction, ReactNode, ReactChild, Fragment } from "react";
import styled from "styled-components";

interface ModalProps {
  width: string;
  height: string;
  element: () => JSX.Element;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ width, height, element, setModal }: ModalProps): JSX.Element {
  const modalOff = () => {
    setModal(false);
  };
  const Element = element;
  return (
    <>
      <View width={width} height={height}>
        <Wrapper>
          <div className="exit-wrapper" onClick={modalOff}>
            &times;
          </div>
          <Element />
        </Wrapper>
      </View>
      <Canvas onClick={modalOff} />
    </>
  );
}

const View = styled.section<{ width: string; height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  position: absolute;
  background-color: #c8d6e5;
`;
const Canvas = styled.div``;
