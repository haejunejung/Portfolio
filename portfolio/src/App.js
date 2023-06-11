import React from "react";
import "./App.css";
import ME from "./me.jpg";

function App() {
  return (
    <React.Fragment>
      <section className="card">
        <div style={{ float: "left" }}>
          <img className="my-picture__" alt="it's me" src={ME} />
        </div>
        <div className="explain_container__">
          <header className="title">
            <div>정해준 (Haejune, Jung)</div>
            <div style={{ color: "#37B9F1" }}>미래의 개발자</div>
          </header>
          <main className="explain_me__">
            <div>Phone: +82 10-2009-9422</div>
            <div>E-mail: gowns0408@gmail.com</div>
            <div>Github: https://github.com/haejunejung</div>
            <div>TIL: https://haejunejung.github.io/TIL</div>
            <div>Blog: https://github.com/haejunejung.github.io</div>
            <div>AboutMe: https://haejunejung.github.io/AboutMe</div>
            <div>Portfolio: https://haejunejung.github.io/Portfolio</div>
          </main>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
