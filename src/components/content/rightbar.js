import React, {useState} from "react";
import "./rightbar.scss";
import profile from "../../assets/profile.jpeg";
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import './calendar.css'


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
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
        console.log(date)
    }

  return (
    <div className="right-nav">
      <div className="active-class border">
        <div className="title">
          <h4 className="text-white">Active Classes</h4>
        </div>
        <img src={profile} />
        <h2 className="text-white">Prof Okolo</h2>
        <p className="text-white">Remote Business Analyses</p>
        <button className="text-white bg-secondary">Enter</button>
      </div>
      <div className="active-class">
        <div className="title">
          <h4 className="text-white">Messages</h4>
        </div>
        {Messages.map((msg) => (
          <div key={msg.id} className="message">
            <img src={profile} />
            <h2 className="text-white">{msg.sender}</h2>
            <p className="text-white">{msg.message}</p>
            <button className="text-white bg-secondary">Reply</button>
          </div>
        ))}
      </div>

      <div className="calender">
          <Calendar defaultActiveStartDate={new Date()} onChange={onChange} showNavigation={true} />
      </div>
    </div>
  );
};

export default RightBar;
