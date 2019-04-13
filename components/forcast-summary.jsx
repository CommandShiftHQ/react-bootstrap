import React from "react";

const ForecastSummary = props => {
  return (
    <div className="forecast-summary">
      <span>date: {props.date}</span>
      <br />
      <span>description: {props.description}</span>
      <br />
      <span>icon: {props.icon}</span>
      <br />
      <span>temperature Max: {props.temperature}</span>
    </div>
  );
};

export default ForecastSummary;
