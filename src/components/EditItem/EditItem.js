import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditItem extends Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const singleLink = '/scat/12345';
    return (
      <div className="Home">
        <h1>Edit</h1>
        <button className="btn btn-light" onClick={this.editEvent}>Edit a thing</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default EditItem;
