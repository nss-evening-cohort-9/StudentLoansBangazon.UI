import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth'

const baseUrl = 'https://localhost:44319/api';

const checkForUserAcct = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/checkUser/${firebase.auth().currentUser.uid}`)
    .then(result => resolve(result.data))
    .catch(err => reject(reject))
})

const createNewUser = () => new Promise((resolve, reject) => {
    const userName = firebase.auth().currentUser.displayName.split(' ')
    const userInformation = {
        firstName : userName[0],
        lastName : userName[1],
        firebaseId : firebase.auth().currentUser.uid
    }
    console.log(userInformation)

    // axios.post(`${baseUrl}/user/createUser/${firebase.auth().currentUser.uid}`, userInformation)
    //     .then(result => resolve(result.data))
    //     .catch(err => reject(reject))
})


export default {
};
