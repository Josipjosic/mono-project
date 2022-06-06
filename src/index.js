import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import Menu from "./Layouts/Menu"

ReactDOM.render(
  <div>
    <h1 className="appTitle">Simple list app</h1>
  <BrowserRouter>
  <Menu />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/create" element={<CreatePage />}/>
      <Route path="/edit/:id/:name/:type/:modelType" element={<EditPage />}/>
    </Routes>
  </BrowserRouter>
  </div>,
  document.getElementById("root")
);
