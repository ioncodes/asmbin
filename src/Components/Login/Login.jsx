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

export default class Register extends Component {
  register = (e) => {
    e.preventDefault();
    setLocation('register');
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
            <Form.Input fluid={true} icon='user' iconPosition='left' placeholder='Username'/>
            <Form.Input fluid={true} icon='lock' iconPosition='left' placeholder='Password' type='password'/>

            <Button primary fluid={true} size='large'>
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
