import React from "react";
import "./App.scss";
import logo from "./images/logo.png";

export default function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <h1>Product Customer Service Forms</h1>
      <div className="container">
        <div className="grid-row">
          <div className="grid-item">
            <h4>Delivery</h4>
          </div>
          <div className="grid-item">
            <h4>Quality</h4>
          </div>
          <div className="grid-item">
            <h4>Satisfaction</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
