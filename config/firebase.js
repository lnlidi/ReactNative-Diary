// Import the functions you need from the SDKs you need
import { initializeApp, } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyD5iNUcWNj7uIw9QfZDsegM9bvN0YoE2n0",
  authDomain: "diary-db-online.firebaseapp.com",
  projectId: "diary-db-online",
  storageBucket: "diary-db-online.appspot.com",
  messagingSenderId: "130257172686",
  appId: "1:130257172686:web:e063260497a3e43be7389f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app);