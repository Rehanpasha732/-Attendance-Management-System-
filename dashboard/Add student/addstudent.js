
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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

let select = document.getElementById("selectCourse")
let studentname = document.getElementById("name")
let fathername = document.getElementById("father")
let studentemail = document.getElementById("email")
let studentphone = document.getElementById("phone")

let rollnumber = document.getElementById("roll_number")
let Course_Name = document.getElementById("Course_Name")


let dateofbirth = document.getElementById("dob")
let selectteacher = document.getElementById("selectteacher")
let selecttimings = document.getElementById("selecttimings")
let error = document.getElementById("error")

const sendstudentDAta = async () => {
    if (studentname.value != "" && fathername.value != "" && studentemail.value != "" && studentphone.value != " ") {

        await addDoc(collection(db, "Studends"), {
            studentname: studentname.value,
            fathername: fathername.value,
            studentemail: studentemail.value,
            studentphone: studentphone.value,
            studentrollnumber: rollnumber.value,
            studentcourse: Course_Name.value,

            selecttimings: selecttimings.value,
            selecttimings: selecttimings.value,

        });
        swal("submit")
    }
    else {
        swal("Fill it")
    }
    console.log(select.value, studentemail, studentname)
}

window.sendstudentDAta = sendstudentDAta