import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Message,
  Segment
} from 'semantic-ui-react';
import './Login.css';
import { setLocation } from '../../routing';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleClick() {
    axios.post('http://localhost:1337/api/user/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      setLocation('loggedin');
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleChange(e) {
    if(e.target.id === 'username') {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  }

  register = (e) => {
    e.preventDefault();
    setLocation('register');
  }

  render() {
    return (
      <Grid className='fade-in' textAlign='center' style={{
        height: '100%'
      }} verticalAlign='middle'>
        <Grid.Column style={{
          maxWidth: 450
        }}>
        <Form size='large'>
          <Segment stacked={true}>
            <Form.Input onChange={this.handleChange.bind(this)} id='username' fluid={true} icon='user' iconPosition='left' placeholder='Username'/>
            <Form.Input onChange={this.handleChange.bind(this)} id='password' fluid={true} icon='lock' iconPosition='left' placeholder='Password' type='password'/>

            <Button onClick={this.handleClick.bind(this)} primary fluid={true} size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href="#" onClick={this.register}>Need an account?</a>
        </Message>
      </Grid.Column>
    </Grid>);
  }
}
