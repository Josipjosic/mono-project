import React from "react";
import modalStyle from "./ConfirmModal.module.scss";
import { showConfModal } from "../Stores/ModalConfStore";
import ItemData from "../Pages/ItemData";

const ConfirmModal = (props) => {

  
  return (
    <div className={modalStyle.backdrop}>
      <div className={modalStyle.modal}>
        <div className={modalStyle.header}>
          {!ItemData.isLocatedEdit ?? <h3>You added item to the list!</h3>}
          {ItemData.isLocatedEdit ?? <h3>You edited item from the list!</h3>}
          <h4 className={modalStyle.content}>
            {props.name} {props.type}
          </h4>
        </div>
        <div className={modalStyle.actions}>
          <button
            type="button"
            className={modalStyle.button}
            onClick={() => {
              showConfModal.setState(false);
            }}
          >
            OK!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
