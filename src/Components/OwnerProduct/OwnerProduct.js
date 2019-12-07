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
                    <div>
                        <h4>Rental Start Date</h4>
                        <h5>{this.props.ownerProduct.startDate}</h5>
                    </div>
                    <div>
                        <h4>Rental Return Date</h4>
                        <h5>{this.props.ownerProduct.returnedDate}</h5>
                    </div>
                    <div>
                        <h4>Price Per Day</h4>
                        <h5>{this.props.ownerProduct.pricePerDay}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default OwnerProduct;