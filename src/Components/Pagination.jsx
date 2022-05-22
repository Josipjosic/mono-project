import React from "react";
import stylePag from "./Pagination.module.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {

  const pageNumbers = [];

  console.log(totalItems)
  console.log(itemsPerPage)
  console.log(pageNumbers)

  
  //pagnation logic for list 
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={stylePag.Pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={stylePag.PageItem}>
            <a onClick={() => paginate(number)}  href="#!" className={stylePag.PageLink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
