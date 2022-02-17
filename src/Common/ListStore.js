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
  data;

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,
      setLoadedCars: action,
      fetchCars: action,
      deleteHandler: action,
      confirmHandler: action,
    });
  }
  //set received data from fetch cars function
  setLoadedCars = (loadedCar) => {
    this.loadedCars = loadedCar;
  };
  //set selected ID for deleteHandler function
  setSelectedId = (selectedId) => {
    this.selectedId = selectedId;
    console.log(this.selectedId);
  };
  //set data for confirmHandler POST function
  setData = (data) => {
    this.data = data;
  };


  //fetch POST method function
  confirmHandler = async (event) => {
    alert(`Item ${this.data.name} ${this.data.type} added to the list!`);
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

  //fetch DELETE method function
  deleteHandler = async () => {
    await fetch(
      `https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/${this.selectedId}.json`,
      {
        method: "DELETE",
      }
    );
    runInAction(() => {
      this.fetchCars();
    });
  };

  //fetch cars function
  async fetchCars() {
    const response = await fetch(
      "https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
    const data = response.json().then((data) => {
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
