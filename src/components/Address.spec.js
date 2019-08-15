import React from 'react';
import { shallow } from 'enzyme';
import Address from './Address';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import moxios from 'moxios';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Address', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    const mockResponse = {
      result: {
        data: [
          {
            streetNumber: '87th',
            street:'Miller',
            suburb:'North Sydney',
            postcode: '2001',
            state : 'NSW',
            unitNumber: '23',
            streetType: '',
            propertyType: 'House', 
          }
        ]
      }
    }
    it('should render a address', () => {
      moxios.stubRequest('/', {
        responseText: mockResponse,
        status: 200,
      });
      const wrapper = shallow(<Address />);
      console.log(wrapper.debug());
      const address = wrapper.find('.address');
      expect(address).to.have.length(1);
    });

});