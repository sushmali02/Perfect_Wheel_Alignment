function showImage(src) {
    document.getElementById('zoomedImage').src = src; // Set the source of the modal image to the clicked image
}

fetch('Navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

fetch('modal.html')
.then(response => response.text())
.then(data => {
    document.getElementById('profile').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

document.getElementById('signUpLink').addEventListener('click', function (e) {
    e.preventDefault();
    var loginModal = new bootstrap.Modal(document.getElementById('profileModal'));
    var signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));
    loginModal.hide(); // Hide the login modal
    signUpModal.show(); // Show the sign-up modal
});


//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyBHFVZsMLG3SQ_60CSToZDBmlvo7G5n3k8",
//    authDomain: "perfect-wheel-alignment.firebaseapp.com",
//    projectId: "perfect-wheel-alignment",
//    storageBucket: "perfect-wheel-alignment.appspot.com",
//    messagingSenderId: "1264054247",
//    appId: "1:1264054247:web:167296512fe5ce546d5742",
//    measurementId: "G-98RMJ0Z9X8"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);