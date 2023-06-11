import React from "react";
import "./App.css";
import ME from "./me.jpg";

function App() {
  return (
    <React.Fragment>
      <section className="card">
        <div id="card-front" className="card-front" style={{ display: "flex" }}>
          <div className="card-avatar">
            <img
              alt="it's me"
              src={ME}
              style={{
                marginLeft: "3rem",
                marginRight: "1rem",
                width: "7rem",
                height: "14rem",
              }}
            />
          </div>
          <div className="card-details">
            <div id="name" className="name">
              정해준 (Haejune, Jung)
            </div>
            <div className="occupation">미래의 개발자</div>
            <div className="info">
              <div className="value">Phone: +82 10-2009-9422</div>
              <div className="value">E-mail: gowns0408@gmail.com</div>
              <div className="value">
                Github: https://github.com/haejunejung
              </div>
              <div className="value">Blog: https://haejunejung.github.io</div>
              <div className="value">TIL: 준비중...</div>
              <div className="value">Portfolio: 준비중...</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
