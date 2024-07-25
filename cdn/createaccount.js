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

const signup = document.getElementById('signup');
if (signup) {
    const submitbutton = document.getElementById('signup-button');
    signup.addEventListener('click', () => {
        document.getElementById("message").innerHTML = "<p class='error-message'>Your account has been suspended. Please E-mail contact@valknet.xyz for more information.</p>";
        submitbutton.innerHTML = "<div class='loader'></div>";
        document.getElementById("username").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        submitbutton.disabled = true;
    });
}