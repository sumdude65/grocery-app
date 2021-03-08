import React from "react";

export const Project = (props) => {
  const { title, img, description, tech, live, source } = props.props;
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="buttons">
        <a href={source}>Source</a>
        <a href={live}>Demo</a>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="tech">
        {tech.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </div>
    </div>
  );
};
