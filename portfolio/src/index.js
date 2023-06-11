import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TodayILearned from "./components/TIL/TodayILearned";
import Projects from "./components/Project/Project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/TIL" element={<TodayILearned />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
