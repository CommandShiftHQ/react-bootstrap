import React from 'react';
import ForecastSummary from '../../components/forcast-summary';
import ForecastSummaries from '../../components/forecast-summaries';
import Enzyme from 'enzyme';

const forecasts = [
  {
    date: 'date1',
    description: 'desc1',
    icon: 'icon1',
    temperature: {
      max: 999
    }
  },
  {
    date: 'date2',
    description: 'desc2',
    icon: 'icon2',
    temperature: {
      max: 909
    }
  }
];
it('renders the correct amount of summary components from the parent', () => {
  const wrapper = Enzyme.shallow(<ForecastSummaries forecasts={forecasts} />);
  expect(wrapper.find(ForecastSummary).length).toBe(2);
});

it('takes the forecast and passes the corect date values', () => {
  const wrapper = Enzyme.shallow(<ForecastSummaries forecasts={forecasts} />);
  expect(
    wrapper.find(ForecastSummary).forEach((node, index) => {
      expect(node.prop('date')).toEqual(forecasts[index].date);
      expect(node.prop('description')).toEqual(forecasts[index].description);
      expect(node.prop('icon')).toEqual(forecasts[index].icon);
      expect(node.prop('temperature')).toEqual(
        forecasts[index].temperature.max
      );
    })
  );
});
