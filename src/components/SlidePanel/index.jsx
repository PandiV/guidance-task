import React from "react";
import SearchForm from "./SearchForm";
import ChartWidgets from "./ChartWidgets";
import { sideMenuList } from "constantsValue";

const SlidePanel = ({ selectedMenu }) => {
  return (
    <div className="main-slide-panel">
      <SearchForm />
      <div>
        {selectedMenu === sideMenuList.Elements ? <ChartWidgets /> : "No data "}
      </div>
    </div>
  );
};

export default SlidePanel;
