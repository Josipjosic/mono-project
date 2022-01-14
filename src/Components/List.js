import React from "react";
import ItemData from "./ItemData";
import { useEffect, useState } from "react";
import "./List.scss";

function List() {
  const [cars, setCar] = useState();

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
          setCar(loadedCars);
        });
    }
    fetchCars();
  }, []);

   const sortItems = () => {cars.sort((a, b) => (a.name > b.name) ? 1 : -1)}

  return (
    <div className="ListUi">
      <div className="ListControl">
        <div className="ListFilters">
          <h4 onClick={sortItems}>ID</h4>
          <h4>Name</h4>
          <h4>Type</h4>
        </div>
      </div>
      <section>{cars && <ItemData carDetail={cars} />}</section>
    </div>
  );
}

export default List;
