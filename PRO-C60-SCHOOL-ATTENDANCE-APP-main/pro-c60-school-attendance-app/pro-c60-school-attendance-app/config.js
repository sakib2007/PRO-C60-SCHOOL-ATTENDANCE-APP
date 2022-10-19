import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyBxi5amacWNNLU5L3_JjxOpUVH8AZXXgHM',
  authDomain: 'school-attendance-app-fbd2d.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-fbd2d-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-fbd2d',
  storageBucket: 'school-attendance-app-fbd2d.appspot.com',
  messagingSenderId: '675629745961',
  appId: '1:675629745961:web:3906a2e6c1e5119ae91938',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
