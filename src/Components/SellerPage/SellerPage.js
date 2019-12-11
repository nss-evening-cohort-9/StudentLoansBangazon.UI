import React from 'react';
import productData from '../../data/productData';

class SellerPage extends React.Component {
    state = {
        allSellerAvailableProducts : [],
        sellerId : this.props.match.params.sellerId
    }
    

    componentDidMount() {
         productData.getProductsBySellerId(this.state.sellerId)
        .then(resp => {
            this.setState({ allSellerAvailableProducts : resp})
        })
        .catch(err => console.error('error from getProductsBySellerId', err))
    }


    render() {
        return (
            <h1>Welcom to your seller page</h1>
        )
    }
}

export default SellerPage;
