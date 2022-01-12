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
          setCar(data);
          console.log(data)
        });
    }
    fetchCars();
  }, []);

  let carsToRender;
  if (cars) {
      carsToRender = cars.map(car => {
          return <ItemData key={car.vehicleMake.id} id={car.vehicleMake.id} name={car.vehicleMake.name} model={car.vehicleModel.name}></ItemData>
      });
  }



  return (
    <div className="ListUi">
      <div className="ListControl">
        <div className="ListFilters">
          <h4>ID</h4>
          <h4>Name</h4>
          <h4>Type</h4>
        </div>
      </div>
      <section>
          {carsToRender}
      </section>
    </div>
  );
}

export default List;
