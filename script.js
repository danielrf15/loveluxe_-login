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
// ADMIN DASHBOARD
// ==========================================

const dashboardURL =
    "https://danielrf15.github.io/loveluxe_dashboard/";


// ==========================================
// LOGIN
// ==========================================

function login() {

    const usernameElement =
        document.getElementById("username");

    const passwordElement =
        document.getElementById("password");

    const errorElement =
        document.getElementById("loginError");


    if (!usernameElement || !passwordElement) {

        return;

    }


    const username =
        usernameElement.value.trim();

    const password =
        passwordElement.value.trim();


    // ==========================================
    // ADMIN LOGIN
    // ==========================================

    if (
        username === adminAccount.username &&
        password === adminAccount.password
    ) {

        localStorage.setItem(

            "loveLuxeCurrentUser",

            JSON.stringify(adminAccount)

        );


        window.location.href =
            dashboardURL;


        return;

    }


    // ==========================================
    // CUSTOMER LOGIN
    // ==========================================

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    const customer =

        customers.find(

            function(user) {

                return (

                    user.username === username &&

                    user.password === password

                );

            }

        );


    if (customer) {

        localStorage.setItem(

            "loveLuxeCurrentUser",

            JSON.stringify(customer)

        );


        // CUSTOMER GOES DIRECTLY
        // TO SHOPPER CATALOG

        window.location.href =
            "catalog.html";


        return;

    }


    // ==========================================
    // WRONG LOGIN
    // ==========================================

    if (errorElement) {

        errorElement.textContent =
            "Invalid username or password.";

    }

}


// ==========================================
// SIGN UP
// ==========================================

function signup() {

    const fullNameElement =
        document.getElementById("fullName");

    const usernameElement =
        document.getElementById("signupUsername");

    const passwordElement =
        document.getElementById("signupPassword");

    const confirmElement =
        document.getElementById("confirmPassword");

    const messageElement =
        document.getElementById("signupMessage");


    if (
        !fullNameElement ||
        !usernameElement ||
        !passwordElement ||
        !confirmElement
    ) {

        return;

    }


    const fullName =
        fullNameElement.value.trim();

    const username =
        usernameElement.value.trim();

    const password =
        passwordElement.value;

    const confirmPassword =
        confirmElement.value;


    // ==========================================
    // PASSWORD CHECK
    // ==========================================

    if (password !== confirmPassword) {

        messageElement.textContent =
            "Passwords do not match.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // ==========================================
    // ADMIN USERNAME CHECK
    // ==========================================

    if (
        username.toLowerCase() === "admin"
    ) {

        messageElement.textContent =
            "This username is not available.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // ==========================================
    // GET EXISTING CUSTOMERS
    // ==========================================

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    // ==========================================
    // DUPLICATE USERNAME CHECK
    // ==========================================

    const existingUser =

        customers.find(

            function(user) {

                return (

                    user.username.toLowerCase() ===
                    username.toLowerCase()

                );

            }

        );


    if (existingUser) {

        messageElement.textContent =
            "Username already exists.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // ==========================================
    // CREATE CUSTOMER
    // ==========================================

    const newCustomer = {

        fullName: fullName,

        username: username,

        password: password,

        role: "customer"

    };


    customers.push(newCustomer);


    localStorage.setItem(

        "loveLuxeCustomers",

        JSON.stringify(customers)

    );


    // ==========================================
    // SUCCESS
    // ==========================================

    messageElement.textContent =
        "Account created successfully!";

    messageElement.style.color =
        "#4a8c5c";


    setTimeout(

        function() {

            window.location.href =
                "index.html";

        },

        1000

    );

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );


    window.location.href =
        "index.html";

}


// ==========================================
// CUSTOMER PAGE
// ==========================================

function loadCustomerPage() {

    const welcomeElement =
        document.getElementById(
            "customerWelcome"
        );


    if (!welcomeElement) {

        return;

    }


    const currentUser =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!currentUser) {

        window.location.href =
            "index.html";

        return;

    }


    try {

        const user =
            JSON.parse(currentUser);


        if (user.role !== "customer") {

            window.location.href =
                dashboardURL;

            return;

        }


        welcomeElement.textContent =
            "Welcome, " +
            user.fullName +
            "!";

    }

    catch (error) {

        localStorage.removeItem(
            "loveLuxeCurrentUser"
        );

        window.location.href =
            "index.html";

    }

}


// ==========================================
// START CUSTOMER PAGE
// ==========================================

loadCustomerPage();
