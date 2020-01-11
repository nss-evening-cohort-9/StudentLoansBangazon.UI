import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth'

const baseUrl = 'https://localhost:44319/api';

const checkForUserAcct = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/users/checkuser/${firebase.auth().currentUser.uid}`)
    .then(result => resolve(result.data))
    .catch(err => reject(reject))
})

const createNewUser = (firebaseId) => new Promise((resolve, reject) => {
    const userName = firebase.auth().currentUser.displayName.split(' ')
    const userInformation = {
        FirstName : userName[0],
        LastName : userName[1],
        FirebaseId : firebaseId
    }
    console.log(userInformation)

    axios.post(`${baseUrl}/users/createuser`, userInformation)
        .then(result => resolve(result.data))
        .catch(err => reject(reject))
})


export default {
    checkForUserAcct,
    createNewUser
};
