import React from 'react';
import {Link} from 'react-router';
import '../../styles/ChooseAgent.css';
import Header from '../../components/common/Header.js';

const ReviewObjects =
  [
    {
      name: 'Review 1: pretty good',
      rating: 'Rating: ★★★★☆'
    },
    {
      name: 'Review 2: awesome',
      rating: 'Rating: ★★★★★'
    },
    {
      name: 'Review 3: okay',
      rating: 'Rating: ★★★☆☆'
    },
    {
      name: 'Review 4: not bad huh',
      rating: 'Rating: ★★★★☆'
    }

  ];

class ChooseAgent extends React.Component {
  constructor(props) {
    super(props);
    this.keyCount = 0;
    this.state = {};
  }

  getKey() {
    return this.keyCount++;
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox ?' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render_reviews_list() {
    return ReviewObjects.map((mappedObject, index) => {
      return (
        <div>
        <div key={index} className="review_panel">
          <p className="review_number" style=
            {{fontSize: '20px', fontWeight: 'bold'}}>{mappedObject.name}</p>
          <p className="review_rating" style=
            {{fontSize: '20px', fontWeight: 'bold'}}>{mappedObject.rating}</p>
        </div>
          <br/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <Header/>
        <h1>Choose an Agent</h1>
        <div className="agent">
          <div className="choose_agent_left_panel">
            <img className="agent_photo" src={'http://ofad.org/files/daily-photo/ofad-photo-of-0741.jpg'} alt=""/>
          </div>

          <div className="choose_agent_right_panel">
            <h3 id="name">Agent Name: John Johnson</h3>
            <h3 id="age">Age: 32</h3>
            <h3 id="location">Location: San Mateo, CA</h3>
            <h3 id="rating">Rating: ★★★☆☆</h3>
            <h3 id="experience">Experience: A LOT</h3>
          </div>
        </div>
        <br/>
        {this.render_reviews_list()}
        <Link to="/agent">
          <button className="back_button">Back</button>
        </Link>
        <Link to="/requested">
          <button className="request_button">Request</button>
        </Link>
      </div>
    );
  }
}

export default ChooseAgent;
