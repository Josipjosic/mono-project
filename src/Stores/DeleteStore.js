import {
    action,
    configure,
    makeAutoObservable,
    runInAction,
  } from "mobx";

  import {listStore} from './ListStore'
  import {editorStore} from './EditorStore'
  
  configure({ enforceActions: true });
  
  class DeleteStore {

  
    constructor() {
      makeAutoObservable(this, {
        deleteHandler: action,
      });
    }

    //set selected ID for deleteHandler function
    setSelectedId = (selectedId) => {
      this.selectedId = selectedId;
      console.log(this.selectedId);
    };
  
  
    //fetch DELETE method function
    deleteHandler = async () => {
      await fetch(
        `https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/${editorStore.SelectedId}.json`,
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
  