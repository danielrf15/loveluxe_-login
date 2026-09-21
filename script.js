// ==========================================
// LOVE LUXE LOGIN SYSTEM
// ==========================================

// Admin account
const adminAccount = {
    username: "admin",
    password: "Admin123",
    fullName: "Love Luxe Admin",
    role: "admin"
};

// Your existing Love Luxe dashboard
const dashboardURL =
    "https://danielfl15.github.io/loveluxe_dashboard/";

// ==========================================
// SIGN IN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        // Check ADMIN account first
        if (
            username === adminAccount.username &&
            password === adminAccount.password
        ) {

            // Save current logged-in user
            localStorage.setItem(
                "loveLuxeCurrentUser",
                JSON.stringify(adminAccount)
            );

            message.style.color = "#4b7c59";
            message.textContent = "Login successful. Redirecting...";

            setTimeout(function() {
                window.location.href = dashboardURL;
            }, 700);

            return;
        }


        // Get customer accounts
        const customers =
            JSON.parse(
                localStorage.getItem("loveLuxeCustomers")
            ) || [];


        // Find customer
        const customer = customers.find(function(account) {

            return (
                account.username === username &&
                account.password === password
            );

        });


        if (customer) {

            // Make sure the account is a customer
            if (customer.role === "customer") {

                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(customer)
                );

                message.style.color = "#4b7c59";
                message.textContent =
                    "Login successful. Redirecting...";

                setTimeout(function() {
                    window.location.href = "customer.html";
                }, 700);

            }

        } else {

            message.style.color = "#b94a48";
            message.textContent =
                "Incorrect username or password.";

        }

    });

}


// ==========================================
// SIGN UP
// ==========================================

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const username =
            document.getElementById("newUsername").value.trim();

        const password =
            document.getElementById("newPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("signupMessage");


        // Check password confirmation
        if (password !== confirmPassword) {

            message.style.color = "#b94a48";
            message.textContent =
                "Passwords do not match.";

            return;
        }


        // Prevent empty information
        if (
            fullName === "" ||
            username === "" ||
            password === ""
        ) {

            message.style.color = "#b94a48";
            message.textContent =
                "Please complete all fields.";

            return;
        }


        // Prevent using admin username
        if (
            username.toLowerCase() ===
            adminAccount.username.toLowerCase()
        ) {

            message.style.color = "#b94a48";
            message.textContent =
                "This username is not available.";

            return;
        }


        // Get existing customers
        let customers =
            JSON.parse(
                localStorage.getItem("loveLuxeCustomers")
            ) || [];


        // Check if username already exists
        const existingCustomer =
            customers.find(function(account) {

                return (
                    account.username.toLowerCase() ===
                    username.toLowerCase()
                );

            });


        if (existingCustomer) {

            message.style.color = "#b94a48";
            message.textContent =
                "Username already exists.";

            return;
        }


        // Create new CUSTOMER account
        const newCustomer = {

            fullName: fullName,
            username: username,
            password: password,
            role: "customer"

        };


        // Add customer to array
        customers.push(newCustomer);


        // Save customers to browser
        localStorage.setItem(
            "loveLuxeCustomers",
            JSON.stringify(customers)
        );


        message.style.color = "#4b7c59";
        message.textContent =
            "Account created successfully!";


        // Clear form
        signupForm.reset();


        // Send user back to login
        setTimeout(function() {

            window.location.href = "index.html";

        }, 1200);

    });

}


// ==========================================
// CUSTOMER PAGE
// ==========================================

const welcomeCustomer =
    document.getElementById("welcomeCustomer");

if (welcomeCustomer) {

    const currentUser =
        JSON.parse(
            localStorage.getItem("loveLuxeCurrentUser")
        );


    // No logged-in account
    if (!currentUser) {

        window.location.href = "index.html";

    }

    // Prevent admin from opening customer page
    else if (currentUser.role !== "customer") {

        window.location.href = dashboardURL;

    }

    else {

        welcomeCustomer.textContent =
            "Welcome, " + currentUser.fullName + "!";

    }

}


// ==========================================
// LOG OUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );

    window.location.href = "index.html";
}
