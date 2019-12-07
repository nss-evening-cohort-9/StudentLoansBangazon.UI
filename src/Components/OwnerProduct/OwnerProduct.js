import React from 'react';
import './OwnerProduct.scss';

class OwnerProduct extends React.Component {
    render() {
        return (
            <div id={this.props.ownerProduct.id}className="ownerProductCard">
                <div id="ownerProductCard-leftColumn">
                    <p>{this.props.ownerProduct.productName}</p>
                    <img id="ownerProductCard-productImage"src={this.props.ownerProduct.imageUrl}/>
                </div>
                <div id="ownerProductCard-rightColumn">
                    <h5>{this.props.ownerProduct.startDate}</h5>
                    <h5>{this.props.ownerProduct.returnedDate}</h5>
                    <h5>{this.props.ownerProduct.pricePerDay}</h5>
                </div>
            </div>
        )
    }
}

export default OwnerProduct;