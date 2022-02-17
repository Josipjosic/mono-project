import { store } from "../Common/Store";
import stylesData from "../Layouts/ItemData.module.scss";
import Pagination from "./Pagination";
import { listStore } from "../Common/ListStore";
import { observer } from "mobx-react-lite";
import { useLocation } from 'react-router-dom'

const ItemData = (props) => {
  //setting number of items per list

  const indexOfLastItem = store.currentPage * store.itemsPerPage;
  const indexOfFirstPost = indexOfLastItem - store.itemsPerPage;
  const currentPost = props.carDetail.slice(indexOfFirstPost, indexOfLastItem);

  //updates selected number of page
  const paginate = (pageNumber) => {
    store.setCurrentPage(pageNumber);
  };

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
                  listStore.deleteHandler(listStore.setSelectedId(car.id));
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
          totalItems={listStore.loadedCars.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default observer(ItemData);
