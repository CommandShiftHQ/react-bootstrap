import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastDetails = props => (
  <h1>
    <div className="forecast-details__date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-details__temperature">{props.temperature}</div>
    <div className="forecast-details__description">{props.description}</div>
    <div className="forecast-details__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
  </h1>
);

export default ForecastDetails;
