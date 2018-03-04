import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../../styles/Form.css';
import Header from '../../components/common/BlankHeader';

class AgentSignUp extends React.Component {
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
  // userExists(user) {
  //   let existingUsers = localStorage.getItem("users");
  //   existingUsers = JSON.parse(existingUsers);
  //
  //   if (existingUsers != null) {
  //     for (let i = 0; i < existingUsers.length; i++) {
  //       let currUser = existingUsers[i];
  //       if (currUser.username.toLowerCase() === user.username.toLowerCase()) {
  //         return true;
  //       }
  //     }
  //
  //     existingUsers.push((user));
  //     localStorage.setItem("users", JSON.stringify(existingUsers));
  //
  //   } else {
  //     localStorage.setItem("users", JSON.stringify([user]));
  //   }
  //
  //   return false;
  // }

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
      'description': this.state.description,
      'experience': this.state.experience,
      'userType': "agent"
    };

    browserHistory.push("/login");

    // if (this.userExists(newUser) === true) {
    //   window.alert("Username already taken!");
    // } else {
    //   window.alert("Successfully registered account!");
    //   browserHistory.push("/login");
    // }
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="form_container">
          <h3>Agent Registration</h3>

          <div>
            <a href=""><img id="placeholder" src={require('../../images/profile.svg')} alt=""/></a>
          </div>

          <br/>

          <form id="form">

            <label htmlFor="username">Username</label>
            <br/>
            <input type="text" className="max_width" id="username" name="username" placeholder="Username"
                   defaultValue=""
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" className="max_width" id="password" name="password" placeholder="Password"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" className="max_width" id="name" name="name" placeholder="Full Name" defaultValue=""
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="age">Age</label>
            <br/>
            <input type="number" className="max_width" id="age" name="age" placeholder="Age"
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="phone">Phone</label>
            <br/>
            <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone" defaultValue=""
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="city">City</label>
            <br/>
            <input type="text" className="max_width" id="city" name="city" placeholder="City" defaultValue=""
                   onChange={this.handleInputChange}/>
            <br/>

            <label htmlFor="ethnicity">Ethnicity</label>
            <br/>
            <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
                   defaultValue=""
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

            <label htmlFor="description">Description</label>
            <br/>
            <textarea id="description" className="max_width" name="description" onChange={this.handleInputChange}
                      defaultValue=""/>
            <br/>

            <label htmlFor="experience">Experience</label>
            <br/>
            <textarea id="experience" className="max_width" name="experience" onChange={this.handleInputChange}
                      defaultValue=""/>
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

export default AgentSignUp;
