import React from 'react';
import {Link} from 'react-router';
import '../../styles/Chat.css';
import Header from '../common/Header';

const FriendObjects =
  [
    {
      name: 'Tom Jones',
      image_url: 'https://media.istockphoto.com/photos/feeling-great-about-my-corporate-choices-picture-id507296326'
    },
    {
      name: 'Johnny Bravo',
      image_url: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg'
    },

    {
      name: 'Anthony Lee',
      image_url: 'http://www.recyclesourcellc.com/images/stockp.png'
    },

    {
      name: 'Johnson Johnson',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrAvPUbN63ARQ9l-Z5GaFkRTKv8ZK15n5Q-SNF77SFedahHon'
    }
  ];

const MessageObjects = [
  {
    text: 'Hi, my name is John!',
    timestamp: '11:00:02 AM',
    image_url: 'http://www.recyclesourcellc.com/images/stockp.png',
    message_type: 'userMessage'
  },

  {
    text: 'Hello there, my name is Bob! How can I help you?',
    timestamp: '11:01:00 AM',
    image_url: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg',
    message_type: 'friendMessage'
  }

];

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatText: ''
    };

    this.handleChatPress = this.handleChatPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleChatPress(event) {
    if (event.key === 'Enter') {
      const message = this.state.chatText;
      const time = new Date().toLocaleTimeString();
      MessageObjects.push({
        text: message,
        timestamp: time,
        image_url: 'http://www.recyclesourcellc.com/images/stockp.png',
        message_type: 'userMessage'
      });

      this.setState({
        chatText: ''
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render_friends_list() {
    return FriendObjects.map((mappedObject, index) => {
      return (
        <div key={index} className="user_select">
          <img className="profile_photo" src={mappedObject.image_url} alt="profile_photo"/>
          <p className="friend_name">{mappedObject.name}</p>
          <Link to="/progress">
            <button className="to_progress">...</button>
          </Link>
        </div>
      );
    });
  }

  render_messages() {
    return MessageObjects.map((mappedObject, index) => {
      if (mappedObject.message_type === 'userMessage') {
        return (<div key={index} className="user_message">
          <img className="profile_photo_right" src={mappedObject.image_url} alt="Avatar"/>
          <p className="right">{mappedObject.text}</p>
          <span className="time-left">{mappedObject.timestamp}</span>
        </div>);
      } else {
        return (
          <div key={index} className="friend_message">
            <img className="profile_photo" src={mappedObject.image_url} alt="Avatar"/>
            <p className="left">{mappedObject.text}</p>
            <span className="time-right">{mappedObject.timestamp}</span>
          </div>
        );
      }
    });

  }

  render() {
    return (
      <div className="customContainer">
        <Header/>

        <div className="top_bar no_pad flex">
          <div className="chat_left_panel_bar">
          </div>
          <div className="chat_right_panel_bar center">
            <p id="friend_name">Bob jones</p>
          </div>
        </div>

        <div className="flex chatbox no_pad">
          <div id="friend_panel" className="chat_left_panel no_pad">
            {this.render_friends_list()}
          </div>
          <div className="chat_right_panel no_pad">
            <div id="chat">
              {this.render_messages()}
            </div>
            <div className="empty"/>
            <input name="chatText" id="chat_text" className="enter_text no_pad" placeholder="Type Here!"
                   value={this.state.chatText}
                   onChange={this.handleInputChange} onKeyPress={this.handleChatPress}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;

