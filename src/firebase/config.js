import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA3RZidHA1FUBQ_MaqXt4zlvDF8REcnDkw',
  authDomain: 'fir-tutorial-96346.firebaseapp.com',
  databaseURL: 'https://fir-tutorial-96346.firebaseio.com',
  projectId: 'fir-tutorial-96346',
  storageBucket: 'fir-tutorial-96346.appspot.com',
  messagingSenderId: '943652647016',
  appId: '1:943652647016:android:508150e6c7646feb45cbdd',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };