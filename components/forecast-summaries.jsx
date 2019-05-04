import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forcast-summary';
import '../src/styles/forecast-summaries.scss';

const ForecastSummaries = props => {
  return (
    <div className="forecast-summaries">
      {props.forecasts.map(forecast => (
        <ForecastSummary
          onSelect={props.onForecastSelect}
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))}
    </div>
  );
};

ForecastSummaries.propTypes = {
  onSelect: PropTypes.func,
};

export default ForecastSummaries;
