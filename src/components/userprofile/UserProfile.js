import React from 'react';
import {Link} from 'react-router';
import Header from '../../components/common/Header';

const CurrUser =
  {
    "username": "user",
    "password": "1234",
    "name": "UserTest",
    "age": "32",
    "phone": "190123",
    "city": "SD",
    "ethnicity": "Latino",
    "profession": "Chef",
    "about_me": "asff",
    "part_sex": "female",
    "part_age": "26~34",
    "part_ethnicity": "Asian",
    "userType": "user"
  };

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    // let currUser = localStorage.getItem("currUser");
    // let existingUsers = localStorage.getItem("users");

    // if (currUser !== null) {
    //   currUser = JSON.parse(currUser);
    // }
    //
    // if (existingUsers !== null) {
    //   existingUsers = JSON.parse(existingUsers);
    // }

    this.state = {
      currUser: CurrUser
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
          <h3 id="update_profile_tag">Update Profile</h3>

          <div>
            <img id="placeholder" src={require('../../images/profile.svg')} alt=""/>
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
                   value={this.state.currUser.ethnicity} onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="prof">Profession</label>
            <br/>
            <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
                   value={this.state.currUser.profession} onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="sex">Sex</label>
            <br/>
            <select id="sex" name="Sex" value={this.state.currUser.sex} onChange={this.handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/><br/>

            <h3>Looking For</h3>
            <br/>

            <label htmlFor="part_sex">Sex</label>
            <br/>
            <select id="part_sex" value={this.state.currUser.part_sex} onChange={this.handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/>

            <br/>
            <label htmlFor="part_age">Age</label>
            <br/>
            <select id="part_age" name="part_age" value={this.state.currUser.part_age}
                    onChange={this.handleInputChange}>
              <option>23 or below</option>
              <option>26~34</option>
              <option>35~45</option>
              <option>45 or above</option>
            </select>
            <br/>

            <br/>
            <label htmlFor="part_ethnicity">Ethnicity</label>
            <br/>
            <input type="text" className="max_width" id="part_ethnicity" name="part_ethnicity" placeholder="Ethnicity"
                   value={this.state.currUser.part_ethnicity} onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="city_dist">Distance</label>
            <br/>
            <select id="city_dist" name="city_dist" value={this.state.currUser.distance}
                    onChange={this.handleInputChange}>
              <option>4 miles or less</option>
              <option>5~14 miles</option>
              <option>15~24 miles</option>
              <option>25~34 miles</option>
              <option>35 miles or above</option>
            </select>

            <br/>
            <br/>
            <label htmlFor="about_me">About Me</label>
            <br/>
            <textarea className="max_width" id="about_me" name="about_me"
                      placeholder="Enter something you'd like people to know about you!"
                      value={this.state.currUser.about_me} onChange={this.handleInputChange}/>

            <input type="submit" value="Update"/>
          </form>

        </div>
      </div>
    );
  }
}

export default UserProfile;
