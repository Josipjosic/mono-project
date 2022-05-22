
import { store } from "../Stores/Store";
import stylesData from "./ItemData.module.scss";
import Pagination from "../Components/Pagination";
import { listStore } from "../Stores/ListStore";
import { observer } from "mobx-react-lite";
import { useLocation } from 'react-router-dom'
import { deleteStore } from "../Stores/DeleteStore";

const ItemData = (props) => {
  //setting number of items per list

  const indexOfLastItem = store.currentPage * store.itemsPerPage ;
  const indexOfFirstPost = indexOfLastItem - store.itemsPerPage;
  const currentPost = props.carDetail.slice(indexOfFirstPost, indexOfLastItem);

  //updates selected number of page
  const paginate = (pageNumber) => {
    store.setCurrentPage(pageNumber);
  };

  const listedCars = props.carDetail.length
  

  console.log(listedCars)


  //sets location 
  const location = useLocation();

  //checks if url includes 'edit', if so, conditional redner for delete buttons
  const isLocatedEdit = location.pathname.includes('edit')

  return (
    <div className={stylesData.EditorCom}>
      {currentPost.map((car) => (
        <div key={car.id} className={stylesData.detailsGrid} tabIndex="1">
          <ul className={stylesData.detailsGridItems}>
            <li
              className={stylesData.gridItem }
              key={car.name}
            >
              {car.name}
            </li>
            <li
              className={stylesData.gridItem }
              key={car.type}
            >
              {car.type}
            </li>
            {isLocatedEdit && <button
              className={stylesData.EditorCom.button}
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete ${car.name} ${car.type} from the list?`
                  )
                ) {
                  deleteStore.deleteHandler(deleteStore.setSelectedId(car.id));
                }
              }}
            >
              Delete
            </button>}
          </ul>
        </div>
      ))}
      <div>
        <Pagination
          itemsPerPage={store.itemsPerPage}
          totalItems={listedCars}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default observer(ItemData);