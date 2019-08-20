import React from 'react';
import ForecastSummary from './forecast-summary';

import '../styles/forecast-summaries.scss';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
        props.forecasts.map(forecast => (
          <ForecastSummary
            onSelect={this.props.onForecastSelect}
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon}
            temperature={forecast.temperature.max}
          />
        ))
      }
  </div>
);

export default ForecastSummaries;
