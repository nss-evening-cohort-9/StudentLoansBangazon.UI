import React from 'react';
import rentalData from '../../data/rentalData';
import OwnerProduct from '../OwnerProduct/OwnerProduct';
import './MyProfile.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyProfile extends React.Component {

    state = {
        allOwnerProductHistory : [],
        displayedOwnerProductHistory : [],
        sorted : '',
        filtered : ''
    }

    componentDidMount = () => {
        rentalData.getOwnerProductHistory('vsubdsbu62ysvua')
        .then( resp => {
            const data = resp;
            this.setState({allOwnerProductHistory : data, displayedOwnerProductHistory : data})
        })
        .catch(err => console.error(err))
    }

    showAllProducts = () => {
        let allProducts = this.state.allOwnerProductHistory
        this.setState({
            displayedOwnerProductHistory : allProducts,
            filtered : ''
        })
    }

    filterAndSortVariables = {
        'rental_status' : '',
        'recency_status' : ''
    }

    filterAndSort = () => {
        let filteredAndSortedProducts = this.state.allOwnerProductHistory
        if (this.filterAndSortVariables.rental_status === 'previously rented') {
            filteredAndSortedProducts = this.filterForPreviouslyRentedProducts(filteredAndSortedProducts)
        }
        if (this.filterAndSortVariables.rental_status === 'currently rented') {
            filteredAndSortedProducts = this.filterForCurrentlyRentedProducts(filteredAndSortedProducts)
        }
        if (this.filterAndSortVariables.recency_status === 'most recent') {
            filteredAndSortedProducts = this.sortByStartDateDescending(filteredAndSortedProducts)
        }
        if (this.filterAndSortVariables.recency_status === 'least recent') {
            filteredAndSortedProducts = this.sortbyStartDateAscending(filteredAndSortedProducts)
        }
        this.setState({displayedOwnerProductHistory : filteredAndSortedProducts})
    }

    filterForCurrentlyRentedProducts = (products) => {
        let allProducts = products
        let filteredProducts = allProducts.filter((product) => product.returnedDate == null)
        return filteredProducts
        // this.setState({displayedOwnerProductHistory : filteredProducts})
    }

    filterForPreviouslyRentedProducts = (products) => {
        let allProducts = products
        let filteredProducts = allProducts.filter((product) => product.returnedDate !== null)
        return filteredProducts
        // this.setState({displayedOwnerProductHistory : filteredProducts})
    }

    sortByStartDateDescending = (products) => {
        const sortedActivities = products.sort((a, b) => b.startDate - a.startDate)
    }

    sortbyStartDateAscending = (products) => {
        const sortedActivities = products.sort((a, b) => b.startDate + a.startDate)
    }

    filterAndSortButtonListener = (e) => {
        if (e.target.id === 'previous-rentals-button') {
            this.filterAndSortVariables.rental_status = 'previously rented'
        }
        if (e.target.id === 'current-rentals-button') {
            this.filterAndSortVariables.rental_status = 'currently rented'
        }
        console.log("you tried to filter or sort")
        this.filterAndSort();
    }

    

    render() {

        const ownerProducts = this.state.displayedOwnerProductHistory.map((ownerProduct) => (
            <OwnerProduct ownerProduct={ownerProduct}/>
        ))

        return (
            <div id="MyProfileContainer">
                <div id="RentalsContainer">
                    <div id="OwnerProductContainer">
                        {/* the below buttons are used to filter products by whether they are rented */}
                        <h4>Filter Rentals</h4>
                        <div id="OwnerProductFilterButtons">
                            <button onClick={this.showAllProducts}>All Rentals</button>
                            <button id="previous-rentals-button" onClick={this.filterAndSortButtonListener}>Previous Rentals</button>
                            <button id="current-rentals-button" onClick={this.filterAndSortButtonListener}>Current Rentals</button>
                        </div>
                        <h4>Sort Rentals</h4>
                        <div id="OwnerProductSortButtons">
                            <button id="most-recent-button" onClick={this.filterAndSortButtonListener}>Most Recent</button>
                            <button id="least-recent-button" onClick={this.filterAndSortButtonListener}>Least Recent</button>
                        </div>
                        {ownerProducts}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;