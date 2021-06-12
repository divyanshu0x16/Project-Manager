import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCA_pZHAT-wK8D_6dcfxfeA7Mg78zcd22U',
  authDomain: 'project-manager-3f683.firebaseapp.com',
  projectId: 'project-manager-3f683',
  storageBucket: 'project-manager-3f683.appspot.com',
  messagingSenderId: '357561780568',
  appId: '1:357561780568:web:bc8524d24d22e813ddfd2d',
  measurementId: 'G-8ZXSRC8DD4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
