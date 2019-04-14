import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';

const forecasts = [{
  date: 123456,
  description: 'date1',
  icon: 'icon1',
  temperature: {
    max: 99,
  },
},

{
  date: 65432,
  description: 'date2',
  icon: 'icon2',
  temperature: {
    max: 888,
  },

},
];

it('renders the correct amount of ForecastSummary componets', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  expect(wrapper.find(ForecastSummary).length).toEqual(2);
});

it('passes the correct values from each forecast into each ForecastSummary', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  wrapper.find(ForecastSummary).forEach((node, index) => {
    expect(node.prop('date')).toEqual(forecasts[index].date);
    expect(node.prop('description')).toEqual(forecasts[index].description);
    expect(node.prop('icon')).toEqual(forecasts[index].icon);
    expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
  });
});
