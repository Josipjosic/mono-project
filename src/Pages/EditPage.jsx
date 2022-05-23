import React from "react";
import List from "./List";
import style from "./EditPage.module.scss";
import Menu from "../Layouts/Menu";
import Editor from "../Pages/Editor"

const EditPage = () => {
  return (
    <div>
      <h1 className={style.editorTitle}>Edit</h1>
      <Menu />
      <Editor />
      <List />
    </div>
  );
};

export default EditPage;
