// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmytWlGclMWjZYTANHZ4h9Ff5edPOrRi4",
    authDomain: "attendance-management-sy-b3a3d.firebaseapp.com",
    projectId: "attendance-management-sy-b3a3d",
    storageBucket: "attendance-management-sy-b3a3d.appspot.com",
    messagingSenderId: "408066894364",
    appId: "1:408066894364:web:518185a119b1a680978dd9",
    measurementId: "G-KVCSCWGMV6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore()



async function Login() {
    var loginemail = document.getElementById("login_email").value
    var loginpassword = document.getElementById("login_password").value


    const docRef = doc(db, "Admin", "dH7ZKKGnn934ExC5XTA3");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if (loginemail == docSnap.data().email && loginpassword == docSnap.data().password) {
            window.open("admin.html" ,"_self")
        }
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}


var btn = document.getElementById("login_button")
btn.addEventListener("click", Login)
