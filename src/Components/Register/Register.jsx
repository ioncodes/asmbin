import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Message,
  Segment
} from 'semantic-ui-react';
import './Register.css';
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
    axios.post('http://localhost:1337/api/user/register', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response);
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

  login = (e) => {
    e.preventDefault();
    setLocation('login');
  }

  render() {
    return (
      <Grid textAlign='center' style={{
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
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href="#" onClick={this.login}>Already registered?</a>
        </Message>
      </Grid.Column>
    </Grid>);
  }
}
