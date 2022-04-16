import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAccSbNHw2qynVoAQUU0baJeEdX0638MGk",
  authDomain: "e-library-ffda5.firebaseapp.com",
  projectId: "e-library-ffda5",
  storageBucket: "e-library-ffda5.appspot.com",
  messagingSenderId: "547840128490",
  appId: "1:547840128490:web:ea74ebbaa8dc85b7b0ee93"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
