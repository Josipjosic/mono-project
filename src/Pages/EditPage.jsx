import React from "react";
import List from "./List";
import style from "./EditPage.module.scss";
import Menu from "../Layouts/Menu";

const EditPage = () => {
  return (
    <div>
      <h1 className={style.editorTitle}>Editor</h1>
      <Menu />
      <List />
    </div>
  );
};

export default EditPage;
