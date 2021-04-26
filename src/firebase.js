import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBGMUjLZiuL-G-sIQkBijXID7MdOt5Ptvw",
    authDomain: "disney-clone-32d3d.firebaseapp.com",
    projectId: "disney-clone-32d3d",
    storageBucket: "disney-clone-32d3d.appspot.com",
    messagingSenderId: "139550991802",
    appId: "1:139550991802:web:e8e28b483917dd3a8ca983"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth, provider, storage};
export default db; 