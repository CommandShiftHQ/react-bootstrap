import React from 'react';

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
  const {
    date,
    description,
    humidity,
    icon,
    temperature,
    wind
  } = props.detail[0];
  return (
    <div>
      <span>date:{date}</span>
      <br />
      <span>description:{description}</span>
      <br />
      <span>humidity:{humidity}</span>
      <br />
      <span>icon:{icon}</span>
      <br />
      <span>
        temperature min: {temperature.min} max:{temperature.max}
      </span>
      <br />
      <span>wind speed: {wind}</span>
    </div>
  );
};

export default ForecastDetails;
