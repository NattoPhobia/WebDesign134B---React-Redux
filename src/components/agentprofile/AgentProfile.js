import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';

const CurrUser = {
  "username": "agent",
  "password": "1234",
  "name": "bob",
  "age": "1",
  "phone": "123456",
  "city": "San Diego",
  "ethnicity": "Asian",
  "profession": "Bookworm",
  "description": "I am cool.",
  "experience": "None.",
  "userType": "agent"
};

class AgentProfile extends React.Component {

  constructor(props) {
    super(props);

    // let currUser = CurrUser;
    // let currUser = localStorage.getItem("currUser");
    // let existingUsers = localStorage.getItem("users");

    // if (currUser !== null) {
    //   currUser = JSON.parse(currUser);
    // }

    // if (existingUsers !== null) {
    //   existingUsers = JSON.parse(existingUsers);
    // }
    this.state = {
      currUser:CurrUser
      // users: existingUsers
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let temp = this.state.currUser;
    temp[name] = value;
    this.setState({
      currUser: temp
    });
  }

  render() {
    return (
      <div>

        <Header/>


        <div id="form_container">
          <h3>Update Your Agent Profile</h3>

          <div>
            <a href=""><img id="placeholder" src={require('../../images/profile.svg')} alt=""/></a>
          </div>

          <br/>

          <form id="form">

            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" className="max_width" id="name" name="name" placeholder="Full Name"
                   value={this.state.currUser.name}
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="age">Age</label>
            <br/>
            <input type="number" className="max_width" id="age" name="age" placeholder="Age"
                   value={this.state.currUser.age}
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="phone">Phone</label>
            <br/>
            <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone"
                   value={this.state.currUser.phone}
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="city">City</label>
            <br/>
            <input type="text" className="max_width" id="city" name="city" placeholder="City"
                   value={this.state.currUser.city}
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="ethnicity">Ethnicity</label>
            <br/>
            <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
                   value={this.state.currUser.ethnicity}
                   onChange={this.handleInputChange}/>
            <br/>


            <label htmlFor="prof">Profession</label>
            <br/>
            <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
                   value={this.state.currUser.profession}
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="sex">Sex</label>
            <br/>
            <select id="sex" name="Sex" onChange={this.handleInputChange} value={this.state.currUser.sex}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/>
            <br/>

            <label htmlFor="description">Description</label>
            <br/>
            <textarea id="description" className="max_width" name="description" onChange={this.handleInputChange}
                      value={this.state.currUser.description}/>
            <br/>

            <label htmlFor="experience">Experience</label>
            <br/>
            <textarea id="experience" className="max_width" name="experience" onChange={this.handleInputChange}
                      value={this.state.currUser.experience}/>
            <br/>

            <input type="submit" onClick={this.onSubmit} value="Update"/>
          </form>

        </div>


      </div>
    );
  }
}

export default AgentProfile;
