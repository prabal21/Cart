import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCYndIBbuTgJ_x388-1BQhgAG7ndGahwSo",
  authDomain: "cart-368aa.firebaseapp.com",
  projectId: "cart-368aa",
  storageBucket: "cart-368aa.appspot.com",
  messagingSenderId: "99179922969",
  appId: "1:99179922969:web:f81ada270a9212a95ecc88"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase};