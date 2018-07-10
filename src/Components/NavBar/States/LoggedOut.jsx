import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { setLocation } from '../../../routing';

export default class LoggedOut extends Component {
  login = () => {
    setLocation('login');
  }

  register = () => {
    setLocation('register');
  }

  render() {
    return (
      <Menu>
        <Menu.Item header>asmbin</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              primary
              onClick={this.register}
            >Register</Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              primary
              onClick={this.login}
            >Login</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
