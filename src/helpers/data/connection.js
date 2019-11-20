import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.apiKeys);
  }
};

export default firebaseApp;
