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
                {/* <div id="testContainer">
                    <div>
                        <h2>this is left column</h2>
                    </div>
                    <div>
                        <h2>this is right column</h2>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default MyProfile;