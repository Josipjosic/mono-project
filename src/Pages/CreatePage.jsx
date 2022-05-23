import React from "react";
import style from "./CreatePage.module.scss";
import Menu from "../Layouts/Menu";
import Creator from "./Creator";

const CreatePage = () => {
  return (
    <div>
      <h1 className={style.AppTitle}>Create</h1>
      <Menu />
      <Creator />
    </div>
  );
};

export default CreatePage;
