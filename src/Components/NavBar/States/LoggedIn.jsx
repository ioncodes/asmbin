import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default class LoggedIn extends Component {
  state = { activeItem: 'myScripts' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>asmbin</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='myScripts'
            active={activeItem === 'myScripts'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='createNewScript'
            active={activeItem === 'createNewScript'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='settings'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Button primary>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
