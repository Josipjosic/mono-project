import React from "react";
import Editor from "../Components/Editor";
import List from "../Components/List";
import { Link } from "react-router-dom";
import style from "../Layouts/CreatePage.module.scss";

const CreatePage = () => {
  return (
    <div>
      <h1 className={style.AppTitle}>Create</h1>
      <div className={style.navbar}>
        <ul className={style.a}>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/edit">Edit</Link>
        </ul>
      </div>
      <Editor />
      <List />
    </div>
  );
};

export default CreatePage;
