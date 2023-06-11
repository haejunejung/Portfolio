import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import TodayILearned from "./components/TIL/TodayILearned";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/TIL" element={<TodayILearned />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
