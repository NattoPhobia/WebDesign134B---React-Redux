import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../../styles/Login.css';
import Header from '../../components/common/BlankHeader';

const UserObjects =
  [
    {
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
    },
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
    }
  ];

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

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

  onSubmit(event) {
    event.preventDefault();
    let userFound = false;
    let existingUsers = UserObjects;
    // let existingUsers = localStorage.getItem("users");
    // existingUsers = JSON.parse(existingUsers);

    for (let i = 0; i < existingUsers.length; i++) {
      let currUser = existingUsers[i];
      if (currUser.username.toLowerCase() === this.state.username.toLowerCase()) {
        userFound = true;
        if (currUser.password === this.state.password) {
          // localStorage.setItem("currUser", JSON.stringify(existingUsers[i]));
          if (currUser.userType === "agent") {
            browserHistory.push('/agentProfile');
          } else {
            browserHistory.push('/userProfile');
          }
        } else {
          window.alert("Incorrect password!");
        }

        return true;
      }
    }

    window.alert("Username not found!");

    return false;
  }

  render() {
    return (

      <div>
        <Header/>
        <h3>Hummingbird</h3>

        <img id="logo" src={require('../../images/hummingbird.svg')} alt=""/>

        <form id="loginForm">
          <label htmlFor={"username"}>Username</label>
          <br/>
          <input className="quarter_width" id="username" type="text" name="username" defaultValue={this.state.username}
                 onChange={this.handleInputChange}/>
          <br/>

          <label htmlFor={"password"}>Password</label>
          <br/>
          <input className="quarter_width" id="password" type="password" name="password"
                 defaultValue={this.state.password} onChange={this.handleInputChange}/>
          <br/>

          <input type="submit" onClick={this.onSubmit} value="Submit"/>
        </form>

        <br/>
        <Link to="/agentsignup" activeClassName="active">Agent Registration</Link>
        <br/>
        <br/>
        <Link to="/usersignup" activeClassName="active">User Registration</Link>
      </div>
    );
  }
}

export default Login;
