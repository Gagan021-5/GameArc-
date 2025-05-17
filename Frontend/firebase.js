
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB7OXtgiPEmPzdkc7IR02VGrolulP3b-Qs",
  authDomain: "gamearc-85b11.firebaseapp.com",
  projectId: "gamearc-85b11",
  storageBucket: "gamearc-85b11.firebasestorage.app",
  messagingSenderId: "1068011143309",
  appId: "1:1068011143309:web:aa3f096f6d0b538f63a2c4",
  measurementId: "G-FXJHYLXXB8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);




export {auth,app}