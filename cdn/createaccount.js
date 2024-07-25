const { initializeApp } = firebase;
const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } = firebase.auth;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKd2HxLbLFfdZA8q3RPLI6A46ujZqknUU",
    authDomain: "valknet-3d9a6.firebaseapp.com",
    projectId: "valknet-3d9a6",
    storageBucket: "valknet-3d9a6.appspot.com",
    messagingSenderId: "754804213410",
    appId: "1:754804213410:web:eda8aeeb9f210bc00879fb",
    measurementId: "G-Z0C46KN3YC"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const submitbutton = document.getElementById('signup-button');
if (submitbutton) {
    submitbutton.addEventListener('click', () => {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username) {

        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your username.</p>";
            return;
        }

        if (email) {

        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your email address.</p>";
            return;
        }

        if (password) {

        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your password.</p>";
            return;
        }

        document.getElementById("message").innerHTML = "<p class='error-message'>Your account has been suspended. Please E-mail contact@valknet.xyz for more information.</p>";
        submitbutton.innerHTML = "<div class='loader'></div>";
        document.getElementById("username").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        submitbutton.disabled = true;
    });
}