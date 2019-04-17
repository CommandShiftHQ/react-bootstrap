import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../components/forcast-summary';

it('takes temperature, date, descripte and icon and displays them in spans', () => {
  const wrapper = Enzyme.shallow(
    <ForecastSummary
      temperature="mockTemp"
      date="mock date"
      description="mock Description"
      icon="mock icon"
    />
  );
  expect(wrapper.find('.forecast-summary-temperature').text()).toEqual(
    'temperature Max: mockTemp℃'
  );
});
