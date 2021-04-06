import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDZqIHbTIzZZdfQt_YVJnsXIce1lzS_4ks",
  authDomain: "ec-dept-c7c74.firebaseapp.com",
  projectId: "ec-dept-c7c74",
  storageBucket: "ec-dept-c7c74.appspot.com",
  messagingSenderId: "1041244470682",
  appId: "1:1041244470682:web:4520666a87cb0616d9ce23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };