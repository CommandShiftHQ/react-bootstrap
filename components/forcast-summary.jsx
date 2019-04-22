import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const dateStyle = {
  color: '#f5d6ff',
};
const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  fontSize: '80px',
  color: '#bcf2ef',
};

const btnStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
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
      <br />
      <button style={btnStyle} onClick={() => props.onSelect(props)}>
        More Details
      </button>
    </div>
  );
};

export default ForecastSummary;
