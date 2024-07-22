// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKd2HxLbLFfdZA8q3RPLI6A46ujZqknUU",
    authDomain: "valknet-3d9a6.firebaseapp.com",
    projectId: "valknet-3d9a6",
    storageBucket: "valknet-3d9a6.appspot.com",
    messagingSenderId: "754804213410",
    appId: "1:754804213410:web:eda8aeeb9f210bc00879fb",
    measurementId: "G-Z0C46KN3YC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful');
            // Redirect to another page or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('error-message').innerText = `Error: ${errorMessage}`;
        });
});
