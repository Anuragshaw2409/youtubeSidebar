import React from "react";
import Youtube from "../assets/Youtube.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [fullSideBar, setFullSideBar] = useState(true);
  function handleSideBar() {
    setFullSideBar(!fullSideBar);
  }
  let currlocation = useLocation();
  console.log(currlocation);

  return (
    <div className={fullSideBar === true ? "sidebar" : "sidebarActive"}>
      <div className="logoContainer">
        <div className="burgerButton" onClick={handleSideBar}>
          <div className="bars"></div>
        </div>
        <img src={Youtube} alt="youtube" />
      </div>

      <div className="homeContainer">
        <ul className="flex">
          <li
            className={
              currlocation.pathname === "/" ? "links flex active" : "links flex"
            }
          >
            <i className="ri-home-4-line"></i>
            <a href="/">Home</a>
          </li>
          <li
            className={
              currlocation.pathname === "/shorts"
                ? "links flex active"
                : "links flex"
            }
          >
            <i className="ri-flashlight-line"></i> <a href="/shorts">Shorts</a>
          </li>
          <li
            className={
              currlocation.pathname === "/subscriptions"
                ? "links flex active"
                : "links flex"
            }
          >
            <i className="ri-airplay-line"></i>
            <a href="/subscriptions">Subscriptions</a>
          </li>
        </ul>
      </div>

      <div className="libraryContainer">
        <ul className="flex">
          <li
            className={
              currlocation.pathname === "/library"
                ? "links flex active"
                : "links flex"
            }
          >
            <i className="ri-booklet-fill"></i> 
            <a href="/library">Library</a>
          </li>
          <li
            className={
              currlocation.pathname === "/history"
                ? "links flex active"
                : "links flex"
            }
          >
            {" "}
            <i className="ri-time-line"></i>
            <a href="/history">History</a>
          </li>
          <li
            className={
              currlocation.pathname === "/yourvideos"
                ? "links flex active"
                : "links flex"
            }
          >
            {" "}
            <i className="ri-play-list-line"></i>
            <a href="/yourvideos">Your Videos</a>
          </li>
          <li
            className={
              currlocation.pathname === "/watchlater"
                ? "links flex active"
                : "links flex"
            }
          >
            {" "}
            <i className="ri-time-line"></i>
            <a href="/watchlater">Watch Later</a>
          </li>
          <li
            className={
              currlocation.pathname === "/likedvideos"
                ? "links flex active"
                : "links flex"
            }
          >
            {" "}
            <i className="ri-heart-line"></i>
            <a href="/likedvideos">Liked Videos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
