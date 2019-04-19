import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const dateStyle = {
  color: '#f5d6ff'
};
const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'space-around',
  position: 'relative',
  fontSize: '80px',
  // border: '3px solid black',
  color: '#bcf2ef'
};

const ForecastSummary = props => {
  return (
    <div className="forecast-summary">
      <span style={dateStyle}>{moment(props.date).format('ddd-Do-MMM')}</span>
      <br />
      <span>{props.description}</span>
      <br />
      <hr />
      <WeatherIcon style={iconStyle} name="owm" iconId={props.icon} />
      <br />
      <span className="forecast-summary-temperature">
        temperature Max: {props.temperature}℃
      </span>
    </div>
  );
};

export default ForecastSummary;
