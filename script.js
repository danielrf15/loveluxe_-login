// ==========================================
// LOVE LUXE LOGIN SYSTEM
// ==========================================


// ==========================================
// ADMIN ACCOUNT
// ==========================================

const adminAccount = {

    username: "admin",

    password: "Admin123",

    fullName: "Love Luxe Admin",

    role: "admin"

};


// ==========================================
// ADMIN DASHBOARD URL
// ==========================================

const dashboardURL =
    "https://danielrf15.github.io/loveluxe_dashboard/";


// ==========================================
// SIGN IN
// ==========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const username =
                document
                .getElementById("username")
                .value
                .trim();


            const password =
                document
                .getElementById("password")
                .value;


            const message =
                document
                .getElementById("loginMessage");


            // ==================================
            // CHECK ADMIN ACCOUNT
            // ==================================

            if (
                username === adminAccount.username &&
                password === adminAccount.password
            ) {

                // Save logged-in admin
                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(adminAccount)
                );


                message.style.color =
                    "#4b7c59";

                message.textContent =
                    "Login successful. Redirecting...";


                // Redirect to your dashboard
                setTimeout(
                    function() {

                        window.location.href =
                            dashboardURL;

                    },
                    700
                );


                return;
            }


            // ==================================
            // GET CUSTOMER ACCOUNTS
            // ==================================

            const customers =
                JSON.parse(
                    localStorage.getItem(
                        "loveLuxeCustomers"
                    )
                ) || [];


            // ==================================
            // FIND CUSTOMER
            // ==================================

            const customer =
                customers.find(
                    function(account) {

                        return (
                            account.username ===
                            username &&
                            account.password ===
                            password
                        );

                    }
                );


            // ==================================
            // CUSTOMER LOGIN
            // ==================================

            if (customer) {

                if (
                    customer.role ===
                    "customer"
                ) {

                    localStorage.setItem(
                        "loveLuxeCurrentUser",
                        JSON.stringify(customer)
                    );


                    message.style.color =
                        "#4b7c59";

                    message.textContent =
                        "Login successful. Redirecting...";


                    setTimeout(
                        function() {

                            window.location.href =
                                "customer.html";

                        },
                        700
                    );

                }

            }


            // ==================================
            // WRONG LOGIN
            // ==================================

            else {

                message.style.color =
                    "#b94a48";

                message.textContent =
                    "Incorrect username or password.";

            }

        }
    );

}


// ==========================================
// SIGN UP
// ==========================================

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const fullName =
                document
                .getElementById("fullName")
                .value
                .trim();


            const username =
                document
                .getElementById("newUsername")
                .value
                .trim();


            const password =
                document
                .getElementById("newPassword")
                .value;


            const confirmPassword =
                document
                .getElementById("confirmPassword")
                .value;


            const message =
                document
                .getElementById("signupMessage");


            // ==================================
            // CHECK ALL FIELDS
            // ==================================

            if (
                fullName === "" ||
                username === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                message.style.color =
                    "#b94a48";

                message.textContent =
                    "Please complete all fields.";

                return;
            }


            // ==================================
            // CHECK PASSWORD
            // ==================================

            if (
                password !==
                confirmPassword
            ) {

                message.style.color =
                    "#b94a48";

                message.textContent =
                    "Passwords do not match.";

                return;
            }


            // ==================================
            // PREVENT ADMIN USERNAME
            // ==================================

            if (
                username.toLowerCase() ===
                adminAccount.username.toLowerCase()
            ) {

                message.style.color =
                    "#b94a48";

                message.textContent =
                    "This username is not available.";

                return;
            }


            // ==================================
            // GET EXISTING CUSTOMERS
            // ==================================

            let customers =
                JSON.parse(
                    localStorage.getItem(
                        "loveLuxeCustomers"
                    )
                ) || [];


            // ==================================
            // CHECK EXISTING USERNAME
            // ==================================

            const existingCustomer =
                customers.find(
                    function(account) {

                        return (
                            account.username.toLowerCase() ===
                            username.toLowerCase()
                        );

                    }
                );


            if (existingCustomer) {

                message.style.color =
                    "#b94a48";

                message.textContent =
                    "Username already exists.";

                return;
            }


            // ==================================
            // CREATE CUSTOMER ACCOUNT
            // ==================================

            const newCustomer = {

                fullName: fullName,

                username: username,

                password: password,

                role: "customer"

            };


            // Add customer
            customers.push(
                newCustomer
            );


            // Save customers
            localStorage.setItem(
                "loveLuxeCustomers",
                JSON.stringify(customers)
            );


            // ==================================
            // SUCCESS MESSAGE
            // ==================================

            message.style.color =
                "#4b7c59";

            message.textContent =
                "Account created successfully!";


            // Clear form
            signupForm.reset();


            // Go back to login
            setTimeout(
                function() {

                    window.location.href =
                        "index.html";

                },
                1200
            );

        }
    );

}


// ==========================================
// CUSTOMER PAGE
// ==========================================

const welcomeCustomer =
    document.getElementById(
        "welcomeCustomer"
    );


if (welcomeCustomer) {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "loveLuxeCurrentUser"
            )
        );


    // ==================================
    // NO USER LOGGED IN
    // ==================================

    if (!currentUser) {

        window.location.href =
            "index.html";

    }


    // ==================================
    // ADMIN TRYING CUSTOMER PAGE
    // ==================================

    else if (
        currentUser.role !==
        "customer"
    ) {

        window.location.href =
            dashboardURL;

    }


    // ==================================
    // CUSTOMER
    // ==================================

    else {

        welcomeCustomer.textContent =
            "Welcome, " +
            currentUser.fullName +
            "!";

    }

}


// ==========================================
// LOG OUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );


    window.location.href =
        "index.html";
}
