import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Editor from './Components/Editor/Editor';
import { store } from './routing';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { register: false, login: false, isLoggedIn: false, newScript: false }

    axios.get('http://localhost:1337/api/user/verify', {
      headers: {'token': window.localStorage.getItem('token')}})
      .then(response => {
        if(response.data.status !== 'error') {
          this.setState({isLoggedIn: true, register: false, login: false, newScript: false});
        }
      })
      .catch(error => {
        console.log(error);
      });


    store.subscribe(() => {
      let value = store.getState();
      switch(value) {
        case 'register':
          this.setState({register: true, login: false, newScript: false});
          break;
        case 'login':
          this.setState({register: false, login: true, newScript: false});
          break;
        case 'loggedin':
          this.setState({isLoggedIn: true, register: false, login: false, newScript: false});
          break;
        case 'loggedout':
          this.setState({isLoggedIn: false, register: false, login: false, newScript: false});
          break;
        case 'createnewscript':
          this.setState({register: false, login: false, newScript: true});
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn}/>
        { this.state.register ? <Register/> : null }
        { this.state.login ? <Login/> : null }
        { this.state.newScript ? <Editor/> : null }
      </div>
    );
  }
}

export default App;
