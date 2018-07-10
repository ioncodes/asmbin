import React, { Component } from 'react';
import { LoggedIn, LoggedOut } from './index';

export default class NavBar extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let navbar;
    if(isLoggedIn) {
      navbar = <LoggedIn/>;
    } else {
      navbar = <LoggedOut/>
    }
    return (
      navbar
    );
  }
}
