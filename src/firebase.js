import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBg5we3YwqEmbpw60vS4W1apypQgXJh0MM",
    authDomain: "what-a-app-b97dc.firebaseapp.com",
    databaseURL: "https://what-a-app-b97dc.firebaseio.com",
    projectId: "what-a-app-b97dc",
    storageBucket: "what-a-app-b97dc.appspot.com",
    messagingSenderId: "269145892586",
    appId: "1:269145892586:web:d097d2ffd01e7d9030d993",
    measurementId: "G-GZFS760DSQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;