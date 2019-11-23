import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => {
  console.log(props);
  return (
    <h1>
      <div className="forecast-details__date">
        <span>{moment(props.forecast.date).format('ddd Do MMM')}</span>
      </div>
      <div className="forecast-details__temperature-max">Max Temperature: {props.forecast.temperature.max}°C</div>
      <div className="forecast-details__temperature-min">Min Temperature: {props.forecast.temperature.min}°C</div>
      <div className="forecast-details__humidity">Humidity: {props.forecast.humidity}%</div>
      <div className="forecast-details__wind-speed">Wind Speed: {props.forecast.wind.speed}mph</div>
    </h1>
  );
};

export default ForecastDetails;
