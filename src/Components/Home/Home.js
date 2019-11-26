import React, { Component } from 'react';
import './Home.scss';

import productData from '../../data/productData';

class Home extends Component {
  state = {
    products : []
  }


  componentDidMount = () => {
    console.log("home mounted")
    productData.getAllProducts()
    .then(resp => {
      const data = resp
      this.setState({products:data})
    })
  }
  render () {
    const products = this.state.products
    const productNames = products.map((product) => (
      <h2>{product.name}</h2>
    ))
    return (
      <div className="Home">
          <h1 className="HelloText">Hi</h1>
          {productNames}
      </div>
    );
  }
}

export default Home;