import React, { Component } from 'react';
import productData from '../../data/productData';

import './SingleProduct.scss';

export class SingleProduct extends Component {
    state = {
        product: {}
      }
    
      getSingleProduct = () => {
        const productId = this.props.match.params.id;
        productData.getSingleProduct(productId)
          .then(productPromise => this.setState({ product: productPromise.data }))
          .catch(err => console.error('unable to get single product', err));
      }
    
      componentDidMount() {
        this.getSingleProduct();
      }
    render() {
        const { product } = this.state;
        return (
            <div className="SingleProduct">
              <div className="productContainer">
                <div className="subContainer">
                  <div className="leftSingleProduct">
                    <div className="singleProductImage">
                      <img src={product.imageUrl} alt={product.name}/>
                    </div>
                    <div className="singleProductOwner">
                     <p>Jeressia Williamson</p>
                    </div>
                  </div>
                  <div className="rightSingleProduct">
                    <h3 className="singleProductName">{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default SingleProduct
