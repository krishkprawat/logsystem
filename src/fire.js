import firebase from 'firebase/app'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwPzQH7-5FaRsdV7EtvzItEdNLawdYpYc",
    authDomain: "loginsystem-c5b65.firebaseapp.com",
    projectId: "loginsystem-c5b65",
    storageBucket: "loginsystem-c5b65.appspot.com",
    messagingSenderId: "341835508657",
    appId: "1:341835508657:web:4e94dfbc95fb15fe11ab90"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  export default fire;
  
