import React from 'react';
import axios from 'axios';
import { Label, Form, FormGroup, CardText, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: ""
    };
  };

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.username === '' || this.state.password1 === '' || this.state.password2 === '') {
      alert('Please enter credentials!');
      return;
    }
    const user = { 
      username: this.state.username, 
      password1: this.state.password1, 
      password2: this.state.password2 
    };

    axios
      .post('https://adventure-.herokuapp.com/api/registration', user)
      .then(response => {
        const token = response.data;
        console.log(response)
        localStorage.setItem('key', token)
        this.props.history.push('/api/login')
        alert('Success!');
      })
      .catch(error => {
        console.log(error.response)
      });
  };

  render() {
    return (
      <Form className="GameStart">
        <h2 className="login-text">Create an Account</h2>
        <input 
          className="input"
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.inputChangeHandler}
        />
        <FormGroup>
          <input 
            className="input"
            type="password"
            placeholder="password"
            name="password1"
            value={this.state.password1}
            onChange={this.inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <input 
            className="input"
            type="password"
            placeholder="confirm password"
            name="password2"
            value={this.state.password2}
            onChange={this.inputChangeHandler}
          />
        </FormGroup>
        <Card>
          <CardText>By clicking "Accept the ToS" you are agreeing to have an awesome adventure in this MUD based game!
          </CardText>
        </Card>
            <Label check>
                <input type="checkbox" />
                Accept the ToS!
              </Label>
            <br />
            <button class="login-button" onClick={this.submitHandler}>Register</button>
            <Link to="/api/login">
          <button type="button" className="login-button">Already a member?</button>
        </Link>
      </Form>
    )
  }
}

export default Register;