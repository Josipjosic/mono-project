import { makeAutoObservable, observable } from "mobx";
import { listStore } from "./ListStore";

class Store {
  searchCar = [];
  currentPage = 1;
  itemsPerPage = 4;



  constructor() {
    makeAutoObservable(this, {
      searchCar: observable,
      currentPage: observable,
    });
  }

  // sets current page number
  setCurrentPage = (currentPage) => {
    this.currentPage = currentPage;
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
