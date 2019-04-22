import React from 'react';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => (
  <div className="forecast-details">

    <div className="details__date"><span>{moment(props.forecast.date).format('ddd Do MMM')}</span></div>

    <div className="details__icon"><WeatherIcon name="owm" iconId={props.forecast.icon} /></div>

    <div className="details__temp-max"><span>Max Temperature: {props.forecast.temperature.max}°C </span></div>

    <div className="details__temp-min"><span>Min Temperature: {props.forecast.temperature.min}°C </span></div>

    <div className="details__wind-speed"><span>Wind: {props.forecast.wind.speed}mph </span></div>

    <div className="details__humidity"><span>Humidity: {props.forecast.humidity}</span></div>

  </div>

);

export default ForecastDetails;
