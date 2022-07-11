import { useState } from "react";
import { Modal } from "../components/ui/Modal";

function RegisterPost() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}>모달</button>
      {modal && (
        <Modal width="200px" height="200px" element={<div>최초의 모달</div>} setModal={setModal} />
      )}
    </>
  );
}

export default RegisterPost;
