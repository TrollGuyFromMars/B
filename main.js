// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuzePkzW-zV39_72PDmniyvHhc99iAwf4",
  authDomain: "database-project12345.firebaseapp.com",
  databaseURL: "https://database-project12345-default-rtdb.firebaseio.com",
  projectId: "database-project12345",
  storageBucket: "database-project12345.appspot.com",
  messagingSenderId: "941802942011",
  appId: "1:941802942011:web:ab71f5e69251b0b0a7761e",
  measurementId: "G-RS454MJFNQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    db.collection("users").add({
        name: name,
        email: email
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        displayData();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});

function displayData() {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = '';
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            dataDisplay.innerHTML += `<p>${doc.data().name} - ${doc.data().email}</p>`;
        });
    });
}

// Initial call to display data
displayData();
