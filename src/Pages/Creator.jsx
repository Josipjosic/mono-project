import { store } from "../Stores/Store";
import styleEditor from "./Editor.module.scss";
import { observer } from "mobx-react";
import { listStore } from "../Stores/ListStore";
import ConfirmModal from "../Components/ConfirmModal";
import { showConfModal } from "../Stores/ModalConfStore";

const Creator = () => {
  const name = store.setName;
  const type = store.setType;

  // stored name input and type input values to data const
  const data = { name, type };

  //sending data to store data value
  listStore.data = data;

  return (
    <div className={styleEditor.EditorUi}>
      <h2 className={styleEditor.Title}>Enter Info</h2>
      <form className={styleEditor.EditorContent}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={(event) => store.setSetName(event.target.value)}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          placeholder="Enter Type"
          onChange={(event) => store.setSetType(event.target.value)}
        ></input>
        <div className={styleEditor.EditorCom}>
          <button
          type="button"
            onClick={(event) => {
              showConfModal.setState(true);
              listStore.confirmHandler.call(this, event);
            }}
          >
            Confirm
          </button>
        </div>
      </form>
      <div>
        {showConfModal.state &&
          <ConfirmModal open={showConfModal.state}></ConfirmModal>
        }
      </div>
    </div>
  );
};
export default observer(Creator);
