import React from "react";
import { imageURLList } from "constantsValue";
const ChartWidgets = () => {
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/plain", e.target.src);
  };

  return (
    <div className="chart-widgets">
      {imageURLList.map((data) => (
        <img
          onDragStart={handleDragStart}
          className="chart-image h-pointer"
          src={data}
          key={data}
          alt="bar chart icon"
          draggable
        />
      ))}
    </div>
  );
};

export default ChartWidgets;
