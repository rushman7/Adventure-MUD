import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form } from 'reactstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  };

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      alert('Please enter credentials!');
      return;
    }
    const user = { 
      username: this.state.username, 
      password: this.state.password
    };

    axios
      .post('https://adventure-.herokuapp.com/api/login', user)
      .then(response => {
        const token = response.data.key;
        console.log(response)
        localStorage.setItem('key', token)
        this.props.history.push('/api/gamestart');
        alert('Success!');
      })
      .catch(error => {
        console.log(error.response)
      });
  };

  render() {
    return (
      <Form className="GameStart">
        <h2 className="login-text">Login</h2>
        <h4>If you have an account, please log in.</h4>
        <input
          className="input"
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.inputChangeHandler}
        />
        <input
          className="input"
          type="Password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.inputChangeHandler}
        />
        <br />
        <button className="login-button" onClick={this.submitHandler}>Login</button>
        <h4>Not registered?</h4>
        <Link to="/api/registration">
          <button type="button" className="login-button">Create an Account</button>
        </Link>
      </Form>
    )
  }
}

export default Login;