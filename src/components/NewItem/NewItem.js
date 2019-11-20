import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const singleLink = '/scat/12345';
    return (
      <div className="NewItem">
        <h1>New Item</h1>
        <button className="btn btn-light" onClick={this.editEvent}>Edit a thing</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default NewItem;
