// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJWkFn5Qr3_nuDYatHOxgL2xEatbNSXAE",
  authDomain: "iot-gas-21fce.firebaseapp.com",
  databaseURL:
    "https://iot-gas-21fce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-gas-21fce",
  storageBucket: "iot-gas-21fce.appspot.com",
  messagingSenderId: "263638714564",
  appId: "1:263638714564:web:8b66a8acc2b50147c6a191",
  measurementId: "G-DKQ40KGD5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
