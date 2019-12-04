import React from 'react';
import './OwnerProduct.scss';

class OwnerProduct extends React.Component {
    render() {
        return (
            <div className="ownerProductCard">
                <h2>{this.props.ownerProduct.productName}</h2>
            </div>
        )
    }
}

export default OwnerProduct;