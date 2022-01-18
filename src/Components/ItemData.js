import { useState } from "react";
import "../Layouts/ItemData.scss";
import Pagination from "../Pages/Pagination";
import {store} from "../Stores/store"

const ItemData = (props) => {
  const [selectedId, setSelectedId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  store.selectedId = selectedId

 

  //setting number of items per list

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastItem - itemsPerPage;
  const currentPost = props.carDetail.slice(indexOfFirstPost, indexOfLastItem);

  //change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="EditorCom">
      {currentPost.map((car) => (
        <div key={car.id} className="Details-grid">
          <h5
            className="grid-item"
            key={car.IdNum}
            onClick={() => {
              setSelectedId(car.id);
            }}
          >
            {car.IdNum}
          </h5>
          <h5
            className="grid-item"
            key={car.name}
            onClick={() => {
              setSelectedId(car.id);
            }}
          >
            {car.name}
          </h5>
          <h5
            className="grid-item"
            key={car.type}
            onClick={() => {
              setSelectedId(car.id);
            }}
          >
            {car.type}
          </h5>
        </div>
      ))}
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={props.carDetail.length}
          paginate={paginate}
        />
      </div>
      <button onClick={store.deleteHandler}>Delete</button>
    </div>
  );
};

export default ItemData;
