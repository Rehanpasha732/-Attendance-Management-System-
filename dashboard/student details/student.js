import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";

import { doc, setDoc, getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBmytWlGclMWjZYTANHZ4h9Ff5edPOrRi4",
    authDomain: "attendance-management-sy-b3a3d.firebaseapp.com",
    projectId: "attendance-management-sy-b3a3d",
    storageBucket: "attendance-management-sy-b3a3d.appspot.com",
    messagingSenderId: "408066894364",
    appId: "1:408066894364:web:518185a119b1a680978dd9",
    measurementId: "G-KVCSCWGMV6"
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore()
// Initialize Firebase

window.onload = async() => {

    const querySnapshot = await getDocs(collection(db, "Studends"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        console.log(doc.data().studentname)
    });

}