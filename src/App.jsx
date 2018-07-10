import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { store } from './routing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { register: false, login: false }

    store.subscribe(() => {
      let value = store.getState();
      switch(value) {
        case 'register':
          this.setState({register: true, login: false});
          break;
        case 'login':
          this.setState({register: false, login: true});
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={false}/>
        { this.state.register ? <Register/> : null }
        { this.state.login ? <Login/> : null }
      </div>
    );
  }
}

export default App;
