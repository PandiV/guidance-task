import * as React from "react";
import Photos from "assets/icons/photo.svg";
import Elements from "assets/icons/layout.svg";
import Templates from "assets/icons/template.svg";
import Text from "assets/icons/font.svg";
import Videos from "assets/icons/video.svg";
import Bkground from "assets/icons/grid.svg";
import Uploads from "assets/icons/upload.svg";
import Folders from "assets/icons/folder.svg";
import More from "assets/icons/dot.svg";
import { sideMenuList } from "constantsValue";
import { StateContext } from "state-context";

const SideMenu = () => {
  const { state, dispatch } = React.useContext(StateContext);

  return (
    <div className="side-menu">
      <ul className="side-menu-list">
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Templates,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Templates ? "selected" : ""
          }
        >
          <img src={Templates} alt="Templates icon" />
          {sideMenuList.Templates}
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Photos,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Photos ? "selected" : ""
          }
        >
          <img src={Photos} alt="Photos icon" />
          {sideMenuList.Photos}
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Elements,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Elements ? "selected" : ""
          }
        >
          <img src={Elements} alt="Elements icon" />
          {sideMenuList.Elements}
        </li>
        <li
          onClick={() =>
            dispatch({ selectedMenu: sideMenuList.Text, shouldSlideOpen: true })
          }
          className={state.selectedMenu === sideMenuList.Text ? "selected" : ""}
        >
          <img src={Text} alt="Text icon" />
          Text
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Videos,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Videos ? "selected" : ""
          }
        >
          <img src={Videos} alt="Videos icon" />
          Videos
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Bkground,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Bkground ? "selected" : ""
          }
        >
          <img src={Bkground} alt="Bkground icon" />
          Bkground
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Uploads,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Uploads ? "selected" : ""
          }
        >
          <img src={Uploads} alt="Uploads icon" />
          Uploads
        </li>
        <li
          onClick={() =>
            dispatch({
              selectedMenu: sideMenuList.Folders,
              shouldSlideOpen: true,
            })
          }
          className={
            state.selectedMenu === sideMenuList.Folders ? "selected" : ""
          }
        >
          <img src={Folders} alt="Folders icon" />
          Folders
        </li>
        <li
          onClick={() =>
            dispatch({ selectedMenu: sideMenuList.More, shouldSlideOpen: true })
          }
          className={state.selectedMenu === sideMenuList.More ? "selected" : ""}
        >
          <img src={More} alt="More icon" />
          More
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
