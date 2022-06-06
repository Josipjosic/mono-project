import {
  action,
  configure,
  makeAutoObservable,
  observable,
  runInAction,
} from "mobx";

configure({ enforceActions: true });

class CreateStore {
  loadedCars = [];
  data;
  setName = "";
  setType = "";
  modelType = "";

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,
      confirmHandler: action,
    });
  }

  //set data for confirmHandler POST function
  setData = (data) => {
    this.data = data;
  };

  // sets name of input name
  setSetName = (setName) => {
    this.setName = setName;
  };
  // sets type of input type
  setSetType = (setType) => {
    this.setType = setType;
  };
  // sets type of input type
  setModelType = (modelType) => {
    this.modelType = modelType;
  };

  //fetch POST method function
  confirmHandler = async (event) => {
    event.preventDefault();
    await fetch(
      "https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.data),
      }
    );
    runInAction(() => {
      this.loadedCars.push(this.data);
    });
  };
}

const createStore = new CreateStore();

export { createStore };
