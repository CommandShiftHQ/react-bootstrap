import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import Axios from 'axios';
import SearchBar from './search-form';

import '../styles/app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleGetCity = this.handleGetCity.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleGetCity(city) {
    const url = `https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`;
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

  componentDidMount() {
    this.handleGetCity('Manchester');
  }

  render() {
    const selectedForecast =
    this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <React.Fragment>
        <SearchBar
          onSearch={this.handleGetCity}
        />
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </React.Fragment>
    );
  }
}

export default App;
