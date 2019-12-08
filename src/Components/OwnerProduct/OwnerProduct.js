import React from 'react';
import './OwnerProduct.scss';

class OwnerProduct extends React.Component {
    render() {
        return (
            <div id={this.props.ownerProduct.id}className="ownerProductCard">
                <div className="ownerProductCard-leftColumn">
                    <h3>{this.props.ownerProduct.productName}</h3>
                    <img className="ownerProductCard-productImage"src={this.props.ownerProduct.imageUrl}/>
                </div>
                <div className="ownerProductCard-rightColumn">
                    <div className="ownerProductCard-leftInfoSet">
                        <div>
                            <p className="ownerProductCard-InfoHeader">Rental Start Date</p>
                            <p className="ownerProductCard-InfoContent">{this.props.ownerProduct.startDate}</p>
                        </div>
                        <div>
                            <p className="ownerProductCard-InfoHeader">Rental Return Date</p>
                            <p className="ownerProductCard-InfoContent">{this.props.ownerProduct.returnedDate}</p>
                        </div>
                        <div>
                            <p className="ownerProductCard-InfoHeader">Price Per Day</p>
                            <p className="ownerProductCard-InfoContent">${this.props.ownerProduct.pricePerDay}</p>
                        </div>
                    </div>
                    <div className="ownerProductCard-rightInfoSet">
                        <div>
                            <p className="ownerProductCard-InfoHeader">Renter's Name</p>
                            <p className="ownerProductCard-InfoContent">{this.props.ownerProduct.renterFullName}</p>
                        </div>
                        <div>
                            <p className="ownerProductCard-InfoHeader">Total Rental Income</p>
                            <p className="ownerProductCard-InfoContent">${this.props.ownerProduct.totalRentalIncome}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OwnerProduct;