import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Progress from './Progress';

require.extensions['.svg'] = () => {
};

function setup() {
  return mount(<Progress/>);
}

describe('Progress Screen via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders progress boxes', () => {
    const wrapper = setup();
    expect(wrapper.find('.progress_li').length).toBe(5);
  });

  it('renders progress text', () => {
    const wrapper = setup();
    expect(wrapper.find('.progress_text').length).toBe(5);
  });

  it('renders modal', () => {
    const wrapper = setup();

    expect(wrapper.find('#taskModal').length).toBe(1);
  });

  it('renders hidden modal', () => {
    const wrapper = setup();
    const modal = wrapper.find('#taskModal');
    let style = modal.prop('style').display;

    expect(modal.length).toBe(1);
    expect(style).toBe("none");
  });

  it('shows modal onclick', () => {
    const wrapper = setup();
    const modal = wrapper.find('#taskModal');
    let style = modal.prop('style').display;

    expect(modal.length).toBe(1);
    expect(style).toBe("none");
    wrapper.find('#add_to_do').simulate('click');

    style = modal.prop('style').display;
    expect(style).toBe("block");
  });

  it('render progress color', () => {
    const wrapper = setup();
    const progress_boxes = wrapper.find('.progress_li');
    expect(progress_boxes.first().prop('style').background).toBe('dodgerblue');
  });

  it('select progress', () => {
    const wrapper = setup();
    const progress_boxes = wrapper.find('.progress_li');
    expect(progress_boxes.first().prop('style').background).toBe('dodgerblue');
    progress_boxes.first().simulate('click');
    expect(progress_boxes.first().prop('style').background).toBe("blue");
  });

});
