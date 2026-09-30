/* ==========================================
   LOVE LUXE BY EA
   ARRAY-ONLY LOGIN SYSTEM
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
   CURRENT USER
========================================== */

let currentUser = null;


/* ==========================================
   LOGIN
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loginForm =
            document.getElementById(
                "loginForm"
            );


        if (!loginForm) {

            return;

        }


        loginForm.addEventListener(
            "submit",
            function (event) {

                /*
                   IMPORTANT:
                   Prevent the normal HTML form
                   submission.
                */

                event.preventDefault();


                const usernameInput =
                    document.getElementById(
                        "username"
                    );


                const passwordInput =
                    document.getElementById(
                        "password"
                    );


                const loginMessage =
                    document.getElementById(
                        "loginMessage"
                    );


                if (
                    !usernameInput ||
                    !passwordInput
                ) {

                    return;

                }


                const username =
                    usernameInput.value.trim();


                const password =
                    passwordInput.value;


                /*
                   Clear previous message
                */

                if (loginMessage) {

                    loginMessage.textContent = "";

                    loginMessage.className =
                        "auth-message";

                }


                /* ==================================
                   ADMIN LOGIN
                ================================== */

                if (
                    username ===
                        adminAccount.username &&

                    password ===
                        adminAccount.password
                ) {

                    currentUser =
                        adminAccount;


                    if (loginMessage) {

                        loginMessage.textContent =
                            "Login successful. Opening admin dashboard...";

                        loginMessage.className =
                            "auth-message success";

                    }


                    /*
                       Go to admin page
                    */

                    setTimeout(
                        function () {

                            window.location.href =
                                "admin.html";

                        },
                        300
                    );


                    return;

                }


                /* ==================================
                   CUSTOMER LOGIN
                ================================== */

                /*
                   data.js contains the
                   customers array.
                */

                if (
                    typeof customers ===
                    "undefined"
                ) {

                    if (loginMessage) {

                        loginMessage.textContent =
                            "Customer data could not be loaded.";

                        loginMessage.className =
                            "auth-message error";

                    }

                    return;

                }


                const customer =
                    customers.find(
                        function (user) {

                            return (

                                user.username ===
                                    username &&

                                user.password ===
                                    password

                            );

                        }
                    );


                if (customer) {

                    currentUser =
                        customer;


                    if (loginMessage) {

                        loginMessage.textContent =
                            "Login successful. Opening shop...";

                        loginMessage.className =
                            "auth-message success";

                    }


                    /*
                       Go to customer catalog
                    */

                    setTimeout(
                        function () {

                            window.location.href =
                                "catalog.html";

                        },
                        300
                    );


                    return;

                }


                /* ==================================
                   INVALID LOGIN
                ================================== */

                if (loginMessage) {

                    loginMessage.textContent =
                        "Invalid username or password.";

                    loginMessage.className =
                        "auth-message error";

                }

            }
        );

    }
);


/* ==========================================
   SIGN UP
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const signupForm =
            document.getElementById(
                "signupForm"
            );


        if (!signupForm) {

            return;

        }


        signupForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const fullName =
                    document.getElementById(
                        "fullName"
                    )?.value.trim();


                const username =
                    document.getElementById(
                        "signupUsername"
                    )?.value.trim();


                const password =
                    document.getElementById(
                        "signupPassword"
                    )?.value;


                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    )?.value;


                const signupMessage =
                    document.getElementById(
                        "signupMessage"
                    );


                /* ==================================
                   REQUIRED FIELDS
                ================================== */

                if (
                    !fullName ||
                    !username ||
                    !password ||
                    !confirmPassword
                ) {

                    showMessage(
                        signupMessage,
                        "Please complete all fields.",
                        true
                    );

                    return;

                }


                /* ==================================
                   ADMIN USERNAME
                ================================== */

                if (
                    username.toLowerCase() ===
                    "admin"
                ) {

                    showMessage(
                        signupMessage,
                        "This username is not available.",
                        true
                    );

                    return;

                }


                /* ==================================
                   PASSWORD MATCH
                ================================== */

                if (
                    password !==
                    confirmPassword
                ) {

                    showMessage(
                        signupMessage,
                        "Passwords do not match.",
                        true
                    );

                    return;

                }


                /*
                   Make sure customers array
                   exists.
                */

                if (
                    typeof customers ===
                    "undefined"
                ) {

                    showMessage(
                        signupMessage,
                        "Customer data could not be loaded.",
                        true
                    );

                    return;

                }


                /* ==================================
                   CHECK DUPLICATE USERNAME
                ================================== */

                const usernameExists =
                    customers.some(
                        function (customer) {

                            return (

                                customer.username
                                    .toLowerCase() ===

                                username.toLowerCase()

                            );

                        }
                    );


                if (usernameExists) {

                    showMessage(
                        signupMessage,
                        "Username already exists.",
                        true
                    );

                    return;

                }


                /* ==================================
                   CREATE CUSTOMER
                ================================== */

                const newCustomer = {

                    fullName:
                        fullName,

                    username:
                        username,

                    password:
                        password,

                    phone:
                        "",

                    shippingAddress:
                        "",

                    role:
                        "customer"

                };


                /*
                   Add customer to array
                */

                customers.push(
                    newCustomer
                );


                /*
                   Temporarily make this
                   user the current user
                */

                currentUser =
                    newCustomer;


                showMessage(
                    signupMessage,
                    "Account created successfully!",
                    false
                );


                /*
                   Go back to login
                */

                setTimeout(
                    function () {

                        window.location.href =
                            "index.html";

                    },
                    700
                );

            }
        );

    }
);


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


    if (isError) {

        element.className =
            "auth-message error";

    }

    else {

        element.className =
            "auth-message success";

    }

}


/* ==========================================
   FORGOT PASSWORD
========================================== */

function resetPassword() {

    const username =
        document.getElementById(
            "forgotUsername"
        )?.value.trim();


    const newPassword =
        document.getElementById(
            "forgotNewPassword"
        )?.value;


    const confirmPassword =
        document.getElementById(
            "forgotConfirmPassword"
        )?.value;


    const message =
        document.getElementById(
            "forgotMessage"
        );


    if (
        !username ||
        !newPassword ||
        !confirmPassword
    ) {

        showMessage(
            message,
            "Please complete all fields.",
            true
        );

        return false;

    }


    if (
        newPassword !==
        confirmPassword
    ) {

        showMessage(
            message,
            "Passwords do not match.",
            true
        );

        return false;

    }


    if (
        typeof customers ===
        "undefined"
    ) {

        showMessage(
            message,
            "Customer data could not be loaded.",
            true
        );

        return false;

    }


    const customer =
        customers.find(
            function (user) {

                return (
                    user.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    if (!customer) {

        showMessage(
            message,
            "Username not found.",
            true
        );

        return false;

    }


    customer.password =
        newPassword;


    showMessage(
        message,
        "Password changed successfully.",
        false
    );


    return false;

}


/* ==========================================
   GET CURRENT USER
========================================== */

function getCurrentUser() {

    return currentUser;

}


/* ==========================================
   LOGOUT
========================================== */

function logoutCustomer() {

    currentUser =
        null;


    window.location.href =
        "index.html";

}


/* ==========================================
   ADMIN LOGOUT
========================================== */

function adminLogout() {

    currentUser =
        null;


    window.location.href =
        "index.html";

}
