import React from "react";
import Draggable from "react-draggable";

export default function draggableBox({
  classname,
  title,
  id,
  color,
  formHandler,
}) {
  return (
    <Draggable bounds="parent">
      <div className={classname} style={{ backgroundColor: color }}>
        <span>{title}</span>
        <form onSubmit={formHandler}>
          <input name="message" type="text" placeholder="Type text" required />
          <button id={id}>Submit</button>
        </form>
      </div>
    </Draggable>
  );
}
