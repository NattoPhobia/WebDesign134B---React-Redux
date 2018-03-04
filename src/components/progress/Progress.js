import React from 'react';
import {Link} from 'react-router';
import '../../styles/Progress.css';
import Header from '../common/Header';

const TaskObjects =
  [
    {
      name: "Task 1"
    },
    {
      name: "Task 2"
    },
    {
      name: "Task 3"
    }
  ];

class Progress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      modal_display: "none",
      new_task_text: "",
      taskObjects: TaskObjects
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  remove_task(index) {
    const tempTasks = this.state.taskObjects;
    const result = window.confirm("Are you sure you want to mark this task as completed?");

    if (result === true) {
      tempTasks.splice(index, 1);
      this.setState({
        taskObjects: tempTasks
      });
    }

  }

  render_tasks() {
    return this.state.taskObjects.map((mappedObject, index) => {
      return (
        <div key={index} className="task">
          <p>{mappedObject.name}</p>
          <button className="complete" onClick={() => this.remove_task(index)}>✔</button>
        </div>
      );
    });
  }

  showModal() {
    this.setState({
      modal_display: "block"
    });
  }

  closeModal() {
    this.setState({
      modal_display: "none"
    });
  }

  toggleProgress(position) {
    if (this.state.active === position) {
      this.setState({active: null});
    } else {
      this.setState({active: position});
    }
  }

  progressColor(position) {
    if (this.state.active === position) {
      return "blue";
    } else {
      return "dodgerblue";
    }
  }

  modalState() {
    return this.state.modal_display;
  }

  addNewTask() {
    const task = this.state.new_task_text;

    if (task !== '') {
      TaskObjects.push({
        name: task
      });
    }

    this.setState({
      new_task_text: '',
      modal_display: "none"
    });
  }

  render() {
    return (
      <div className="customContainer">
        <Header/>
        <div className="top_bar no_pad flex">
          <div className="left_panel_bar">
            <p>To-Do</p>
            <button id="add_to_do" onClick={() => { this.showModal();}}>+
            </button>
          </div>
          <div className="right_panel_bar">
            <p>Progress</p>
          </div>
        </div>

        <div className="flex no_pad">
          <div className="left_panel no_pad">
            <div id="task_list">
              {this.render_tasks()}
            </div>
          </div>

          <div className="right_panel no_pad">
            <div className="progress_container">
              <ul id="progress_bar">
                <li style={{background: this.progressColor(0)}} onClick={() => {
                  this.toggleProgress(0);
                }} className="progress_li">1
                </li>
                <li style={{background: this.progressColor(1)}} onClick={() => {
                  this.toggleProgress(1);
                }} className="progress_li">2
                </li>
                <li style={{background: this.progressColor(2)}} onClick={() => {
                  this.toggleProgress(2);
                }} className="progress_li">3
                </li>
                <li style={{background: this.progressColor(3)}} onClick={() => {
                  this.toggleProgress(3);
                }} className="progress_li">4
                </li>
                <li style={{background: this.progressColor(4)}} onClick={() => {
                  this.toggleProgress(4);
                }} className="progress_li">5
                </li>
              </ul>
              <ul id="progress_bar_text">
                <li className="progress_text">1. Description</li>
                <li className="progress_text">2. Description</li>
                <li className="progress_text">3. Description</li>
                <li className="progress_text">4. Description</li>
                <li className="progress_text">5. Description</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="taskModal" className="modal" style={{display: this.modalState()}}>
          <div className="modal-content">
            <span className="close" onClick={() => {
              this.closeModal();
            }}>&times;</span>
            <div id="form_container">
              <h3>Add a New Task</h3>
              <form id="form">
                <input type="text" id="task_name" name="new_task_text" placeholder="Task Name"
                       value={this.state.new_task_text} onChange={this.handleInputChange}/>
              </form>
              <br/>
              <button className="submit" onClick={this.addNewTask}>Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Progress;
