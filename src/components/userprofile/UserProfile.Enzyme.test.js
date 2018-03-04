import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import UserProfile from './UserProfile';

require.extensions['.svg'] = () => {
};

function setup() {
  return mount(<UserProfile/>);
}

describe('UserProfile via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders h3', () => {
    const wrapper = setup();
    expect(wrapper.find('#update_profile_tag').text()).toEqual('Update Profile');
  });

  it('input fields should be filled properly', () => {
    const wrapper = setup();
    const credentials = {
      name: "user",
      age: "1",
      phone: '111222333',
      ethnicity: 'Asian',
      profession: 'Doctor',
      sex: 'Male',
      description: 'I am cool.',
      experience: 'None, really.'
    };

    expect(wrapper.find('#name').length).toBe(1);
    const nameInput = wrapper.find('#name');
    nameInput.value = credentials.name;
    expect(nameInput.value).toBe('user');

    expect(wrapper.find('#age').length).toBe(1);
    const ageInput = wrapper.find('#name');
    ageInput.value = credentials.age;
    expect(ageInput.value).toBe('1');

    expect(wrapper.find('#phone').length).toBe(1);
    const phoneInput = wrapper.find('#phone');
    phoneInput.value = credentials.phone;
    expect(phoneInput.value).toBe('111222333');

    expect(wrapper.find('#ethnicity').length).toBe(1);
    const ethInput = wrapper.find('#ethnicity');
    ethInput.value = credentials.ethnicity;
    expect(ethInput.value).toBe('Asian');

    expect(wrapper.find('#prof').length).toBe(1);
    const profInput = wrapper.find('#prof');
    profInput.value = credentials.profession;
    expect(profInput.value).toBe('Doctor');

    expect(wrapper.find('#sex').length).toBe(1);
    const sexInput = wrapper.find('#sex');
    sexInput.value = credentials.sex;
    expect(sexInput.value).toBe('Male');
  });

});
