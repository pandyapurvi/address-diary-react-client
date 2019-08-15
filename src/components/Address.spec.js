import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Address } from './Address';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Address', () => {
    it('should render a address', () => {
        const mockData = {
            streetNumber: '87th',
            street:'Miller',
            suburb:'North Sydney',
            postcode: '2001',
            state : 'NSW',
            unitNumber: '23',
            streetType: '',
            propertyType: 'House', 
            id: '3'
          };
          const wrapper = shallow(<Address data={mockData} />);
          const address = wrapper.find('.address');
          expect(address).to.have.length(1);
    });

});