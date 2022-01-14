import { useState } from "react";
import "./Editor.scss";

const Editor = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const confirmHandler = (event) => {
    event.preventDefault();
    const data = {id, name, type};

    fetch("https://mono-6be92-default-rtdb.europe-west1.firebasedatabase.app/.json", {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
    })
  }
  

  return (
    <div className="EditorUi">
      <h2>Enter Info</h2>
      <form className="EditorContent" onSubmit={confirmHandler}>
        <label htmlFor="id" >ID</label>
        <input type="text" value={id} onChange={(event) => setId(event.target.value)}></input>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}></input>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={type} onChange={(event) => setType(event.target.value)}></input>
        <div className="EditorCom">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};
export default Editor;
