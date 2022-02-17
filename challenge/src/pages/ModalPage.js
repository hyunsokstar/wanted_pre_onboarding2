import React, { useState } from "react";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";

function ModalPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h2>모달 창 구현하기 페이지</h2>
      <ModalButton openModal={setOpenModal} />
      {openModal && <Modal closeModal = {setOpenModal} />}
    </>
  );
}

export default ModalPage;

