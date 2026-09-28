/* ==========================================
   LOVE LUXE AUTHENTICATION
========================================== */


/* ==========================================
   ADMIN ACCOUNT
========================================== */

const adminAccount = {

    username: "admin",

    password: "Admin123",

    fullName: "Love Luxe Admin",

    role: "admin"

};


/* ==========================================
   HELPER FUNCTIONS
========================================== */

function getCustomers() {

    return JSON.parse(
        localStorage.getItem("loveLuxeCustomers")
    ) || [];

}


function saveCustomers(customers) {

    localStorage.setItem(
        "loveLuxeCustomers",
        JSON.stringify(customers)
    );

}


function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("loveLuxeCurrentUser")
    );

}


function saveCurrentUser(user) {

    localStorage.setItem(
        "loveLuxeCurrentUser",
        JSON.stringify(user)
    );

}


/* ==========================================
   LOGIN
========================================== */

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
                document.getElementById(
                    "loginMessage"
                );


            /* ------------------------------
               ADMIN LOGIN
            ------------------------------ */

            if (
                username === adminAccount.username &&
                password === adminAccount.password
            ) {

                localStorage.setItem(
                    "loveLuxeAdminLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(adminAccount)
                );


                window.location.href =
                    "admin.html";


                return;

            }


            /* ------------------------------
               CUSTOMER LOGIN
            ------------------------------ */

            const customers =
                getCustomers();


            const customer =
                customers.find(
                    function(account) {

                        return (
                            account.username === username &&
                            account.password === password
                        );

                    }
                );


            if (customer) {

                localStorage.setItem(
                    "loveLuxeAdminLoggedIn",
                    "false"
                );


                saveCurrentUser(customer);


                window.location.href =
                    "catalog.html";


                return;

            }


            /* ------------------------------
               INVALID LOGIN
            ------------------------------ */

            if (message) {

                message.textContent =
                    "Invalid username or password.";

                message.className =
                    "auth-message error";

            }

        }
    );

}


/* ==========================================
   SIGN UP
========================================== */

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
                    .getElementById("signupUsername")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("signupPassword")
                    .value;


            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;


            const message =
                document.getElementById(
                    "signupMessage"
                );


            if (
                !fullName ||
                !username ||
                !password
            ) {

                showMessage(
                    message,
                    "Please complete all fields.",
                    true
                );

                return;

            }


            if (
                username.toLowerCase() === "admin"
            ) {

                showMessage(
                    message,
                    "This username is not available.",
                    true
                );

                return;

            }


            if (password !== confirmPassword) {

                showMessage(
                    message,
                    "Passwords do not match.",
                    true
                );

                return;

            }


            const customers =
                getCustomers();


            const existingCustomer =
                customers.find(
                    function(customer) {

                        return (
                            customer.username.toLowerCase() ===
                            username.toLowerCase()
                        );

                    }
                );


            if (existingCustomer) {

                showMessage(
                    message,
                    "Username already exists.",
                    true
                );

                return;

            }


            const newCustomer = {

                fullName:
                    fullName,

                username:
                    username,

                password:
                    password,

                role:
                    "customer",

                phone:
                    "",

                shippingAddress: {

                    houseNumber:
                        "",

                    street:
                        "",

                    barangay:
                        "",

                    city:
                        "",

                    province:
                        "",

                    postalCode:
                        ""

                }

            };


            customers.push(
                newCustomer
            );


            saveCustomers(
                customers
            );


            showMessage(
                message,
                "Account created successfully!",
                false
            );


            signupForm.reset();


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


/* ==========================================
   MESSAGE HELPER
========================================== */

function showMessage(
    element,
    message,
    isError
) {

    if (!element) {
        return;
    }


    element.textContent =
        message;


    element.className =
        isError
            ? "auth-message error"
            : "auth-message success";

}


/* ==========================================
   FORGOT PASSWORD
========================================== */

const forgotPasswordForm =
    document.getElementById(
        "forgotPasswordForm"
    );


if (forgotPasswordForm) {

    forgotPasswordForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const username =
                document
                    .getElementById("resetUsername")
                    .value
                    .trim();


            const newPassword =
                document
                    .getElementById("newPassword")
                    .value;


            const confirmPassword =
                document
                    .getElementById("confirmNewPassword")
                    .value;


            const message =
                document.getElementById(
                    "forgotMessage"
                );


            if (
                username.toLowerCase() ===
                "admin"
            ) {

                showMessage(
                    message,
                    "The admin password cannot be reset here.",
                    true
                );

                return;

            }


            if (
                newPassword !== confirmPassword
            ) {

                showMessage(
                    message,
                    "Passwords do not match.",
                    true
                );

                return;

            }


            const customers =
                getCustomers();


            const customerIndex =
                customers.findIndex(
                    function(customer) {

                        return (
                            customer.username.toLowerCase() ===
                            username.toLowerCase()
                        );

                    }
                );


            if (customerIndex === -1) {

                showMessage(
                    message,
                    "Username not found.",
                    true
                );

                return;

            }


            customers[
                customerIndex
            ].password =
                newPassword;


            saveCustomers(
                customers
            );


            showMessage(
                message,
                "Password changed successfully!",
                false
            );


            forgotPasswordForm.reset();


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


/* ==========================================
   CUSTOMER ACCOUNT PAGE
========================================== */

const customerPage =
    document.getElementById(
        "customerPage"
    );


if (customerPage) {

    const currentUser =
        getCurrentUser();


    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        window.location.href =
            "index.html";

    }

}


/* ==========================================
   DISPLAY CUSTOMER NAME
========================================== */

function displayCustomerName() {

    const currentUser =
        getCurrentUser();


    const elements =
        document.querySelectorAll(
            "[data-customer-name]"
        );


    elements.forEach(
        function(element) {

            element.textContent =
                currentUser?.fullName ||
                "Customer";

        }
    );

}


displayCustomerName();


/* ==========================================
   SAVE CUSTOMER ACCOUNT
========================================== */

function saveAccountChanges() {

    const currentUser =
        getCurrentUser();


    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    const fullName =
        document.getElementById(
            "accountFullName"
        )?.value.trim();


    const username =
        document.getElementById(
            "accountUsername"
        )?.value.trim();


    const phone =
        document.getElementById(
            "accountPhone"
        )?.value.trim();


    const houseNumber =
        document.getElementById(
            "houseNumber"
        )?.value.trim();


    const street =
        document.getElementById(
            "street"
        )?.value.trim();


    const barangay =
        document.getElementById(
            "barangay"
        )?.value.trim();


    const city =
        document.getElementById(
            "city"
        )?.value.trim();


    const province =
        document.getElementById(
            "province"
        )?.value.trim();


    const postalCode =
        document.getElementById(
            "postalCode"
        )?.value.trim();


    const customers =
        getCustomers();


    const customerIndex =
        customers.findIndex(
            function(customer) {

                return (
                    customer.username ===
                    currentUser.username
                );

            }
        );


    if (customerIndex === -1) {

        return;

    }


    const usernameTaken =
        customers.some(
            function(customer, index) {

                return (
                    index !== customerIndex &&
                    customer.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    if (usernameTaken) {

        showAccountMessage(
            "Username already exists.",
            true
        );

        return;

    }


    customers[
        customerIndex
    ].fullName =
        fullName;


    customers[
        customerIndex
    ].username =
        username;


    customers[
        customerIndex
    ].phone =
        phone;


    customers[
        customerIndex
    ].shippingAddress = {

        houseNumber:
            houseNumber,

        street:
            street,

        barangay:
            barangay,

        city:
            city,

        province:
            province,

        postalCode:
            postalCode

    };


    saveCustomers(
        customers
    );


    saveCurrentUser(
        customers[customerIndex]
    );


    showAccountMessage(
        "Account information saved successfully.",
        false
    );


    displayCustomerName();

}


/* ==========================================
   ACCOUNT MESSAGE
========================================== */

function showAccountMessage(
    message,
    isError
) {

    const element =
        document.getElementById(
            "accountMessage"
        );


    if (!element) {
        return;
    }


    element.textContent =
        message;


    element.className =
        isError
            ? "account-message error"
            : "account-message success";

}


/* ==========================================
   CHANGE PASSWORD
========================================== */

function changeCustomerPassword() {

    const currentUser =
        getCurrentUser();


    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    const currentPassword =
        document.getElementById(
            "currentPassword"
        )?.value;


    const newPassword =
        document.getElementById(
            "accountNewPassword"
        )?.value;


    const confirmPassword =
        document.getElementById(
            "accountConfirmPassword"
        )?.value;


    if (
        currentPassword !==
        currentUser.password
    ) {

        showAccountMessage(
            "Current password is incorrect.",
            true
        );

        return;

    }


    if (
        newPassword !==
        confirmPassword
    ) {

        showAccountMessage(
            "New passwords do not match.",
            true
        );

        return;

    }


    if (!newPassword) {

        showAccountMessage(
            "Please enter a new password.",
            true
        );

        return;

    }


    const customers =
        getCustomers();


    const customerIndex =
        customers.findIndex(
            function(customer) {

                return (
                    customer.username ===
                    currentUser.username
                );

            }
        );


    if (customerIndex === -1) {

        return;

    }


    customers[
        customerIndex
    ].password =
        newPassword;


    saveCustomers(
        customers
    );


    saveCurrentUser(
        customers[customerIndex]
    );


    document.getElementById(
        "currentPassword"
    ).value = "";


    document.getElementById(
        "accountNewPassword"
    ).value = "";


    document.getElementById(
        "accountConfirmPassword"
    ).value = "";


    showAccountMessage(
        "Password changed successfully.",
        false
    );

}


/* ==========================================
   LOGOUT
========================================== */

function logoutCustomer() {

    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );


    localStorage.removeItem(
        "loveLuxeAdminLoggedIn"
    );


    window.location.href =
        "index.html";

}


/* ==========================================
   CUSTOMER SIDEBAR MESSAGE
========================================== */

function showAccountMessageBox(
    section
) {

    alert(
        section +
        " is currently available in the account section."
    );

}
