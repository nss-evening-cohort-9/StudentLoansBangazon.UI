import axios from 'axios';

const baseUrl = 'https://localhost:44319/api';

const getAllProducts = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/products/home`)
        .then(result => resolve(result.data))
        .catch(err => reject(reject))
})

const getSingleProduct = productId => axios.get(`${baseUrl}/products/item/${productId}`)

export default {
    getAllProducts, 
    getSingleProduct
};