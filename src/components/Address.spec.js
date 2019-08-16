import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Address from './Address';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('ShowAddress', () => {
  it('renders header of the page', () => {
    const mockData = 'Address Diary';
    const wrapper = shallow(<Address header={mockData} />);
    expect(wrapper.render().text()).to.contain('Address Diary');
  });
});