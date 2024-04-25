import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration goes here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;