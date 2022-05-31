import React from "react";
import "../styles/Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-container">
        {/* Picture */}
        <div className="container-img flex-col center-center" style={{backgroundColor: 'transparent'}}>
          <img src="images/pictures/yo.PNG" alt="" />
        </div>

        {/* Text */}
        <div className="container-text flex-col center-center" style={{backgroundColor: 'transparent'}}>
          <div className="">
              <p className="title">FRONTEND DEVELOPER</p>
          <div className="subtitle-social flex-row">
            <div className="subtitle flex-row center-center">
              <p>Never stop learning</p>
            </div>
            <div>
              <img src="icons/git.png" alt="git icon" className="git" />
              <img src="icons/li.png" alt="linkedIn icon" />
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
