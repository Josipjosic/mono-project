import React, { useEffect } from "react";
import ItemData from "./ItemData";
import  styleList from "../Layouts/List.module.scss";
import { observer } from "mobx-react-lite";
import { listStore } from "../Common/ListStore";
import { store } from "../Common/Store";

const List = () => {

  const update = listStore.confirmHandler

  //renders list when first started, updates list when confirmHanlder function fires
  useEffect(() => {
    listStore.fetchCars()
  }, [update])

   //set value for search by name input
   const handleInput = (event) => {
    store.searchCar = (event.target.value);
  };

  //search by name input logic
  const filteredCars =
  listStore.loadedCars &&
  listStore.loadedCars.filter((car) => {
    return car.name?.toLowerCase()
      .includes(store.searchCar.toString().toLowerCase());
  });


  return (
    <div className={styleList.ListUi}>
      <input
        className={styleList.ListSearchInput}
        type="text"
        onChange={handleInput}
        placeholder="Search by car name"
      ></input>
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
