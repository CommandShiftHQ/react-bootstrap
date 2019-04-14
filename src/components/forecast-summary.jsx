import React from 'react';


const ForecastSummary = props => (
  <div>
    <div className="forecast-summary__date"><span>{props.date}</span></div>

    <div className="forecast-summary__temperature"><span>{props.temperature}</span></div>

    <div className="forecast-summary__description"><span>{props.description}</span></div>

    <div className="forecast-summary__icon"><span>{props.icon}</span></div>
  </div>
);


export default ForecastSummary;
