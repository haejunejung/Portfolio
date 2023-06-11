import React from "react";
import "./App.css";
import ME from "./me.jpg";

function App() {
  return (
    <React.Fragment>
      <section className="card">
        <div style={{ float: "left" }}>
          <img
            alt="it's me"
            src={ME}
            style={{
              width: "150px",
              height: "380px",
              marginLeft: "25px",
              marginTop: "60px",
              marginRight: "25px",
            }}
          />
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
      {/* <div className="card"> */}
      {/* <div style={{ position: "relative" }}>
          {" "}
          <img
            src={ME}
            alt="It's ME"
            style={{
              width: "200px",
              height: "400px",
              position: "absolute",
              border: "solid 10px black",
            }}
          />
        </div>
        <div
          style={{
            width: "600px",
            height: "400px",
            position: "absolute",
            border: "solid 10px black",
            textAlign: "center",
          }}
        >
          <div className="title">haejuenjug</div>
          <div>Phone: +82 10-2009-9422</div>
          <div>E-mail: gowns0408@gmail.com</div>
          <div>Github: https://github.com/haejunejung</div>
          <div>AboutMe: https://haejunejung.github.io/AboutMe</div>
          <div>Portfolio: https://haejunejung.github.io/Portfolio</div>
        </div>
      </div> */}
      {/* <div
        className="card"
        style={{
          backgroundColor: "white",
          position: "relative",
          width: "600px",
          height: "400px",
        }}
      >
        <img
          src={ME}
          alt="It's ME"
          style={{
            width: "200px",
            height: "400px",
            position: "absolute",
            border: "solid 10px black",
          }}
        />
        <div style={{ textAlign: "center", border: "solid 10px black" }}>
          <div className="title">haejuenjug</div>
          <div>Phone: +82 10-2009-9422</div>
          <div>E-mail: gowns0408@gmail.com</div>
          <div>Github: https://github.com/haejunejung</div>
          <div>AboutMe: https://haejunejung.github.io/AboutMe</div>
          <div>Portfolio: https://haejunejung.github.io/Portfolio</div>
        </div> */}
      {/* <div class="box">
          <div class="wave -one"></div>
          <div class="wave -two"></div>
          <div class="wave -three"></div>
          <div class="title">Capacities</div>
        </div> */}
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;

// import React from "react";
// import "./App.scss";

// function App() {
//   return (
//     <React.Fragment>
//       <div class="box">
//         <div class="wave -one"></div>
//         <div class="wave -two"></div>
//         <div class="wave -three"></div>
//         <div class="title">Capacities</div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;
