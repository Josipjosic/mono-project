import React from "react";
import ItemData from "./ItemData";
import { useEffect, useState } from "react";
import "./List.scss";
import {store, useStore} from "../Stores/store"
import { observer } from "mobx-react-lite";

const List = () => {
  const [cars, setCars] = useState();
  const [searchCar, setSearchCar] = useState([]);

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
          setCars(loadedCars);
        });
    }
    fetchCars();
  }, []);

  const rootStore = useStore();


  const handleInput = (event) => {
    setSearchCar(event.target.value);
  };

  const filteredCars =
    store.list &&
    store.list.filter((car) => {
      return car.name
        .toLowerCase()
        .includes(searchCar.toString().toLowerCase());
    });

  const handleChange = () => {
    store.setList(cars);
  };

  console.log(rootStore);
  const observerList = observer(store.list)

  return (
    <div className="ListUi">
      <input
        className="ListSearchInput"
        type="text"
        onChange={handleInput}
        placeholder="Search by name"
      ></input>
      <div className="SortingControl">
        <button onClick={handleChange} style={{ color: "red" }}>
          Fetch List
        </button>
        <button>Sort by ID</button>
        <button>Sort by Name</button>
        <button>Sort by Type</button>
      </div>
      <div className="ListControl">
        <div className="ListFilters">
          <h4>ID</h4>
          <h4>Name</h4>
          <h4>Type</h4>
        </div>
      </div>
      <section className="SectionList">
        {observerList && <ItemData carDetail={filteredCars} />}
      </section>
    </div>
  );
};
export default observer(List);
