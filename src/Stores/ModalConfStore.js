import {
    configure,
    makeAutoObservable,
    observable,
  } from "mobx";

  
  configure({ enforceActions: true });
  
  class ShowConfModal {
    state = false;

  
    constructor() {
      makeAutoObservable(this, {
        state: observable,
      });

    }
    setState = (state) => {
        this.state = state;
    }

  }
  
  const showConfModal = new ShowConfModal();
  
  export { showConfModal };
  