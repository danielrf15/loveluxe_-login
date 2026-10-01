/* ==========================================
   LOVE LUXE AUTHENTICATION
   ARRAY-ONLY VERSION
========================================== */

const data = window.LoveLuxeData;

if (!data) {
    console.error("LoveLuxeData was not loaded.");
}


/* ==========================================
   COMMON MESSAGE
========================================== */

function showMessage(element, message, isError) {

    if (!element) {
        return;
    }

    element.textContent = message;

    element.style.color =
        isError
            ? "#c0392b"
            : "#16834a";
}


/* ==========================================
   LOGIN
========================================== */

const loginForm =
    document.getElementById("loginForm");


if (loginForm && data) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const usernameInput =
                document.getElementById("username") ||
                document.getElementById("loginUsername");


            const passwordInput =
                document.getElementById("password") ||
                document.getElementById("loginPassword");


            const loginMessage =
                document.getElementById("loginMessage");


            const username =
                usernameInput
                    ? usernameInput.value.trim()
                    : "";


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            if (!username || !password) {

                showMessage(
                    loginMessage,
                    "Please enter your username and password.",
                    true
                );

                return;
            }


            /* ======================================
               ADMIN LOGIN
            ====================================== */

            if (
                username.toLowerCase() ===
                    data.adminAccount.username.toLowerCase()
                &&
                password ===
                    data.adminAccount.password
            ) {

                data.currentUser =
                    data.adminAccount;


                showMessage(
                    loginMessage,
                    "Admin login successful!",
                    false
                );


                setTimeout(
                    function() {

                        window.location.href =
                            "admin.html";

                    },
                    400
                );


                return;
            }


            /* ======================================
               CUSTOMER LOGIN
            ====================================== */

            const customer =
                data.customers.find(
                    function(user) {

                        return (
                            user.username.toLowerCase() ===
                                username.toLowerCase()
                            &&
                            user.password ===
                                password
                        );

                    }
                );


            if (customer) {

                data.currentUser =
                    customer;


                showMessage(
                    loginMessage,
                    "Login successful!",
                    false
                );


                setTimeout(
                    function() {

                        window.location.href =
                            "catalog.html";

                    },
                    400
                );


                return;
            }


            /* ======================================
               INVALID LOGIN
            ====================================== */

            showMessage(
                loginMessage,
                "Invalid username or password.",
                true
            );

        }
    );
}


/* ==========================================
   SIGN UP
========================================== */

const signupForm =
    document.getElementById("signupForm");


if (signupForm && data) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const fullName =
                document.getElementById("fullName")
                    ?.value.trim()
                || "";


            const username =
                document.getElementById("signupUsername")
                    ?.value.trim()
                || "";


            const password =
                document.getElementById("signupPassword")
                    ?.value
                || "";


            const confirmPassword =
                document.getElementById("confirmPassword")
                    ?.value
                || "";


            const signupMessage =
                document.getElementById("signupMessage");


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


            const existingCustomer =
                data.customers.find(
                    function(customer) {

                        return (
                            customer.username.toLowerCase() ===
                            username.toLowerCase()
                        );

                    }
                );


            if (existingCustomer) {

                showMessage(
                    signupMessage,
                    "Username already exists.",
                    true
                );

                return;
            }


            /* ======================================
               CREATE CUSTOMER
            ====================================== */

            const newCustomer = {

                fullName:
                    fullName,

                username:
                    username,

                password:
                    password,

                phone:
                    "",

                role:
                    "customer",

                shippingAddress: {

                    houseNumber: "",
                    street: "",
                    barangay: "",
                    city: "",
                    province: "",
                    postalCode: ""

                }

            };


            data.customers.push(
                newCustomer
            );


            showMessage(
                signupMessage,
                "Account created successfully for this session!",
                false
            );


            signupForm.reset();


            setTimeout(
                function() {

                    window.location.href =
                        "index.html";

                },
                800
            );

        }
    );
}


/* ==========================================
   FORGOT PASSWORD
========================================== */

function resetPassword() {

    if (!data) {
        return false;
    }


    const username =
        document.getElementById("forgotUsername")
            ?.value.trim()
        ||
        document.getElementById("resetUsername")
            ?.value.trim()
        ||
        "";


    const newPassword =
        document.getElementById("forgotNewPassword")
            ?.value
        ||
        document.getElementById("newPassword")
            ?.value
        ||
        "";


    const confirmPassword =
        document.getElementById("forgotConfirmPassword")
            ?.value
        ||
        document.getElementById("confirmPassword")
            ?.value
        ||
        "";


    const message =
        document.getElementById("forgotMessage")
        ||
        document.getElementById("resetMessage");


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
        username.toLowerCase() ===
        data.adminAccount.username.toLowerCase()
    ) {

        showMessage(
            message,
            "Admin password cannot be reset here.",
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


    const customer =
        data.customers.find(
            function(user) {

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
        "Password changed successfully for this session!",
        false
    );


    return false;
}
