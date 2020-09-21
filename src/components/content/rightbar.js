import React, { useState, useRef } from "react";
import "./rightbar.scss";
import profile from "../../assets/profile.jpeg";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import "./calendar.css";

const Messages = [
  {
    id: 1,
    sender: "Solomon Grunt",
    message:
      " Had the best time of my life yesterday, how do we get this courses sorted out",
  },
  { id: 2, sender: "Prof Okolo", message: "yesterday was really fun thanks" },
  { id: 3, sender: "Melody James", message: "hahahaha. good for you" },
  {
    id: 4,
    sender: "Venaz Jude",
    message:
      " Had the best time of my life yesterday, how do we get this courses sorted out",
  },
];

const RightBar = () => {
  const [date, setDate] = useState(new Date());

  const arrowRef = useRef();

  const onChange = (date) => {
    setDate(date);
    console.log(date);
  };

  const [openMessage, setOpenMessage] = useState(false);
  const [openClasses, setOpenClasses] = useState(false);

  const toogleMessages = () => {
    setOpenMessage(!openMessage);
    if (openMessage) {
      arrowRef.current.style.transform = "rotate(-90deg)";
    } else {
      arrowRef.current.style.transform = "rotate(0)";
    }
  };

  return (
    <div className="right-nav">
      <div className="active-class border">
        <div className="title" onClick={() => setOpenClasses(!openClasses)}>
          <h4 className="text-white">Active Classes</h4>
          <img
            ref={arrowRef}
            className={openClasses ? "arrow-down" : null}
            src={require("../../assets/icons/drop_arrow.svg")}
          />
        </div>
        <div className={openClasses ? "d-block" : "d-none"}>
          <img src={profile} />
          <h2 className="text-white">Prof Okolo</h2>
          <p className="text-white">Remote Business Analyses</p>
          <button className="text-white bg-secondary">Enter</button>
        </div>
      </div>
      <div className="active-class border">
        <div className="title" onClick={toogleMessages}>
          <h4 className="text-white">Messages</h4>
          <img
            ref={arrowRef}
            src={require("../../assets/icons/drop_arrow.svg")}
          />
        </div>
        <div className={openMessage ? "d-block" : "d-none"}>
          {Messages.map((msg) => (
            <div key={msg.id} className="message">
              <img src={profile} />
              <h2 className="text-white">{msg.sender}</h2>
              <p className="text-white">{msg.message}</p>
              <button className="text-white bg-secondary">Reply</button>
            </div>
          ))}
        </div>
      </div>

      <div className="calender">
        <Calendar
          defaultActiveStartDate={new Date()}
          onChange={onChange}
          showNavigation={true}
        />
      </div>
    </div>
  );
};

export default RightBar;
