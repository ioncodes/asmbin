import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Message,
  Segment
} from 'semantic-ui-react';
import './Register.css';

export default class Register extends Component {
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
          <a href='#'>Already registered?</a>
        </Message>
      </Grid.Column>
    </Grid>);
  }
}
