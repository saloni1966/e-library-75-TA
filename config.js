import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
