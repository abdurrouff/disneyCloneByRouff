// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBg-yUPWBHJ3rYxc8QMFHW6yGVOMyjmMmA',
  authDomain: 'disneyclonebyrouff.firebaseapp.com',
  projectId: 'disneyclonebyrouff',
  storageBucket: 'disneyclonebyrouff.appspot.com',
  messagingSenderId: '886393176274',
  appId: '1:886393176274:web:8770a1b4bacfe88833ed0b',
  measurementId: 'G-NCKKQPG44V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

export default db;
