import styleEditor from "./Editor.module.scss";
import { observer } from "mobx-react";
import { editorStore } from "../Stores/EditorStore";
import ConfirmModal from "../Components/ConfirmModal";
import { showConfModal } from "../Stores/ModalConfStore";

const Editor = () => {

  const name = editorStore.SelectedName;
  const type = editorStore.SelectedType;

  // stored name input and type input values to data const
  const data = { name, type };

  //sending data to store data value
  editorStore.data = data;



  return (
    <div className={styleEditor.EditorUi}>
      <h2 className={styleEditor.Title}>Edit item</h2>
      <form className={styleEditor.EditorContent}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={editorStore.SelectedName}
          onChange={(event) => editorStore.setSelectedName(event.target.value)}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          value={editorStore.SelectedType}
          onChange={(event) =>  editorStore.setSelectedType(event.target.value)}
        ></input>
        <div className={styleEditor.EditorCom}>
          <button 
          type="button"
            onClick={(event) => {
              showConfModal.setState(true);
              editorStore.updateHandler.call(this, event);
            }}
          >
            Confirm</button>
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
export default observer(Editor);
