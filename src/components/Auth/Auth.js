import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-dark logIn" onClick={this.loginClickEvent}>Log Me In</button>
      </div>
    );
  }
}

export default Auth;
