import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import Navigation from './navigation.components';

function Home () {
    var cardStyle = {
        marginTop: "200px"
    }
    const user = useSelector((state) => state.loginReducer)
    return <div>
        <Navigation/>
            
  <div class="jumbotron d-flex align-items-center">
  <div class="container">
      <div>
<h1 class="text-center" style={{paddingTop: "60px"}}>Welcome {user.first_name}</h1>
      <h2 class="text-center">Make your notes as well as set reminders.</h2>
  <div class="card-deck" style={cardStyle}>
    <div class="card border-light mb-3 w-50">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-danger xl-2 col-sm-3 offset-md-4 ">3</span>
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
    <span class="badge badge-pill badge-success xl-2 col-sm-3 offset-md-4 ">3</span>
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