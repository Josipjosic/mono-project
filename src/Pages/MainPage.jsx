import React from "react";
import List from "../Components/List";
import { Link } from "react-router-dom";
import styleMain from '../Layouts/MainPage.module.scss'

const MainPage = () => {
  return (
    <div>
    <div className={styleMain.navbar}>
      <ul className={styleMain.ul}>
        <Link to="/">Home</Link>
        <Link to="/create" exact>Create</Link>
        <Link to="/edit" exact>Edit</Link>
      </ul>
    </div>
      <List />
    </div>
  );
};

export default MainPage;
