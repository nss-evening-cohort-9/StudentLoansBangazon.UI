import React from 'react';

import './SingleItem.scss';

class SingleItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="col-12">
        <div className="card" id={item.itemName}>
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <img className="card-img-top" src={item.itemImage} alt="Card cap"/>
                <p className="card-text"><strong>{item.itemDescription}</strong></p>
                </div>
            </div>
      </div>
      // </div>
    );
  }
}

export default SingleItem;
