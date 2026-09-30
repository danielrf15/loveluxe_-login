/* ==========================================
   LOVE LUXE BY EA
   LOGIN + SIGNUP
   ARRAY ONLY
========================================== */


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


                /* =========================
                   CLEAR MESSAGE
                ========================= */

                if (loginMessage) {

                    loginMessage.textContent =
                        "";

                }


                /* =========================
                   EMPTY FIELDS
                ========================= */

                if (
                    username === "" ||
                    password === ""
                ) {

                    if (loginMessage) {

                        loginMessage.textContent =
                            "Please enter your username and password.";

                        loginMessage.style.color =
                            "red";

                    }

                    return;

                }


                /* =========================
                   ADMIN LOGIN
                ========================= */

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

                        loginMessage.style.color =
                            "green";

                    }


                    setTimeout(
                        function () {

                            window.location.href =
                                "admin.html";

                        },
                        300
                    );


                    return;

                }


                /* =========================
                   CUSTOMER LOGIN
                ========================= */

                const customer =
                    customers.find(
                        function (account) {

                            return (
                                account.username ===
                                    username &&
                                account.password ===
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

                        loginMessage.style.color =
                            "green";

                    }


                    setTimeout(
                        function () {

                            window.location.href =
                                "catalog.html";

                        },
                        300
                    );


                    return;

                }


                /* =========================
                   INVALID LOGIN
                ========================= */

                if (loginMessage) {

                    loginMessage.textContent =
                        "Invalid username or password.";

                    loginMessage.style.color =
                        "red";

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


                const fullNameInput =
                    document.getElementById(
                        "fullName"
                    );


                const usernameInput =
                    document.getElementById(
                        "signupUsername"
                    );


                const passwordInput =
                    document.getElementById(
                        "signupPassword"
                    );


                const confirmPasswordInput =
                    document.getElementById(
                        "confirmPassword"
                    );


                const signupMessage =
                    document.getElementById(
                        "signupMessage"
                    );


                if (
                    !fullNameInput ||
                    !usernameInput ||
                    !passwordInput ||
                    !confirmPasswordInput
                ) {

                    return;

                }


                const fullName =
                    fullNameInput.value.trim();


                const username =
                    usernameInput.value.trim();


                const password =
                    passwordInput.value;


                const confirmPassword =
                    confirmPasswordInput.value;


                /* =========================
                   EMPTY FIELDS
                ========================= */

                if (
                    fullName === "" ||
                    username === "" ||
                    password === "" ||
                    confirmPassword === ""
                ) {

                    showSignupMessage(
                        signupMessage,
                        "Please complete all fields.",
                        true
                    );

                    return;

                }


                /* =========================
                   ADMIN USERNAME
                ========================= */

                if (
                    username.toLowerCase() ===
                    "admin"
                ) {

                    showSignupMessage(
                        signupMessage,
                        "This username is not available.",
                        true
                    );

                    return;

                }


                /* =========================
                   PASSWORD CHECK
                ========================= */

                if (
                    password !==
                    confirmPassword
                ) {

                    showSignupMessage(
                        signupMessage,
                        "Passwords do not match.",
                        true
                    );

                    return;

                }


                /* =========================
                   DUPLICATE USERNAME
                ========================= */

                const existingCustomer =
                    customers.find(
                        function (customer) {

                            return (
                                customer.username
                                    .toLowerCase() ===
                                username.toLowerCase()
                            );

                        }
                    );


                if (existingCustomer) {

                    showSignupMessage(
                        signupMessage,
                        "Username already exists.",
                        true
                    );

                    return;

                }


                /* =========================
                   CREATE CUSTOMER
                ========================= */

                const newCustomer = {

                    fullName:
                        fullName,

                    username:
                        username,

                    password:
                        password,

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

                    },

                    role:
                        "customer"

                };


                customers.push(
                    newCustomer
                );


                showSignupMessage(
                    signupMessage,
                    "Account created successfully!",
                    false
                );


                signupForm.reset();


                /* =========================
                   IMPORTANT
                   ARRAY-ONLY SYSTEM
                ========================= */

                setTimeout(
                    function () {

                        window.location.href =
                            "index.html";

                    },
                    1000
                );

            }
        );

    }
);


/* ==========================================
   SIGNUP MESSAGE
========================================== */

function showSignupMessage(
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

        element.style.color =
            "red";

    } else {

        element.style.color =
            "green";

    }

}
