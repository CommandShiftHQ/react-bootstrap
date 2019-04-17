import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../src/styles/app.scss';

const App = props => {
  return (
    <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <br />
      <ForecastSummaries forecasts={props.forecasts} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string.isRequired
  }).isRequired,
  forecasts: PropTypes.array.isRequired
};
export default App;
