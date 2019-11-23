import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  return (
    <h1>
      <div className="forecast-summary__date">
        <span>{moment(props.date).format('ddd Do MMM')}</span>
      </div>
      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <span className="forecast-summary__temperature">{props.temperature}°c</span>
      <br />
      <span className="forecast-summary__description">{props.description}</span>
      <br />
      <button onClick={() => props.onSelect(props.date)}>More details</button>
    </h1>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
