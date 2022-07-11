import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface ModalProps {
  width: string;
  height: string;
  element: JSX.Element;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ width, height, element, setModal }: ModalProps): JSX.Element {
  const modalOff = () => {
    setModal(false);
  };
  return (
    <>
      <View width={width} height={height}>
        <div className="exit-wrapper" onClick={modalOff}>
          &times;
        </div>
        <Wrapper>{element}</Wrapper>
      </View>
      <Canvas onClick={modalOff} />
    </>
  );
}

const View = styled.section<{ width: string; height: string }>``;
const Wrapper = styled.div``;
const Canvas = styled.div``;
