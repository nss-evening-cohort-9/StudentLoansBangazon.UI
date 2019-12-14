import axios from 'axios';

const baseUrl = 'https://localhost:44319/api';

const getOwnerProductHistory = (firebaseId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/rentals/owner/${firebaseId}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err))
})

export default {getOwnerProductHistory};
