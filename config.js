import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcLHxJAdUzVvXtYonMYxDbRwO-sLtpBrw",
  authDomain: "bancodedados-a8815.firebaseapp.com",
  databaseURL: "https://bancodedados-a8815-default-rtdb.firebaseio.com",
  projectId: "bancodedados-a8815",
  storageBucket: "bancodedados-a8815.appspot.com",
  messagingSenderId: "602062780669",
  appId: "1:602062780669:web:e5420a0f1f9eee936aa694"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();