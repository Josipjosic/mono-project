import React from 'react';
import './Editor.scss';

function Editor () {
    return (
        <div className='EditorUi'>
             <h2>Enter Info</h2>
         <div className='EditorContent'>
             <h3>ID</h3>
             <input></input>
             <h3>Name</h3>
             <input></input>
             <h3>Type</h3>
             <input></input>
             <h3>Year</h3>
             <input></input>
         </div>
         <div className='EditorCom'>
             <button>Confirm</button>
             <button>Delete</button>
         </div>
    </div>
    )
}

export default Editor;