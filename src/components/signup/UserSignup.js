import React from 'react';
import {Link, browserHistory} from 'react-router';
import Header from '../../components/common/BlankHeader';

class UserSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  /*
   * Iterate over existing users to check if user already exists
   */
  userExists(user) {
    let existingUsers = localStorage.getItem("users");
    existingUsers = JSON.parse(existingUsers);

    if (existingUsers != null) {
      for (let i = 0; i < existingUsers.length; i++) {
        let currUser = existingUsers[i];
        if (currUser.username.toLowerCase() === user.username.toLowerCase()) {
          return true;
        }
      }

      existingUsers.push((user));
      localStorage.setItem("users", JSON.stringify(existingUsers));

    } else {
      localStorage.setItem("users", JSON.stringify([user]));
    }

    return false;
  }

  onSubmit(event) {
    event.preventDefault();

    let newUser = {
      'username': this.state.username,
      'password': this.state.password,
      'name': this.state.name,
      'age': this.state.age,
      'phone': this.state.phone,
      'city': this.state.city,
      'ethnicity': this.state.ethnicity,
      'profession': this.state.profession,
      'sex': this.state.sex,
      'about_me': this.state.about_me,
      'part_sex': this.state.part_sex,
      'part_age': this.state.part_age,
      'part_ethnicity': this.state.part_ethnicity,
      'distance': this.state.distance,
      'userType': "user"
    };

    if (this.userExists(newUser) === true) {
      window.alert("Username already taken!");
    } else {
      window.alert("Successfully registered account!");
      browserHistory.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="form_container">
          <h3>User Registration</h3>

          <div>
            <a href=""><img id="placeholder" src={require('../../images/profile.svg')} alt=""/></a>
          </div>

          <br/>

          <form id="form">

            <label htmlFor="username">Username</label>
            <br/>
            <input type="text" className="max_width" id="username" name="username" placeholder="Username"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" className="max_width" id="password" name="password" placeholder="Password"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" className="max_width" id="name" name="name" placeholder="Full Name"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="age">Age</label>
            <br/>
            <input type="number" className="max_width" id="age" name="age" placeholder="Age"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="phone">Phone</label>
            <br/>
            <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="city">City</label>
            <br/>
            <input type="text" className="max_width" id="city" name="city" placeholder="City"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="ethnicity">Ethnicity</label>
            <br/>
            <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
                   onChange={this.handleInputChange}/>
            <br/>


            <label htmlFor="prof">Profession</label>
            <br/>
            <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="sex">Sex</label>
            <br/>
            <select id="sex" name="Sex" onChange={this.handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/>
            <br/>

            <label htmlFor="about_me">About</label>
            <br/>
            <textarea id="about_me" className="max_width" name="about_me"
                      placeholder="Enter something you'd like people to know about you!"
                      onChange={this.handleInputChange}/>
            <br/>

            <h3>Looking For</h3>
            <label htmlFor="part_sex">Sex</label>
            <select id="part_sex" name="part_sex" onChange={this.handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/>

            <label htmlFor="part_age">Age</label>
            <select id="part_age" name="part_age" onChange={this.handleInputChange}>
              <option>23 or below</option>
              <option>26~34</option>
              <option>35~45</option>
              <option>45 or above</option>
            </select>
            <br/>

            <label htmlFor="part_ethnicity">Ethnicity</label>
            <br/>
            <input type="text" id="part_ethnicity" name="part_ethnicity" placeholder="Ethnicity" className="max_width"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="city_dist">Distance</label>
            <select id="city_dist" name="city_dist" onChange={this.handleInputChange}>
              <option>4 miles or less</option>
              <option>5~14 miles</option>
              <option>15~24 miles</option>
              <option>25~34 miles</option>
              <option>35 miles or above</option>
            </select>
            <br/>

            <br/>
            <Link to="/login">
              <input type="submit" onClick={this.onSubmit} value="Submit"/>
            </Link>
          </form>

        </div>
      </div>

    );
  }

}

export default UserSignUp;
