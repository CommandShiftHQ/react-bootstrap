import React from "react";
import ForecastSummary from "./forcast-summary";

const ForecastSummaries = props => {
  return (
    <div className="forecast-summaries">
      {props.forecasts.map((forecasts, index) => {
        console.log("forecasts", forecasts.temperature);
        return (
          <ForecastSummary
            key={forecasts.date}
            date={forecasts.date}
            description={forecasts.description}
            icon={forecasts.icon}
            temperature={forecasts.temperature.max}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
