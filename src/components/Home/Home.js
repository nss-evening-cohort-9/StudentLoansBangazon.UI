import React, { Component } from 'react';

import AllItems from '../AllItems/AllItems';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AllItems />
      </div>
    );
  }
}

export default Home;
