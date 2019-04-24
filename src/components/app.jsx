import React from 'react';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';

const URL_DATA = 'https://mcr-codes-weather.herokuapp.com/forecast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // put error in state- ?google
      searchError: '',
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        contry: '',
      },

    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  componentDidMount() {
    axios.get(URL_DATA).then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: response.data.location,
      });
    });
  }

  handleLocationSearch(city) {
    axios.get(`${URL_DATA }${city}`).then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: response.data.location,
      });
    }).catch(() => {
      alert('Location not found. Try again.');
    });
  }

  render() {
    const selectedForecast = (
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate)
    );

    return (
      <div className="Forecast">
        <LocationDetails

          city={this.state.location.city}

          country={this.state.location.country}
        />

        <SearchForm handleLocationSearch={this.handleLocationSearch} />
        <br />

        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />

        {selectedForecast && <ForecastDetails forecast={selectedForecast} />
       }

      </div>
    );
  }
}

/* App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.array.isRequired,
}; */


export default App;
