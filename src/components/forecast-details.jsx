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
      <div className="forecast-details__temperature-max">{props.forecast.temperature.max}</div>
      <div className="forecast-details__temperature-min">{props.forecast.temperature.min}</div>
      <div className="forecast-details__humidity">{props.forecast.humidity}</div>
      <div className="forecast-details__wind-speed">{props.forecast.wind.speed}</div>
      <div className="forecast-details__wind-direction">{props.forecast.wind.direction}</div>
    </h1>
  );
};

export default ForecastDetails;
