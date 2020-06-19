import React from "react";
import SideMenu from "components/SideMenu";
import Header from "components/Header";
import RightSection from "components/RightSection";
import SlidePanel from "components/SlidePanel";
import { StateContext } from "state-context";

function App() {
  const { state } = React.useContext(StateContext);
  return (
    <div className="main-app">
      <Header />
      <div className="main-body">
        <SideMenu />
        {state.shouldSlideOpen && (
          <SlidePanel selectedMenu={state.selectedMenu} />
        )}
        <RightSection />
      </div>
    </div>
  );
}

export default App;
