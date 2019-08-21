import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  componentDidMount() {
    const url = 'https://mcr-codes-weather.herokuapp.com/forecast?city=Bristol';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        location: {
          city: data.location.city,
          country: data.location.country,
        },
        forecasts: data.forecasts,
      }));
  }

  render() {
    // eslint-disable-next-line max-len
    const selectedForecast =
    this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    console.log(selectedForecast);
    return (
      <React.Fragment>
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
        />
        <ForecastSummaries
          forecasts={this.props.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
