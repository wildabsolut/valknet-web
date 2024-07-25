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

        if (!username) {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your username.</p>";
            return;
        }

        if (!email) {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your email address.</p>";
            return;
        }

        if (!password) {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your password.</p>";
            return;
        }

        submitbutton.innerHTML = "<div class='loader'></div>";
        document.getElementById("username").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        submitbutton.disabled = true;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                user.updateProfile({
                    displayName: username
                }).then(() => {
                    user.sendEmailVerification().then(() => {
                        document.getElementById("message").innerHTML = "<p class='success-message'>Welcome to ValkNet! You will need to verify your E-mail to use our services.</p>";
                    }).catch((error) => {
                        if (error.code === 'auth/invalid-email') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>The email address is badly formatted.</p>";
                        } else if (error.code === 'auth/user-not-found') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>No user found with this email.</p>";
                        } else if (error.code === 'auth/wrong-password') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                        } else if (error.code === 'auth/invalid-login-credentials') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                        } else if (error.code === 'auth/user-disabled') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>This account has been suspended. Please contact support at contact@valknet.xyz for support.</p>";
                        } else if (error.code === 'auth/network-request-failed') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>Failed to send. Are you connected to the internet?</p>";
                        } else if (error.code === 'auth/internal-error') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. Please try again later.</p>";
                        } else if (error.code === 'auth/no-auth-event') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>An invalid event was sent. Please contact an Administrator if the issue persists.</p>";
                        } else if (error.code === 'auth/null-user') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. The specified user is null.</p>";
                        } else if (error.code === 'auth/unverified-email') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>This user has not verified their email. Please verify the email before logging in.</p>";
                        } else if (error.code === 'auth/user-not-found') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>The specified user does not exist.</p>";
                        } else if (error.code === 'auth/too-many-requests') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>You are sending too many requests. Please try again later.</p>";
                        } else if (error.code === 'auth/timeout') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>You have exceeded the operation timeout. Please try again.</p>";
                        } else if (error.code === 'auth/weak-password') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>Your password is too weak.</p>";
                        } else if (error.code === 'auth/quota-exceeded') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>We have ratelimited this operation. For support, please contact contact@valknet.xyz</p>";
                        } else if (error.code === 'auth/admin-restricted-operation') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>This operation been temporarily disabled. Contact contact@valknet.xyz if the problem persists.</p>";
                        } else if (error.code === 'auth/argument-error') {
                            document.getElementById("message").innerHTML = "<p class='error-message'>An argument error occured. Please try again and ensure all fields are filled out.</p>";
                        } else {
                            document.getElementById("message").innerHTML = "<p class='error-message'>Login failed; Internal Server Error. Please try again.</p>";
                        }
                        //document.getElementById("message").innerHTML = "<p class='error-message'>" + error.message + "</p>";
                    });
                }).catch((error) => {
                    if (error.code === 'auth/invalid-email') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>The email address is badly formatted.</p>";
                    } else if (error.code === 'auth/user-not-found') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>No user found with this email.</p>";
                    } else if (error.code === 'auth/wrong-password') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                    } else if (error.code === 'auth/invalid-login-credentials') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                    } else if (error.code === 'auth/user-disabled') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>This account has been suspended. Please contact support at contact@valknet.xyz for support.</p>";
                    } else if (error.code === 'auth/network-request-failed') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>Failed to send. Are you connected to the internet?</p>";
                    } else if (error.code === 'auth/internal-error') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. Please try again later.</p>";
                    } else if (error.code === 'auth/no-auth-event') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>An invalid event was sent. Please contact an Administrator if the issue persists.</p>";
                    } else if (error.code === 'auth/null-user') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. The specified user is null.</p>";
                    } else if (error.code === 'auth/unverified-email') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>This user has not verified their email. Please verify the email before logging in.</p>";
                    } else if (error.code === 'auth/user-not-found') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>The specified user does not exist.</p>";
                    } else if (error.code === 'auth/too-many-requests') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>You are sending too many requests. Please try again later.</p>";
                    } else if (error.code === 'auth/timeout') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>You have exceeded the operation timeout. Please try again.</p>";
                    } else if (error.code === 'auth/weak-password') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>Your password is too weak.</p>";
                    } else if (error.code === 'auth/quota-exceeded') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>We have ratelimited this operation. For support, please contact contact@valknet.xyz</p>";
                    } else if (error.code === 'auth/admin-restricted-operation') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>This operation been temporarily disabled. Contact contact@valknet.xyz if the problem persists.</p>";
                    } else if (error.code === 'auth/argument-error') {
                        document.getElementById("message").innerHTML = "<p class='error-message'>An argument error occured. Please try again and ensure all fields are filled out.</p>";
                    } else {
                        document.getElementById("message").innerHTML = "<p class='error-message'>Login failed; Internal Server Error. Please try again.</p>";
                    }
                });
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>The email address is badly formatted.</p>";
                } else if (error.code === 'auth/user-not-found') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>No user found with this email.</p>";
                } else if (error.code === 'auth/wrong-password') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                } else if (error.code === 'auth/invalid-login-credentials') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                } else if (error.code === 'auth/user-disabled') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This account has been suspended. Please contact support at contact@valknet.xyz for support.</p>";
                } else if (error.code === 'auth/network-request-failed') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Failed to send. Are you connected to the internet?</p>";
                } else if (error.code === 'auth/internal-error') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. Please try again later.</p>";
                } else if (error.code === 'auth/no-auth-event') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An invalid event was sent. Please contact an Administrator if the issue persists.</p>";
                } else if (error.code === 'auth/null-user') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. The specified user is null.</p>";
                } else if (error.code === 'auth/unverified-email') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This user has not verified their email. Please verify the email before logging in.</p>";
                } else if (error.code === 'auth/user-not-found') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>The specified user does not exist.</p>";
                } else if (error.code === 'auth/too-many-requests') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>You are sending too many requests. Please try again later.</p>";
                } else if (error.code === 'auth/timeout') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>You have exceeded the operation timeout. Please try again.</p>";
                } else if (error.code === 'auth/weak-password') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Your password is too weak.</p>";
                } else if (error.code === 'auth/quota-exceeded') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>We have ratelimited this operation. For support, please contact contact@valknet.xyz</p>";
                } else if (error.code === 'auth/admin-restricted-operation') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This operation been temporarily disabled. Contact contact@valknet.xyz if the problem persists.</p>";
                } else if (error.code === 'auth/argument-error') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An argument error occured. Please try again and ensure all fields are filled out.</p>";
                } else {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Login failed; Internal Server Error. Please try again.</p>";
                }
                document.getElementById("username").disabled = false;
                document.getElementById("email").disabled = false;
                document.getElementById("password").disabled = false;
                submitbutton.disabled = false;
                submitbutton.innerHTML = "Sign Up";
            });
    });
}