import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";

const App = props => {
  return (
    <div>
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <br />
      <ForecastSummaries
        forecasts={props.forecasts}
        // temperature={props.forecasts.temperature.max}
        // date={props.forecasts.date}
        // description={props.forecasts.description}
        // icon={props.forecasts.icon}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string
  }).isRequired,
  forecasts: PropTypes.array.isRequired
};
export default App;
