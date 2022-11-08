import React from "react";
import "./Navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <div className="nav_box">
      <header>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShow(true)}
          className="home"
        >
          <h3>Home</h3>
        </div>

        <div
          onClick={() => setShow(false)}
          className="cart"
          style={{ float: "right" }}
        >
          <img
            style={{ float: "right" }}
            className="cart-image"
            src="./images/cart.png"
            alt="cart"
          />

          <h3
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              padding: "5px",
              float: "right",
            }}
          >
            {size}
          </h3>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
