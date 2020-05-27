import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../reminder_logo.svg';
import TelegramLoginButton from './TelegramLoginButton';
import { addUser } from '../actions';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.responseTelegram = this.
        responseTelegram.bind(this)
        this.state = {
          number: "",
          resultId: ""
        }
    }

   responseTelegram(response) {
     console.log("Came here")
      console.log(response);
      const { history } = this.props;
      const { dispatch } = this.props;
      dispatch(addUser(response));
      history.push("/home")
    };

    render() {
        return <div className="container">
          <div className="container centering">
            <img src={logo} alt="Logo" className="image-left"></img>
      </div>
      <div className="centering">
      <h2>Reminders made easy !!</h2>
      <TelegramLoginButton dataOnauth={this.responseTelegram} botName="akiranBot" />
        </div>
      </div>
    }
}

export default connect()(Register);