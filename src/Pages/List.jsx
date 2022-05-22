import React, { useEffect } from "react";
import ItemData from "../Pages/ItemData";
import  styleList from "./List.module.scss";
import { observer } from "mobx-react-lite";
import { listStore } from "../Stores/ListStore";
import { store } from "../Stores/Store";
import { deleteStore } from "../Stores/DeleteStore";
import Search from "../Components/Search";

const List = () => {

  const updateOnAdd = listStore.confirmHandler
  const updateOnDelete = deleteStore.deleteHandler

  //renders list when first started, updates list when confirmHanlder function fires
  useEffect(() => {
    listStore.fetchCars()
  }, [updateOnAdd, updateOnDelete])

  //search by name input logic
  const filteredCars =
  listStore.loadedCars &&
  listStore.loadedCars.filter((car) => {
    return car.name?.toLowerCase()
      .includes(store.searchCar.toString().toLowerCase());
  });


  return (
    <div className={styleList.ListUi}>
      <Search />
      <div className={styleList.ListControl}>
        <div className={styleList.ListFilters}>
          <h4 onClick={store.sortByName}>Name</h4>
          <h4 onClick={store.sortByType}>Type</h4>
        </div>
      </div>
      <section className={styleList.SectionList}>
        {listStore.loadedCars  && <ItemData carDetail={filteredCars}/>}
      </section>
    </div>
  );
};
export default observer(List);
