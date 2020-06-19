import React, { useReducer, useEffect } from "react";

let reducer = (state, newState) => {
  return { ...state, ...newState };
};

const localState = JSON.parse(localStorage.getItem("state"));

const initialState = {
  selectedMenu: "",
  shouldSlideOpen: false,
  droppedElementList: {},
};

const StateContext = React.createContext(null);

function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
