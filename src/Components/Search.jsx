import React from 'react'
import styleList from '../Pages/List.module.scss'
import { store } from '../Stores/Store';

const Search = () => {

     //set value for search by name input
   const handleInput = (event) => {
    store.searchCar = (event.target.value);
  };
  return (
    <div>
        <input
        className={styleList.ListSearchInput}
        type="text"
        onChange={handleInput}
        placeholder="Search by car name"
      ></input>
    </div>
  )
}

export default Search