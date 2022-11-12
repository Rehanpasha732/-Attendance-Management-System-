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

let contain = document.getElementById("contain")
window.onload = async() => {
    const querySnapshot = await getDocs(collection(db, "Studends"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let div = `
        <div class="card">
                <div class="img">
                    <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1668262795~exp=1668263395~hmac=865617d225fe7d6915f3243e238414806bcf4930d3b031c6257203c58ffb796d" alt="">
                </div>
                <div class="data">
                    <div class="text">
                        <div class="text_name" id="name">Name</div>
                        <div class="text_data">  ${doc.data().studentname}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">  ${doc.data().fathername}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Contact</div>
                        <div class="text_data">  ${doc.data().studentphone}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">CNIC</div>
                        <div class="text_data">  ${doc.data().studentemail}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Course</div>
                        <div class="text_data">  ${doc.data().studentcourse}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Roll Number</div>
                        <div class="text_data">  ${doc.data().studentrollnumber}</div>
                    </div>
                    <div class="status">
                        <div class="text_status">Status</div>
                        <div class="text_data">✔</div>
                    </div>
                   
                </div>
            </div>
        `
        contain.innerHTML += div
    });

}