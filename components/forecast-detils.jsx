import React from 'react';
import moment from 'moment';

const detailStyle = {
  border: '3px black solid',
  borderRadius: '7px',
  padding: '10px 10px',
  marginBottom: '7px',
};

const forecastDetailsWrapper = {
  display: 'flex',
  justifyContent: 'center',
};

const ForecastDetails = props => {
  const { date, wind, humidity, temperature } = props.detail;
  return (
    <div style={forecastDetailsWrapper}>
      <div style={detailStyle}>
        <span>date: {moment(date).format('Do-MMM-YY ')}</span>
        <br />
        <span>
          temperature min: {temperature.min}°C max: {temperature.max}°C
        </span>
        <br />
        <span>humidity: {humidity}%</span>
        <br />
        <span>wind speed: {wind.speed} mph</span>
        <br />
        <span>wind direction: {wind.direction.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ForecastDetails;
