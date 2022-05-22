import {
    action,
    configure,
    makeAutoObservable,
    runInAction,
  } from "mobx";

  import {listStore} from './ListStore'
  
  configure({ enforceActions: true });
  
  class DeleteStore {
    selectedId;
  
    constructor() {
      makeAutoObservable(this, {
        deleteHandler: action,
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
  
  
    //fetch DELETE method function
    deleteHandler = async () => {
      await fetch(
        `https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/${this.selectedId}.json`,
        {
          method: "DELETE",
        }
      );
      runInAction(() => {
        listStore.fetchCars();
      });
    };
  
  }
  
  const deleteStore = new DeleteStore();
  
  export { deleteStore };
  