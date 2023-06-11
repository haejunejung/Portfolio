import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TodayILearned from "./components/TIL/TodayILearned";
import Projects from "./components/Project/Project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <section>
        <Link to="/">홈</Link>
        <Link to="/TIL">하루하루의 기록들</Link>
        <Link to="/projects">프로젝트 소개</Link>
      </section>
      <section>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/TIL" element={<TodayILearned />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </section>
    </BrowserRouter>
  </React.StrictMode>
);
