import React from "react";
import ItemData from "./ItemData";
import { useEffect, useState } from "react";
import "./List.scss";

function List() {
  const [cars, setCar] = useState();
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
          setCar(loadedCars);
        });
    }
    fetchCars();
  }, []);

  const handleInput = (event) => {
    setSearchCar(event.target.value);
  };

  const filteredCars =
    cars &&
    cars.filter((car) => {
      return car.name
        .toLowerCase()
        .includes(searchCar.toString().toLowerCase());
    });

    //sorting the list
    const sortByName = cars && cars.sort((a, b) => {
      if(b.name > a.name) return -1;
      return 1;
    })


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
          <h4>ID</h4>
          <h4>Name</h4>
          <h4>Type</h4>
        </div>
      </div>
      <section>{cars && <ItemData carDetail={filteredCars} />}</section>
    </div>
  );
}

export default List;
