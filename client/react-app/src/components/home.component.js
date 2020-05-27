import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import {Link } from 'react-router-dom';

function Home () {
    const user = useSelector((state) => state.loginReducer)
    return <div>
            <h3>Welcome {user.first_name}</h3>
            <nav class="navbar navbar-expand-sm bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link" to="getReminders">Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/editReminders">Edit Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/createReminders">Create Reminder</Link>
                    </li>
                </ul>
            </nav>
        </div>
}

export default Home;