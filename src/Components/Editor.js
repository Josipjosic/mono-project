import { useState } from "react";
import "../Layouts/Editor.scss";
import { store } from "../Stores/store";
import {observer} from "mobx-react"

const Editor = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const data = {id, name, type};

  //sending data to store data value
  store.data = data

  
  return (
    <div className="EditorUi">
      <h2>Enter Info</h2>
      <form className="EditorContent" onSubmit={store.confirmHandler}>
        <label htmlFor="id" >ID</label>
        <input type="text" placeholder="Enter ID"  onChange={(event) => setId(event.target.value)}></input>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter Name"  onChange={(event) => setName(event.target.value)}></input>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" placeholder="Enter Type" onChange={(event) => setType(event.target.value)}></input>
        <div className="EditorCom">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};
export default observer(Editor);
