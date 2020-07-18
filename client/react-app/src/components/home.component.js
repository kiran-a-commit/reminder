import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import {Link } from 'react-router-dom';
import logo from '../reminder_logo.svg';

function Home () {
    var cardStyle = {
        marginTop: "200px"
    }
    const user = useSelector((state) => state.loginReducer)
    return <div>
            <nav class="navbar navbar-expand-sm bg-secondary fixed-top">
                <ul class="navbar-nav mr-auto">
                <Link class="navbar-brand text-white" to="/">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                Finnit
                </Link>
                    <li class="nav-item active">
                    <Link class="nav-link text-white" to="getReminders">Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text-white" to="/editReminders">Edit Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text-white" to="/createReminders">Create Reminder</Link>
                    </li>
                </ul>
            </nav>
            
  <div class="jumbotron d-flex align-items-center">
  <div class="container">
      <div>
      <h1 class="text-center" style={{paddingTop: "100px"}}>Welcome Kiran</h1>
  <div class="card-deck" style={cardStyle}>
    <div class="card border-light mb-3 w-50">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-info xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title">Important Tasks</h5>
      <p class="card-text">Lists all the important tasks to be reminded.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    <div class="card border-light mb-3 w-50">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-info xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title">Important Tasks</h5>
      <p class="card-text">Lists all the important tasks to be reminded.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

    <div class="card border-light mb-3 w-50">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-info xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title">Important Tasks</h5>
      <p class="card-text">Lists all the important tasks to be reminded.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  </div>
  </div>
</div>
        </div>
        
}

export default Home;