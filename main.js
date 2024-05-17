// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
