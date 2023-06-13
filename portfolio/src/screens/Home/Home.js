import React from "react";
import "./Home.css";
import ME from "./me.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <React.Fragment>
        <section className="card">
          <div
            id="card-front"
            className="card-front"
            style={{ display: "flex" }}
          >
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
              <div className="occupation">개발자 꿈나무</div>
              <div className="info">
                <div className="value">Phone: +82 10-2009-9422</div>
                <div className="value">E-mail: gowns0408@gmail.com</div>
                <div className="value">
                  Github:{" "}
                  <Link to="https://github.com/haejunejung">
                    https://github.com/haejunejung
                  </Link>
                </div>
                <div className="value">
                  Blog:{" "}
                  <Link to="https://haejunejung.github.io">
                    https://haejunejung.github.io
                  </Link>
                </div>
                <div className="value">
                  TIL:{" "}
                  <Link to="https://leather-river-49e.notion.site/7a97411a3b8b49bd82dd5bd7103efc93?v=bc7f75c189e949bc9ba99e9e5782ccbe&pvs=4">
                    하루하루의 기록들
                  </Link>
                </div>
                <div className="value">
                  Projects: <Link to="/Projects">개인&팀 프로젝트</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  );
};

export default Home;
