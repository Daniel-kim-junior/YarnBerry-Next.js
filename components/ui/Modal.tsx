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
  const View = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    position: absolute;
  `;

  const Element = element;
  return (
    <>
      <View>
        <Element />
      </View>
      <Canvas onClick={modalOff} />
    </>
  );
}

const Canvas = styled.div``;
