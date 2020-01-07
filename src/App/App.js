import React from 'react';
import firebase from 'firebase/app';

import './App.scss';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import MyNavbar from '../Components/Navbar/Navbar';
import MyProfile from '../Components/MyProfile/MyProfile';
import SingleProduct from '../Components/SingleProduct/SingleProduct';
import SellerPage from '../Components/SellerPage/SellerPage';
import UserData from '../data/userData';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  const routeChecker = props => ( authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/MyHome', state: { from: props.location }}}/>)
  );
  return <Route {...rest} render={props => routeChecker(props)}/>
};

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  const routeChecker = props => ( authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/Home', state: { from: props.location }}}/>)
  );
  return <Route {...rest} render={props => routeChecker(props)}/>
};

class App extends React.Component {

  state = {
    authed : false
  }

  logMeIn = (e) => {
    // e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logMeOut = () => {
    this.setState({authed : false})
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
  

    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavbar authed={this.state.authed} logMeIn={this.logMeIn} logMeOut={this.logMeOut}/>
          {/* alternate auth */}
          {/* <MyNavbar authed={authed} /> */}
            <Switch>
              <PublicRoute path='/Home' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/MyHome' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/MyProfile' component={MyProfile} authed={this.state.authed}/>
              <PublicRoute path='/product/:id' component={SingleProduct} authed={this.state.authed}/>
              <PublicRoute path='/SellerPage/:sellerId' component={SellerPage} authed={this.state.authed}/>
              {/* <PublicRoute path='/CreateUser' component={CreateUser} authed={authed}/> */}
              <Redirect from="*" to="/Home"/>
            </Switch>
        </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
