import { useState } from "react";
import { Modal } from "../components/ui/Modal";
import RegisterItem from '../components/RegisterPost/RegisterItem';

function RegisterPost(): JSX.Element {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>모달</button>
      {modal && (
        <Modal width="200px" height="1000px" element={RegisterItem} setModal={setModal} />
      )}
    </div>
  );
}

export default RegisterPost;
