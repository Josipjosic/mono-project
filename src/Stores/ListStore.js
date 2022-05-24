import {
  action,
  configure,
  makeAutoObservable,
  observable,
  runInAction,
} from "mobx";

configure({ enforceActions: true });

class ListStore {
  loadedCars = [];
  selectedId;

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,
      setLoadedCars: action,
      fetchCars: action,
    });
  }
  //set received data from fetch cars function
  setLoadedCars = (loadedCar) => {
    this.loadedCars = loadedCar;
  };


  //fetch cars function
  async fetchCars() {
    const response = await fetch(
      "https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
     response.json().then((data) => {
      const loadedCar = [];
      for (const key in data) {
        loadedCar.push({
          id: key,
          name: data[key].name,
          type: data[key].type,
          key: data[key].id,
        });
      }
      runInAction(() => {
        this.setLoadedCars(loadedCar);
      });
    });
  }
}

const listStore = new ListStore();

export { listStore };
