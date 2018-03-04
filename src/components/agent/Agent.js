import React from 'react';
import {Link} from 'react-router';
import '../../styles/Agent.css';
import Header from '../../components/common/Header.js';

const AgentObjects =
  [
    {
      name: 'John',
      rating: '★★★☆☆',
      location: 'San Mateo, CA',
      image_url: 'http://ofad.org/files/daily-photo/ofad-photo-of-0741.jpg'
    },
    {
      name: 'Claire',
      rating: '★★★★☆',
      location: 'Oakland, CA',
      image_url: 'https://media1.popsugar-assets.com/files/thumbor/ff_oJAeTchqOU_0amyS301lcNYs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/25/031/n/28443503/b375f4ec599f6521405213.88369699_edit_img_cover_file_43929576_1503556562/i/Steph-Claire-Smith-Diet-Day-Plate.jpg'
    },
    {
      name: 'Arnold',
      rating: '★★☆☆☆',
      location: 'San Francisco, CA',
      image_url: 'https://www.randomlists.com/img/people/arnold_schwarzenegger.jpg'
    },
    {
      name: 'Sean',
      rating: '★★★★★',
      location: 'San Diego, CA',
      image_url: 'https://media.pitchfork.com/photos/5929914e5e6ef9596931ea92/1:1/w_300/3f1ff2bc.jpg'
    }

  ];

class Agent extends React.Component {
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

  render_agents_list() {
    return AgentObjects.map((mappedObject, index) => {
      return (
        <div key={index} className="user_select">


          <div className="agent_left_panel">
            <img className="agent_photo" src={mappedObject.image_url} alt=""/>
          </div>

          <div id="agent_right_panel" className="agent_right_panel">
            <p className="agent_rating" style={{marginTop: '50px'}}>{mappedObject.rating}</p>
            <p className="agent_name">{mappedObject.name}</p>
            <p className="agent_location">{mappedObject.location}</p>
          </div>

          <div className="agent_rightmost_panel">
            <Link to="/chooseagent">
              <button style={{width: '60px', height: '55px', marginTop: '90px', fontWeight: 'bold'}}>
                <text style={{fontSize: '30px'}}>></text>
              </button>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="">
        <Header/>
        <div className="no_pad container">
          <div className="content">
            <h1>Find an Agent</h1>

            <div id="sort_div">
              <label className="sortby" htmlFor="sort">Sort By: </label>

              <select id="sort" name="sort">
                <option value="rating">Best Rating</option>
                <option value="nearest">Nearest</option>
                <option value="youngest">Youngest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
            {this.render_agents_list()}
          </div>
        </div>
      </div>
    );
  }
}

export default Agent;
