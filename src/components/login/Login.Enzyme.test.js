import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Login from './Login';

require.extensions['.svg'] = () => {};

function setup() {
  return mount(<Login/>);
}

describe('LoginForm via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders h3', () => {
    const wrapper = setup();
    expect(wrapper.find('h3').text()).toEqual('Hummingbird');
  });

  it('input fields should be filled properly', () => {
    const wrapper = setup();
    const credentials = {username: "user", password: "1234"};

    expect(wrapper.find('#username').length).toBe(1);

    const usernameInput = wrapper.find('#username');
    usernameInput.value = credentials.username;
    expect(usernameInput.value).toBe('user');

    const passwordInput = wrapper.find('#password');
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe('1234');

  });

});
