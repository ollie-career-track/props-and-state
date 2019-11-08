import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders color display', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='green'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
