import React from 'react';
import firebase from 'firebase/app';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import NewItem from '../components/NewItem/NewItem';
import EditItem from '../components/EditItem/EditItem';
import SingleItem from '../components/SingleItem/SingleItem';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to = {{ pathname: '/home', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)}/>;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to = {{ pathname: '/auth', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)}/>;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removelistener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removelistener();
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <BrowserRouter>
      <React.Fragment>
        <MyNavbar authed={authed} />
        <div className="container">
          <div className="row">
            <Switch>
              <PublicRoute path='/auth' component={Auth} authed={authed}/>
              <PrivateRoute path='/home' component={Home} authed={authed}/>

              <PrivateRoute path='/new' component={NewItem} authed={authed}/>
              <PrivateRoute path='/edit/:id' component={EditItem} authed={authed}/>
              <PrivateRoute path='/scat/:id' component={SingleItem} authed={authed}/>

              <Redirect from='*' to="/auth" />
            </Switch>
          </div>
        </div>
      </React.Fragment>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
