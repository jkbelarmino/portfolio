document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Prevent default only for internal anchor links
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollToTop");

    // Show button only after scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollButton.classList.remove("hidden");
        } else {
            scrollButton.classList.add("hidden");
        }
    });

    // Scroll to top on button click
    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


// Import Firebase Services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFlZY9OMaV6xnGVLmQzVtmZIv5iFxeI0Q",
    authDomain: "resume-login-1f2f7.firebaseapp.com",
    projectId: "resume-login-1f2f7",
    storageBucket: "resume-login-1f2f7.firebasestorage.app",
    messagingSenderId: "968326183137",
    appId: "1:968326183137:web:e07ef115ff3ce456485fa0",
    measurementId: "G-5QZM6MT8KK"
};
const app = initializeApp(firebaseConfig);

// Set Up Authentication
const auth = getAuth(app);

// Login Functionality
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "https://jkbelarmino.github.io/portfolio/SampleResumeTemplate.pdf";
        })
        .catch(error => {
            document.getElementById("error-message").textContent = "Login failed. Please check your credentials.";
        });
});


const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleLogin();
    });
}


signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.location.href = "https://jkbelarmino.github.io/portfolio/SampleResumeTemplate.pdf";
    })
    .catch(error => {
        let errorMessage = "Login failed. Please try again.";
        if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email format. Please enter a valid email.";
        } else if (error.code === "auth/user-not-found") {
            errorMessage = "No account found for this email. Please sign up first.";
        } else if (error.code === "auth/wrong-password") {
            errorMessage = "Incorrect password. Please try again.";
        }
        document.getElementById("error-message").textContent = errorMessage;
    });
