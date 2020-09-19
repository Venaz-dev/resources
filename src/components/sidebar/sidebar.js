import React from "react";
import "./sidebar.scss";

import dashboard from "../../assets/icons/dashboard.svg";
import calender from "../../assets/icons/Calendar.svg";
import list from "../../assets/icons/list.svg";
import message from "../../assets/icons/Message.svg";
import statistic from "../../assets/icons/Statistics.svg";
import add from '../../assets/icons/Add.svg'

const Sidebar = ({children}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <a href="#">
          <div className="side-menu-item">
            <img src={dashboard} />
            <p className="menu-item-text"> Dashboard</p>
          </div>
        </a>

        <a href="#">
          <div className="side-menu-item">
            <img src={dashboard} />
            <p className="menu-item-text"> Courses</p>
          </div>
        </a>
        <a href="#">
          <div className="side-menu-item">
            <img src={dashboard} />
            <p className="menu-item-text"> Resources</p>
          </div>
        </a>
        <a href="#">
          <div className="side-menu-item">
            <img src={list} />
            <p className="menu-item-text"> Tasks</p>
          </div>
        </a>
        <a href="#">
          <div className="side-menu-item">
            <img src={message} />
            <p className="menu-item-text"> Messages</p>
          </div>
        </a>

        <a href="#">
          <div className="side-menu-item">
            <img src={calender} />
            <p className="menu-item-text"> Schedule</p>
          </div>
        </a>
        <a href="#">
          <div className="side-menu-item">
            <img src={statistic} />
            <p className="menu-item-text"> Reports</p>
          </div>
        </a>
        <div className="connect-apps pl-2 pr-2">
          <div className="title">
            <p className="text-white">Connect Apps</p>
            <img src={add} />
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
            <button className="bg-secondary text-white">Logout  <img src={statistic} /></button>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
