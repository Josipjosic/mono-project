import React from "react";
import ItemData from "./ItemData";
import { useEffect, useState } from "react";
import "../Layouts/List.scss";
import {store} from "../Stores/store"
import { observer } from "mobx-react-lite";

const List = () => {
  const [searchCar, setSearchCar] = useState([]);
  // main fetcg function for loading up data on page load
  useEffect(() => {
    function fetchCars() {
      fetch(
        "https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const loadedCars = [];
          for (const key in data) {
            loadedCars.push({
              id: key,
              name: data[key].name,
              type: data[key].type,
              IdNum: data[key].id,
              key: data[key].id,
            });
          }
          store.setList(loadedCars);
        });
    }
    fetchCars();
  }, []);
  
  //set value for search by name input
  const handleInput = (event) => {
    setSearchCar(event.target.value);
  };

  //search by name input logic
  const filteredCars =
  store.list &&
  store.list.filter((car) => {
    return car.name
      .toLowerCase()
      .includes(searchCar.toString().toLowerCase());
  });

  return (
    <div className="ListUi">
      <input
        className="ListSearchInput"
        type="text"
        onChange={handleInput}
        placeholder="Search by name"
      ></input>
      <div className="ListControl">
        <div className="ListFilters">
          <h4 onClick={store.sortById}>ID</h4>
          <h4 onClick={store.sortByName}>Name</h4>
          <h4 onClick={store.sortByType}>Type</h4>
        </div>
      </div>
      <section className="SectionList">
        {store.list && <ItemData carDetail={filteredCars} />}
      </section>
    </div>
  );
};
export default observer(List);
