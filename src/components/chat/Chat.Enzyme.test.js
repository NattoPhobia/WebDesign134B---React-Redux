import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Chat from './Chat';

require.extensions['.svg'] = () => {};

function setup() {
  return mount(<Chat/>);
}

describe('Chat via Enzyme', () => {
  it('renders default friends list', () => {
    const wrapper = setup();
    expect(wrapper.find('.user_select').length).toBe(4);
  });

  it('renders default messages', () => {
    const wrapper = setup();
    expect(wrapper.find('.user_message').length).toBe(1);
    expect(wrapper.find('.friend_message').length).toBe(1);
  });

  it('chat input should work properly', () => {
    const wrapper = setup();
    const chatText = "abc123";

    expect(wrapper.find('#chat_text').length).toBe(1);

    const chatTextInput = wrapper.find('#chat_text');
    chatTextInput.value = chatText;
    expect(chatTextInput.value).toBe("abc123");
  });
});
