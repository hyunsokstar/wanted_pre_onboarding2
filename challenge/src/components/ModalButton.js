import React from "react";
import "./ModalButton.css";

function ModalButton({openModal}) {
  return (
    <>
      <button className="openModalBtn" onClick={() => openModal(true)}>
        open
      </button>
    </>
  );
}

export default ModalButton;