import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import TIL from "./screens/TIL/TIL";
import Projects from "./screens/Projects/Projects";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/TIL" element={<TIL />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
