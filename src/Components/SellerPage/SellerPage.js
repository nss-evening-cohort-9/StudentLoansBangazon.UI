import React from 'react';
import productData from '../../data/productData';
import ProductCard from '../ProductCard/ProductCard';
import './SellerPage.scss'

class SellerPage extends React.Component {
    state = {
        allSellerAvailableProducts : [],
        sellerId : this.props.match.params.sellerId
    }
    

    componentDidMount() {
         productData.getAvailableProductsBySeller(this.props.match.params.sellerId)
        .then(resp => {
            this.setState({ allSellerAvailableProducts : resp})
        })
        .catch(err => console.error('error from getProductsBySellerId', err))
    }


    render() {
       const sellerProducts = this.state.allSellerAvailableProducts.map((product) => (
           <ProductCard product={product}/> 
       ))
        return (
            <div className="productContainer">{sellerProducts}</div>
        )
    }
}

export default SellerPage;
