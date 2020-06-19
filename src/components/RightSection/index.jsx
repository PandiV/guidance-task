import React from "react";
import { StateContext } from "state-context";

const RightSection = () => {
  const { state, dispatch } = React.useContext(StateContext);

  const handleDrop = (e) => {
    const size = document.getElementById("container").getBoundingClientRect();
    let droppedElementList = { ...state.droppedElementList };
    const imageURL = e.dataTransfer.getData("text/plain");
    droppedElementList[imageURL] = {
      key: imageURL,
      style: {
        top: `${e.pageY - size.top}px`,
        left: `${e.pageX - size.left}px`,
        position: "absolute",
      },
      src: imageURL,
    };
    dispatch({
      droppedElementList,
    });
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="right-section">
      <div
        id="container"
        className="container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {Object.keys(state.droppedElementList).map((data) =>
          React.createElement("img", state.droppedElementList[data], null)
        )}
      </div>
    </div>
  );
};

export default RightSection;
