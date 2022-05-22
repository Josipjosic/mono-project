import { action, makeAutoObservable, observable } from "mobx";
import { listStore } from "./ListStore";

class Store {
  data;
  setName = "";
  setType = "";
  searchCar = [];
  currentPage = 1;
  itemsPerPage = 4;



  constructor() {
    makeAutoObservable(this, {
      data: observable,
      searchCar: observable,
      currentPage: observable,
      modal: observable,
      toggleModal: action,
    });
  }

  // sets current page number
  setCurrentPage = (currentPage) => {
    this.currentPage = currentPage;
  };
  // sets name of input name
  setSetName = (setName) => {
    this.setName = setName;
  };
  // sets type of input type
  setSetType = (setType) => {
    this.setType = setType;
  };

  //sorting list by name
  sortByName = () => {
    listStore.loadedCars.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  //sorting list by type
  sortByType = () => {
    listStore.loadedCars.sort((a, b) => {
      if (a.type < b.type) {
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
