import React, { useState } from "react";
import "./sidebar.scss";

import dashboard from "../../assets/icons/dashboard.svg";
import calender from "../../assets/icons/Calendar.svg";
import list from "../../assets/icons/list.svg";
import message from "../../assets/icons/Message.svg";
import statistic from "../../assets/icons/Statistics.svg";
import add from "../../assets/icons/Add.svg";

const menuItems = [
  { link: "Dashboard", icon: require("../../assets/icons/dashboard.svg") },
  { link: "Courses", icon: require("../../assets/icons/dashboard.svg") },
  { link: "Resources", icon: require("../../assets/icons/dashboard.svg") },
  { link: "Tasks", icon: require("../../assets/icons/list.svg") },
  { link: "Messages", icon: require("../../assets/icons/Message.svg") },
  { link: "Schedule", icon: require("../../assets/icons/Calendar.svg") },
  { link: "Reports", icon: require("../../assets/icons/Statistics.svg") },
];

const Sidebar = ({ children }) => {
  const [active, SetActive] = useState("Resources");
  const handleClick = (value) => {
    SetActive(value);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="inner">
          {menuItems.map((menu, index) => (
            <div
              key={index + 1}
              className={`side-menu-item ${
                active === menu.link ? "active" : null
              }`}
              onClick={() => handleClick(menu.link)}
            >
              <img src={menu.icon} />
              <p className="menu-item-text"> {menu.link}</p>
            </div>
          ))}

          <div className="connect-apps pl-2 pr-2">
            <div className="title">
              <p className="text-white">Connect Apps</p>
              <button className="bg-clear">
                <img src={add} />
              </button>
            </div>
            <div className="connect-item">
              <img src={statistic} />
              <p>Google Drive</p>
            </div>
            <div className="connect-item">
              <img src={statistic} />
              <p>Acrobat</p>
            </div>
            <div className="connect-item">
              <img src={statistic} />
              <p>Word</p>
            </div>
            <div className="connect-item">
              <img src={statistic} />
              <p>Excel</p>
            </div>
          </div>
          <div className="logout pl-2">
            <button className="bg-secondary text-white">
              Logout <img src={statistic} />
            </button>
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Sidebar;
