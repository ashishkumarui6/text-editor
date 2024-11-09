import React from "react";
import "./Navbar.css";
import Container from "../../Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="Nav">
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
            <div className="navBarRight"></div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
