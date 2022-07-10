import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_N6xrFV76M7-5VJ0d99WWzlnUK598X7o",
  authDomain: "cart-5e188.firebaseapp.com",
  projectId: "cart-5e188",
  storageBucket: "cart-5e188.appspot.com",
  messagingSenderId: "843720081609",
  appId: "1:843720081609:web:61fc7ccb923aa34c4ccd18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
