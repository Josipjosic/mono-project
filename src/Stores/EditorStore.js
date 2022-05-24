import {
  configure,
  makeAutoObservable,
  observable,
} from "mobx";

configure({ enforceActions: true });

class EditorStore {
  data;
  Name = "";
  Type = "";
  SelectedName = "";
  SelectedType = "";

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,

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

  setSelectedType = (Type) => {
    this.SelectedType = Type;
  };

  setSelectedName = (Name) => {
    this.SelectedName = Name;
  };

}

const editorStore = new EditorStore();

export { editorStore };
