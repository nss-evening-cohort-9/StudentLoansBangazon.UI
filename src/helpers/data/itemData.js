import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.apiKeys.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json`)
    .then((res) => {
      const items = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        items.push(res.data[fbKey]);
      });
      resolve(items);
      console.error(items);
    })
    .catch(err => reject(err));
});


export default { getItems };
