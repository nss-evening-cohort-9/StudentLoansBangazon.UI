import React, { Component } from 'react';
import './Home.scss';

import productData from '../../data/productData';

class Home extends Component {
  state = {
    products : []
  }


  componentDidMount = () => {
    productData.getAllProducts()
    .then(resp => {
      const data = resp
      this.setState({products:data})
    })
  }
  render () {
    const products = this.state.products
    const productNames = products.map((product) => (
      <div className="singleProduct">
      <img src={product.imageUrl} class="smallImg" alt={product.name}/>
      <h2 className="productName">{product.name}</h2>
      <h4>${product.pricePerDay}/day</h4>
      </div>
      ));
    return (
      <div className="Home">
          <button className="btn btn-warning listbutton">List Your Stuff</button>
          <div className="productContainer">
          {productNames}
          </div>
      </div>
    );
  }
}

export default Home;