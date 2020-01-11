import React, { Component } from 'react';
import './Home.scss';

import productData from '../../data/productData';
import userData from '../../data/productData';
import ProductCard from '../ProductCard/ProductCard';

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
      <ProductCard product={product} />
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