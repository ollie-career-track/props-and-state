import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor component', () => {
  it('renders random color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
