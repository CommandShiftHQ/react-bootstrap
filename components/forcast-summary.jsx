import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const dateStyle = {
  color: '#f5d6ff'
};

const ForecastSummary = props => {
  return (
    <div className="forecast-summary">
      <span style={dateStyle}>{moment(props.date).format('ddd-Do-MMM')}</span>
      <hr />
      <br />
      <span>description: {props.description}</span>
      <br />
      <WeatherIcon name="owm" iconId={props.icon} />
      <br />
      <span className="forecast-summary-temperature">
        temperature Max: {props.temperature}℃
      </span>
    </div>
  );
};

export default ForecastSummary;
