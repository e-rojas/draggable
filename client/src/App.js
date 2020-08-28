import React from "react";
import "./App.scss";
import logo from "./images/logo.png";

import DraggableBox from "./components/draggabble";
export default function App() {
  // ::::::: RANDOM ID ::::::::::::::
  const ID = () => "_" + Math.random().toString(36).substr(2, 9);
  // ::::::: FORM HANDLER ::::::::::::::
  const formHandler = (e, btn_id) => {
    const formData = new FormData(e.target);
    const data = {};
    e.preventDefault();
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
      data.id = btn_id;
    }
    document.getElementById(btn_id).disabled = true;
    e.target.reset();
  };
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <h1>Product Customer Service Forms</h1>
      <div className="container">
        <div className="grid-row">
          <div className="grid-item">
            <h4>Delivery</h4>
            {[
              {
                classname: "delivery-box",
                id: ID(),
                title: "Delivery experience?",
                color: "#A4F0E6",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "On time expected?",
                color: "#A4F0E6",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "Any feedback!",
                color: "#A4F0E6",
              },
            ].map((box, index) => (
              <DraggableBox
                key={index}
                classname={box.classname}
                id={box.id}
                title={box.title}
                color={box.color}
                formHandler={(e) => formHandler(e, box.id)}
              />
            ))}
          </div>
          <div className="grid-item">
            <h4>Quality</h4>
            {[
              {
                classname: "delivery-box",
                id: ID(),
                title: "Product quality?",
                color: "#FFD2D3",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "Quality expected?",
                color: "#FFD2D3",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "Quality feedback!",
                color: "#FFD2D3",
              },
            ].map((box, index) => (
              <DraggableBox
                key={index}
                classname={box.classname}
                id={box.id}
                title={box.title}
                color={box.color}
                formHandler={(e) => formHandler(e, box.id)}
              />
            ))}
          </div>
          <div className="grid-item">
            <h4>Satisfaction</h4>
            {[
              {
                classname: "delivery-box",
                id: ID(),
                title: "Product condition?",
                color: "#7DA6BF",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "Email confirmation?",
                color: "#7DA6BF",
              },
              {
                classname: "delivery-box",
                id: ID(),
                title: "Overall feedback!",
                color: "#7DA6BF",
              },
            ].map((box, index) => (
              <DraggableBox
                key={index}
                classname={box.classname}
                id={box.id}
                title={box.title}
                color={box.color}
                formHandler={(e) => formHandler(e, box.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
