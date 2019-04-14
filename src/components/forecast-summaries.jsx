import React from 'react';

import ForecastSummary from './forecast-summary';


const ForecastSummaries = props => (

  <div className="forecast-summaries">
  
    {
  
        props.forecasts.map(forecast => (
  
          <ForecastSummary

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
