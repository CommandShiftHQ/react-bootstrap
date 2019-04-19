import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../src/styles/app.scss';
import ForecastDetails from './forecast-detils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.forecasts[0]
    };
  }

  render() {
    return (
      <div className="forecast">
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
        />
        <br />
        <ForecastSummaries forecasts={this.props.forecasts} />
        <br />
        <br />
        <ForecastDetails detail={this.state.selectedDate} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string.isRequired
  }).isRequired,
  forecasts: PropTypes.array.isRequired
};

export default App;
