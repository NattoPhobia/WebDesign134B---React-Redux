import React from 'react';
import {Link} from 'react-router';
import '../../styles/AgentManagement.css';
import Header from '../../components/common/Header';

const ClientObjects =
  [
    {
      name: 'Bill',
      sex: 'Sexuality: M',
      age: 'Age: 28',
      ethnicity: 'Ethnicity: Asian',
      phone: 'Phone: (111)111-1111'
    },
    {
      name: 'Rachel',
      sex: 'Sexuality: F',
      age: 'Age: 23',
      ethnicity: 'Ethnicity: White',
      phone: 'Phone: (222)222-2222'
    },
    {
      name: 'Jenn',
      sex: 'Sexuality: F',
      age: 'Age: 33',
      ethnicity: 'Ethnicity: Asian',
      phone: 'Phone: (333)333-3333'
    },
    {
      name: 'Jordan',
      sex: 'Sexuality: M',
      age: 'Age: 20',
      ethnicity: 'Ethnicity: African American',
      phone: 'Phone: (444)444-4444'
    },
    {
      name: 'Aviana',
      sex: 'Sexuality: F',
      age: 'Age: 22',
      ethnicity: 'Ethnicity: Latino',
      phone: 'Phone: (555)555-5555'
    }

  ];

class AgentManagement extends React.Component {
  constructor(props) {
    super(props);
    this.keyCount = 0;
    this.state = {
      searchText: ''
    };
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

  search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search_text");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  popup(popupDiv) {
    var list = popupDiv.firstElementChild;
    var popup = list.children[1];

    popup.classList.toggle("show");
  }

  render_clients_list() {
    return ClientObjects.map((mappedObject, index) => {
      return (
        <div key={index} className="user_select">
          <div className="popup">
            <li>
              <span className="name"> {mappedObject.name} </span>
              <Link to="/matched">
                <button className="reset">
                  <text className="button_text">></text>
                </button>
              </Link>
              <span className="popuptext">
                            {mappedObject.sex}<br/>
                {mappedObject.age}<br/>
                {mappedObject.ethnicity}<br/>
                {mappedObject.phone}
                        </span>
            </li>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <Header/>
        <h1>Client List</h1>
        <input name="searchText" id="search_text" className="searchText"
               placeholder="Search for names" value={this.state.searchText}
               onChange={this.handleInputChange} onKeyUp={this.search}/>
        <ul id="myUL">
          {this.render_clients_list()}
        </ul>
      </div>
    );
  }
}

export default AgentManagement;
