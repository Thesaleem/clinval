import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBKr9yMjmgnT7HLxbfKz8QZvkf3ha5GyV4",
    authDomain: "clinval-387d5.firebaseapp.com",
    databaseURL: "https://clinval-387d5-default-rtdb.firebaseio.com",
    projectId: "clinval-387d5",
    storageBucket: "clinval-387d5.appspot.com",
    messagingSenderId: "383984892616",
    appId: "1:383984892616:web:b42775742e5379db40c3fd",
    measurementId: "G-YMLVJ35TS9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
