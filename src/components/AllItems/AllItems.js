import React, { Component } from 'react';

import itemData from '../../helpers/data/itemData';
import SingleItem from '../SingleItem/SingleItem';
import './AllItems.scss';

class AllItems extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    itemData.getItems()
      .then(items => this.setState({ items }))
      .catch(err => console.error('uh-oh, items', err));
  }

  render() {
    const makeItems = this.state.items.map(item => (
      <SingleItem key={item.id} item={item} />
    ));

    return (
      <div className="container-fluid">
        <div className="card-columns mt-5">
        {makeItems}
      </div>
      </div>
    );
  }
}

export default AllItems;
