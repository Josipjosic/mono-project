import { action, configure, makeAutoObservable, runInAction } from "mobx";
import { listStore } from "./ListStore";

configure({ enforceActions: true });

class EditorStore {
  data;
  Name = "";
  Type = "";
  SelectedName = "";
  SelectedType = "";
  SelectedId = "";

  constructor() {
    makeAutoObservable(this, {
      updateHandler: action,
    });
  }

  //set data for confirmHandler POST function
  setData = (data) => {
    this.data = data;
  };

  // sets name of input name
  setName = (Name) => {
    this.Name = Name;
  };
  // sets type of input type
  setType = (Type) => {
    this.Type = Type;
  };
  // selected type to update
  setSelectedType = (Type) => {
    this.SelectedType = Type;
  };
  // selected name to update
  setSelectedName = (Name) => {
    this.SelectedName = Name;
  };
  // selects ID on click
  setSelectedId = (SelectedId) => {
    this.SelectedId = SelectedId;
  };

  //fetch PUT method function
  updateHandler = async (event) => {
    event.preventDefault();
    await fetch(
      `https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/${this.SelectedId}.json`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      }
    );
    runInAction(() => {
      listStore.loadedCars.push(this.data);
      listStore.fetchCars();
    });
  };
}

const editorStore = new EditorStore();

export { editorStore };
