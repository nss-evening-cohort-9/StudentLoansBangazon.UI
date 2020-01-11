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
    this.getHomePageProducts();
  }

  getHomePageProducts = () => {
    productData.getAllProducts()
    .then(resp => {
      const data = resp
      this.setState({products:data})
    })
  }

  productSearch = (e) => {
    if (e.target.value === "") {
      this.getHomePageProducts();
    }
    else {
      productData.getProductsBySearch(e.target.value)
      .then(resp => {
      const filteredProducts = resp
      this.setState({products:filteredProducts})
     })
    }
  }



  render () {
    const products = this.state.products
    const productNames = products.map((product) => (
      <ProductCard product={product} />
      ));


    return (
      <div className="Home">
          <button className="btn btn-warning listbutton">List Your Stuff</button>
          <input type="text" className="searchBar" onChange={this.productSearch} placeholder="Search By Product Name"/>
          <div className="productContainer">
          {productNames}
          </div>
      </div>
    );
  }
}

export default Home;