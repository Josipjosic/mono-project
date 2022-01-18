import React from "react";
import "../Layouts/Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  
  //pagnation logic for list 
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="Pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="PageItem">
            <a onClick={() => paginate(number)}  href="#!" className="PageLink">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
