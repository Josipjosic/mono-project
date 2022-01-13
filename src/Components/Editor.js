import { useRef, useState } from "react";
import "./Editor.scss";
import EditorCom from './EditorCom'

const isEmpty = (value) => value.trim() === "";

const Editor = (props) => {
  const [formInputsValidity, setFormInputValidity] = useState({
    id: true,
    name: true,
    type: true,
  });

  const idInputRef = useRef();
  const nameInputRef = useRef();
  const typeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredType = typeInputRef.current.value;

    const enteredIdisValid = !isEmpty(enteredId);
    const enteredNameisValid = !isEmpty(enteredName);
    const enteredTypeisValid = !isEmpty(enteredType);

    setFormInputValidity({
      id: enteredIdisValid,
      name: enteredNameisValid,
      type: enteredTypeisValid,
    });

    const formIsValid =
      enteredIdisValid && enteredNameisValid && enteredTypeisValid;

    if (!formIsValid) {
      return;
    }

  };
  return (
    <div className="EditorUi">
      <h2>Enter Info</h2>
      <form className="EditorContent" onSubmit={confirmHandler}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" ref={idInputRef}></input>
        {!formInputsValidity.id && <p>please enter a ID</p>}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>please enter a name</p>}
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeInputRef}></input>
        {!formInputsValidity.type && <p>please enter a type</p>}
        <EditorCom onSubmitHandler={EditorCom}></EditorCom>
      </form>
    </div>
  );
};
export default Editor;
