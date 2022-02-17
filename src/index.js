import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/create" element={<CreatePage />}/>
      <Route path="/edit" element={<EditPage />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
