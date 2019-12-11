import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ProductCard.scss'

export class ProductCard extends Component {
    render() {
        const product = this.props.product;
        const singleLink = `/product/${product.id}`;
        return (
            <div className="singleProduct">
                 <Link to={singleLink}>
                <img src={product.imageUrl} class="smallImg" alt={product.name}/>
                <h2 className="productName">{product.name}</h2>
                <h4>${product.pricePerDay}/day</h4>
                </Link>
            </div>
        )
    }
}

export default ProductCard
