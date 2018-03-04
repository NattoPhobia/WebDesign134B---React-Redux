import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import ChooseAgent from './ChooseAgent';

require.extensions['.svg'] = () => {};

function setup() {
    return mount(<ChooseAgent/>);
}

it('renders name', () => {
    const wrapper = setup();
    expect(wrapper.find('.choose_agent_right_panel').find('#name').text()).toEqual('Agent Name: John Johnson');
});

it('renders rating', () => {
    const wrapper = setup();
    expect(wrapper.find('.choose_agent_right_panel').find('#rating').text()).toEqual('Rating: ★★★☆☆');
});

it('renders request', () => {
    const wrapper = setup();
    expect(wrapper.find('.request_button').text()).toEqual('Request');
});

it('renders back', () => {
    const wrapper = setup();
    expect(wrapper.find('.back_button').text()).toEqual('Back');
});