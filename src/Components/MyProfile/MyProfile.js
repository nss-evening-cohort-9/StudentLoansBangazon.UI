import React from 'react';
import rentalData from '../../data/rentalData';
import OwnerProduct from '../OwnerProduct/OwnerProduct';
import './MyProfile.scss';

class MyProfile extends React.Component {

    state = {
        allOwnerProductHistory : []
    }

    componentDidMount = () => {
        rentalData.getOwnerProductHistory('vsubdsbu62ysvua')
        .then( resp => {
            const data = resp;
            this.setState({allOwnerProductHistory : data})
        })
        .catch(err => console.error(err))
    }

    render() {

        const ownerProducts = this.state.allOwnerProductHistory.map((ownerProduct) => (
            <OwnerProduct ownerProduct={ownerProduct}/>
        ))

        return (
            <div id="MyProfileContainer">
                <div id="OwnerProductContainer">
                    {ownerProducts}
                </div>
            </div>
        )
    }
}

export default MyProfile;