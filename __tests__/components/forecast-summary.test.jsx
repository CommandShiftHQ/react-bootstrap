import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date= {1555496618}
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />

  ));
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('Mon 19th Jan');
});

it('renders the temperature for the day', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('mockTemperature');
});

it('renders a description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders an icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="<WeatherIcon />"
    />
  ));
  expect(wrapper.find('.forecast-summary__icon').text()).toEqual('<WeatherIcon />');
});
