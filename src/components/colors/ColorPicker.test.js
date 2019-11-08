import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders color picker', () => {
    const wrapper = shallow(<ColorPicker colors={['green', 'blue', 'red', 'yellow']} selectColor={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
