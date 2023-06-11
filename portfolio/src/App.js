import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import TodayILearned from "./components/TIL/TodayILearned";
import Projects from "./components/Projects/projects";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/TIL" element={<TodayILearned />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
