import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCYndIBbuTgJ_x388-1BQhgAG7ndGahwSo",
  authDomain: "cart-368aa.firebaseapp.com",
  projectId: "cart-368aa",
  storageBucket: "cart-368aa.appspot.com",
  messagingSenderId: "99179922969",
  appId: "1:99179922969:web:f81ada270a9212a95ecc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const db = getFirestore(app);