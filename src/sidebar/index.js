import React from "react";

const Sidebar = (props) => {
  return (
    <div className="sidebar">

      <select onChange={props.handleStrokeWidthChange}>
        <option value="2">2px</option>
        <option value="4">4px</option>
        <option value="6">6px</option>
        <option value="8">8px</option>
      </select>
      <input type="color" value={props.strokeColor} onChange={props.handleStrokeColorChange} />
      <button onClick={props.handleClearCanvas}>Clear Canvas</button>
    </div>
  );
};

export default Sidebar;