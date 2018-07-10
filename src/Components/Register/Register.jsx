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

export default class Register extends Component {
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
            <Form.Input fluid={true} icon='user' iconPosition='left' placeholder='Username'/>
            <Form.Input fluid={true} icon='lock' iconPosition='left' placeholder='Password' type='password'/>
            <Form.Input fluid={true} icon='lock' iconPosition='left' placeholder='Reenter password' type='password'/>

            <Button primary fluid={true} size='large'>
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
