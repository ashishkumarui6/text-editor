import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="menuContainer light ">
        <div className="navBar">
          <div className="navBarLeft">
            <div className="logo">
              <h1 className="light">
                TextEditor
                <span className="light">.com</span>
              </h1>
            </div>
            <div className="home">
              <h1 className="light">Home</h1>
            </div>
          </div>
          <div className="navBarRight">
            <div className="toggle">
              <input type="checkbox" id="btn" />
              <label for="btn">
                <span className="track">
                  <span className="txt"></span>
                </span>
                <span className="thumb">|||</span>
              </label>
            </div>
            <p>Enable Darkmode</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
