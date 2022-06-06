import React from "react";
import style from "./EditPage.module.scss";
import Editor from "../Pages/Editor"

const EditPage = () => {
  return (
    <div>
      <h1 className={style.editorTitle}>Edit</h1>
      <Editor />
    </div>
  );
};

export default EditPage;
