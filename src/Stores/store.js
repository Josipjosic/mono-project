import {makeAutoObservable} from 'mobx';
import { useContext, createContext } from 'react'


class Store {
    list = []
    
    constructor() {
        makeAutoObservable(this)
    }
    
    setList = (list) => {
        this.list = list;
        
    }
}
const store = new Store()
const StoreContext = createContext(store)

const useStore = () => {
  const context = useContext(StoreContext)
  if (context === undefined) {
      throw new Error ('Something went wrong')
  }
  return context;
 }

export {store, useStore}