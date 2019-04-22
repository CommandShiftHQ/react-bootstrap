import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-detils';

import '../src/styles/app.scss';

const URL = 'https://mcr-codes-weather.herokuapp.com/forecast?city=';
const town = 'hull';

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
  }

  componentDidMount() {
    fetch(`${URL}${town}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ forecasts: data.forecasts });
        this.setState({
          location: {
            city: data.location.city,
            country: data.location.country,
          },
        });
      });
  }

  handleForecastSelected = date => {
    this.setState({
      selectedDate: date,
    });
  };

  render() {
    const chooseSelectedForecastByDate = this.state.forecasts.find(forecast => {
      return forecast.date === this.state.selectedDate.date;
    });

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <br />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelected}
        />
        <br />
        <br />
        {chooseSelectedForecastByDate && (
          <ForecastDetails detail={chooseSelectedForecastByDate} />
        )}
      </div>
    );
  }
}

export default App;
