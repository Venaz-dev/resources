import React from "react";
import "./resources.scss";

const resource = [
  { title: "General Business Principles", teacher: "Professor Godswil" },
  { title: "Economic Course", teacher: "Economic Course" },
  { title: "The Design of Business Anthics", teacher: "Professor  Salamanda"},
  { title: "Getting things Ready", teacher: "Getting things Ready"},
  { title: "Make your time Count", teacher: "Professor Gambashi"},
];

const Resources = () => {
  return (
    <div className="resource">
      
      {
          resource.map((res, index) => (
            <div key={index + 1} className="resource-item">
            <div className="text">
              <h1>{res.title}</h1>
              <p>{res.teacher}</p>
            </div>
            <div className="download-btn">
              <button className="bg-secondary text-white">Download</button>
            </div>
          </div>
          ))
      }
    </div>
  );
};

export default Resources;
