import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <div className="welcome-text">
      <h2>
        Welcome to Adventure MUD!
      </h2>
        Please login or register to begin.
      <div>
        <Link to="/api/login">
          <button type="button" className="login-button">Login</button>
        </Link>
        <Link to="/api/registration">
          <button type="button" className="login-button">Register</button>
        </Link>
      </div>
    </div>
    )
  }
}

export default Home;