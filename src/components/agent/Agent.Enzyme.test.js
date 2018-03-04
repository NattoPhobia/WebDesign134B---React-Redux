import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Agent from './Agent';

require.extensions['.svg'] = () => {};

function setup() {
    return mount(<Agent/>);
}

it('renders agent name', () => {
    const wrapper = setup();
    expect(wrapper.find('.agent_right_panel').find('.agent_name').length).toBe(4);
});

it('renders sort', () => {
    const wrapper = setup();
    expect(wrapper.find('.sortby').text()).toEqual('Sort By: ');
});

it('renders header', () => {
    const wrapper = setup();
    expect(wrapper.find('.content').find('h1').text()).toEqual('Find an Agent');
});