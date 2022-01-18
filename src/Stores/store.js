import { action, makeAutoObservable, observable } from "mobx";

class Store {
  list = [];
  data
  selectedId

  constructor() {
    makeAutoObservable(this, {
      list: observable,
      data: observable,
      confirmHandler: action,
    });
  }
  //set list data
  setList = (list) => {
    this.list = list;
  };
  //set data for confirmHandler POST function
  setData = (data) => {
    this.data = data;
  };
  //set selected ID for deleteHandler function
  setSelectedId = (selectedId) => {
    this.selectedId = selectedId;
  };
  //fetch POST method function
  confirmHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.data),
      }
    ).then(() => {});
    this.list.push(this.data);
  };
  //fetch DELETE method function
  deleteHandler = () => {
    fetch(
      `https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/${this.selectedId}.json`,
      {
        method: "DELETE",
      }
    );
    this.list.pop(this.data);
  };

  //sorting list by name
  sortByName = () => {
    this.list.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  };

  //sorting list by type
  sortByType = () => {
    this.list.sort((a, b) => {
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    });
  };
  
  //sorting list by ID
  sortById = () => {
    this.list.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    });
  };
}

const store = new Store();

export { store };
