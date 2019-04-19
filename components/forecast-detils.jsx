import React from 'react';
import moment from 'moment';

/* detail is an array of objects,
    each object has keys:

date: 1525046400000
description: "Clear"
humidity: 30
icon: "800"
temperature: {max: 11, min: 4}
wind: {speed: 13, direction: "s"}

*/
const ForecastDetails = props => {
  const { date, wind, humidity, temperature } = props.detail;
  return (
    <div>
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
  );
};

export default ForecastDetails;
