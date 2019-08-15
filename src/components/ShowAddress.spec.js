import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import ShowAddress from './ShowAddress';


Enzyme.configure({ adapter: new ReactSixteenAdapter() });


describe('ShowAddress', () => {
  it('an error when no address found', () => {
    const mockData = [];
    const wrapper = shallow(<ShowAddress address={mockData} />);
    expect(wrapper.render().text()).to.contain('Your search is not matching. Please try again.');
    //console.log(wrapper.debug());
  })
  it('should render default', () => {
    const mockData = [
      {
        id: 21,
        postcode: 2150,
        propertyType: "",
        state: "nsw",
        street: "Good street",
        streetNumber: "3",
        streetType: "",
        suburb: "Parramatta",
        unitNumber: null,
      }        
    ];

    const wrapper = shallow(<ShowAddress address={mockData} />);
    //console.log(wrapper.debug());
    const address = wrapper.find('.address');
    expect(address).to.have.length(1);
    expect(address.text()).to.contain('Good street');
  });
});