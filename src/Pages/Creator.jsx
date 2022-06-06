import styleEditor from "./Creator.module.scss";
import { observer } from "mobx-react";
import { createStore } from "../Stores/CreateStore";
import ConfirmModal from "../Components/ConfirmModal";
import { showConfModal } from "../Stores/ModalConfStore";

const Creator = () => {
  const name = createStore.setName;
  const type = createStore.setType;
  const modelType = createStore.modelType;
 

  // stored name input and type input values to data const
  const data = { name, type, modelType };

  //sending data to store data value
  createStore.data = data;

  const handleChange = (event) => {
    createStore.setModelType(event.target.value)
  }

  return (
    <div className={styleEditor.EditorUi}>
      <h2 className={styleEditor.Title}>Enter Info</h2>
      <form className={styleEditor.EditorContent}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={(event) => createStore.setSetName(event.target.value)}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          placeholder="Enter Type"
          onChange={(event) => createStore.setSetType(event.target.value)}
        ></input>
        <label htmlFor="model-type" className={styleEditor.DropdownLabel}>
          Model Type
        </label>
        <select
          defaultValue={createStore.ModelType}
          className={styleEditor.SelectDropdown}
          onChange={handleChange}
        >
          <option defaultValue="-">-</option>
          <option value>Hatchback</option>
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
            type="button"
            onClick={(event) => {
              showConfModal.setState(true);
              createStore.confirmHandler.call(this, event);
            }}
          >
            Confirm
          </button>
        </div>
      </form>
      <div>
        {showConfModal.state && (
          <ConfirmModal open={showConfModal.state}></ConfirmModal>
        )}
      </div>
    </div>
  );
};
export default observer(Creator);
