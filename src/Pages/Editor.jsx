import styleEditor from "./Editor.module.scss";
import { observer } from "mobx-react";
import { editorStore } from "../Stores/EditorStore";
import ConfirmModal from "../Components/ConfirmModal";
import { showConfModal } from "../Stores/ModalConfStore";
import { showModal } from "../Stores/ModalDelStore";
import { useParams } from "react-router-dom";
import { deleteStore } from "../Stores/DeleteStore";
import DeleteModal from "../Components/DeleteModal";

const Editor = () => {
  const name = editorStore.SelectedName;
  const type = editorStore.SelectedType;
  const modelType = editorStore.SelectedModelType;

  
  // stored name input and type input values to data const
  const data = { name, type, modelType };
  
  //sending data to store data value
  editorStore.data = data;
  
  // loads params from url
  const params = useParams();
  
  const handleChange = (event) => {
    editorStore.setSelectedModelType(event.target.value)
  }

  console.log(editorStore.SelectedId)

  return (
    <div className={styleEditor.EditorUi}>
      <h2 className={styleEditor.Title}>Edit item</h2>
      <form className={styleEditor.EditorContent}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder={params.name}
          onChange={(event) => editorStore.setSelectedName(event.target.value)}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          placeholder={params.type}
          onChange={(event) => editorStore.setSelectedType(event.target.value)}
        ></input>
        <label className={styleEditor.DropdownLabel}>Model Type</label>
        <select
          defaultValue={params.modelType}
          className={styleEditor.SelectDropdown}
          onChange={handleChange}
        >
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">
            Sedan
          </option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Copue</option>
          <option value="Convertible">Convertible</option>
          <option value="Pickup Truck">Pickup Truck</option>
        </select>
        <div className={styleEditor.EditorCom}>
          <button
            className={styleEditor.buttonConfirm}
            type="button"
            onClick={(event) => {
              showConfModal.setState(true);
              editorStore.updateHandler.call(this, event);
            }}
          >
            Confirm
          </button>
          <button
            className={styleEditor.buttonDelete}
            type="button"
            onClick={(event) => {
              showModal.setState(true);
              deleteStore.deleteHandler.call(this, event);
            }}
          >
            Delete
          </button>
        </div>
      </form>
      <div>
        {showConfModal.state && (
          <ConfirmModal open={showConfModal.state}></ConfirmModal>
        )}
        {showModal.state &&( <DeleteModal open={showModal.state}></DeleteModal>)}
      </div>
    </div>
  );
};
export default observer(Editor);
