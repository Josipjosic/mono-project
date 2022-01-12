import React from 'react';
import './App.css';
import List from './Components/List';
import Editor from './Components/Editor';

function App() {
  return (
    <div className="App">
      <h1 className='AppTitle'>Simple list app</h1>
      <Editor />
      <List />
    </div>
  );
}

export default App;
