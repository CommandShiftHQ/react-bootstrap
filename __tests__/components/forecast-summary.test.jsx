import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date, description, icon and max temp for the day', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />

  ));
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('mockDate');
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
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__icon').text()).toEqual('mockIcon');
});
