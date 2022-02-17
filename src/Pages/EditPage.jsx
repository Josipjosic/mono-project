import React from "react";
import List from "../Components/List";
import style from '../Layouts/EditPage.module.scss'
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div>
      <h1 className={style.editorTitle}>Editor</h1>
    <div className={style.navbar}>
      <ul className={style.a}>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
      </ul>
    </div>
      <List />
    </div>
  );
};

export default EditPage;
