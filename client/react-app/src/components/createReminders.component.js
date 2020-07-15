import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Home from './home.component';
import Badge from "react-bootstrap/Badge";
let marked = require("marked");
class CreateReminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: props.id,
            reminder_description: "default",
            reminder_responsible: "defalut",
            reminder_frequency: "NEVER",
            notes: ""
        }
        this.onReminderDescription = this.onReminderDescription.bind(this);
        this.onReminderResponsible = this.onReminderResponsible.bind(this);
        this.onReminderFrequency = this.onReminderFrequency.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateMarkdown(notes) {
        this.setState({ notes });
      }

    onSubmit(e) {
        e.preventDefault();
         const task = {
            owner: this.state.owner,
            reminder_description: this.state.reminder_description,
            reminder_responsible: this.state.reminder_responsible,
            reminder_frequency: this.state.reminder_frequency,
            notes: this.state.notes
        }

        console.log(task);
         axios.post("https://b0bafdf64a63.ngrok.io/createTask", task).then((response) => {
         console.log("Response Data =", response.data)
       })
    }
    onReminderDescription(e) {
        this.setState({
            reminder_description : e.target.value
        })
    }

    onReminderResponsible(e) {
        this.setState({
            reminder_responsible : e.target.value
        })
    }

    onReminderFrequency(e) {
         this.setState({
             reminder_frequency : e.target.value
         })
    }

    render() {
        return(
            <div>
                <Home></Home>
                <form class="jumbotron bg-light text-dark" onSubmit={this.onSubmit}>
            
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" className="form-control" onChange = {this.onReminderDescription}/>
                </div>
                <div className="form-group">
                    <label>Responsible:</label>
                    <input type="text" className="form-control"
                    onChange = {this.onReminderResponsible}></input>
                </div>

                <label>Reminder for Every:</label>
                <div class="form-group">
                <select class="form-control" id="sel1"
                value={this.state.reminder_frequency} 
                onChange={this.onReminderFrequency}>
                    <option>6hrs</option>
                    <option>12hrs</option>
                    <option>1day</option>
                    <option>1week</option>
                    <option>NEVER</option>
                </select>
                </div>

                <div className="row mt-4">
            <div className="form-group">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Edit Notes
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.notes}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {" "}
                  {console.log(this.state.notes)}
                </textarea>
              </div>
            </div>

            <div className="col-md-8">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.notes),
              }}></div>
            </div>
            </div>
            <div className="form-group" style={submitStyle}>
                    <input type="submit" value="Create Reminder" className="btn btn-secondary"></input>
                </div>
                </form>
                <div class="footer spacing">
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3 bg-secondary text-white">© 2020 Copyright:
                <a class="text-info" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                </footer>
                </div>
            </div>
        )
    }
}

var submitStyle = {
    marginTop: "100px"
}

var inputStyle = {
    width: "400px",
    height: "52vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  var outputStyle = {
    width: "400px",
    height: "53vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
    padding:"10px"
  };

const mapStateToProps = (state) => (state.loginReducer);

export default connect(mapStateToProps)(CreateReminders);