import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('App component', () => {
  it('says hello world', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toEqual('Hello World!');
  });
});
