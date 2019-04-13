import React from "react";
import LocationDetails from "./location-details";
import PropTypes from "prop-types";

const App = props => {
  return (
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string
  }).isRequired
};
export default App;
