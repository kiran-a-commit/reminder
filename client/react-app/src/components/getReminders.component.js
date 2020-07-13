import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class GetReminders extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://b0bafdf64a63.ngrok.io/tasks/'+`${this.props.id}`).then((response) => {
            console.log(response.data)
        })
    }
    render() {
        return (
        <div>
            <h3>Hello this is get Reminders Component</h3>
            <table class="table table-bordered">
                <thead>
            <tr>
                <th>Desscription</th>
                <th>Responsible</th>
                <th>Frequency</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
            </tr>
            </tbody>
            </table>
        </div>
    )}
}

const mapStateToProps = (state) => (state.loginReducer);

export default connect(mapStateToProps)(GetReminders);