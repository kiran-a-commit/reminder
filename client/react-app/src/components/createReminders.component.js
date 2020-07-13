import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class CreateReminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: props.id,
            reminder_description: "default",
            reminder_responsible: "defalut",
            reminder_frequency: "NEVER"
        }
        this.onReminderDescription = this.onReminderDescription.bind(this);
        this.onReminderResponsible = this.onReminderDescription.bind(this);
        this.onReminderFrequency = this.onReminderDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
         const task = {
            owner: this.state.owner,
            reminder_description: this.state.reminder_description,
            reminder_responsible: this.state.reminder_responsible,
            reminder_frequency: this.state.reminder_frequency
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

    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3>Create New Reminder</h3>
                <form onSubmit={this.onSubmit}>
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
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                        type="radio"
                        className="form-check-input" 
                        name="reminderOptions"
                        id="reminder12"
                        value="12hrs"
                        />
                        <label className="form-check-label">12 hrs</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                        className="form-check-input" 
                        name="priorityOptions"
                        id="reminder1Day"
                        value="Every Day"
                        />
                        <label className="form-check-label">Every Day</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                        className="form-check-input" 
                        name="priorityOptions"
                        id="reminderNever"
                        value="Never"
                        />
                        <label className="form-check-label">Never</label>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Reminder" className="btn btn-primary"></input>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.loginReducer);

export default connect(mapStateToProps)(CreateReminders);