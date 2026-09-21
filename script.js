const loginForm = document.getElementById("loginForm");

const errorMessage = document.getElementById("errorMessage");


// ADMIN LOGIN DETAILS

const adminUsername = "admin";
const adminPassword = "Admin123";


// YOUR DASHBOARD LINK

const dashboardURL =
    "https://danielfl15.github.io/loveluxe_dashboard/";


// LOGIN FUNCTION

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get the user's input

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    // Check username and password

    if (
        username === adminUsername &&
        password === adminPassword
    ) {

        // Correct login

        window.location.href = dashboardURL;

    } else {

        // Wrong login

        errorMessage.textContent =
            "Incorrect username or password.";

    }

});
