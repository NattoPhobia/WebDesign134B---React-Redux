import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import UserSignUp from './UserSignup';

require.extensions['.svg'] = () => {};

function setup(saving) {
  return mount(<UserSignUp/>);
}

describe('UserSignup via Enzyme', () => {
  it('Checking elements', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('sex').text().length).toBe(3);
    expect(wrapper.find('part_sex').text().length).toBe(3);
    expect(wrapper.find('h3').text()).toEqual('User Registration');
  });

});
