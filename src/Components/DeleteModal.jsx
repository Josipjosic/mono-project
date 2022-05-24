import React from "react";
import modalStyle from "./DeleteModal.module.scss";
import { showModal } from "../Stores/ModalDelStore";
import { deleteStore } from "../Stores/DeleteStore";

const DeleteModal = (props) => {

  const handleCloseModal = () => {
    showModal.setState(false);
  };

  console.log(showModal.state)

  return (
    <div className={modalStyle.backdrop}>
      <div className={modalStyle.modal}>
        <div className={modalStyle.header}>
          <h3>Are you sure you want to delete this item?</h3>
          <h4 className={modalStyle.content}>
            {props.name} {props.type}
          </h4>
        </div>
        <div className={modalStyle.actions}>
          <button
            className={modalStyle.button}
            onClick={() => {
              deleteStore.deleteHandler(
              deleteStore.setSelectedId(deleteStore.selectedId)
              );
              handleCloseModal()
            }}
          >
            Delete
          </button>
          <button className={modalStyle.button} onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
