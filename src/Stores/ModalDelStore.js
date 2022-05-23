import {
    configure,
    makeAutoObservable,
    observable,
  } from "mobx";

  
  configure({ enforceActions: true });
  
  class ShowModal {
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
  
  const showModal = new ShowModal();
  
  export { showModal };
  