import React from "react";
import Draggable from "react-draggable";

export default function draggableBox({ classname, title, id, color }) {
  return (
    <Draggable bounds="parent">
      <div className={classname} style={{ backgroundColor: color }}>
        <span>{title}</span>
        <form>
          <input type="text" placeholder="Type text" />
          <button id={id}>Submit</button>
        </form>
      </div>
    </Draggable>
  );
}
