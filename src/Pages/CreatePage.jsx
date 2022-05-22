import React from "react";
import Editor from "./Editor";
import List from "./List";
import style from "./CreatePage.module.scss";
import Menu from "../Layouts/Menu";

const CreatePage = () => {
  return (
    <div>
      <h1 className={style.AppTitle}>Create</h1>
      <Menu />
      <Editor />
      <List />
    </div>
  );
};

export default CreatePage;
