/* ==========================================
   LOVE LUXE BY EA
   ARRAY-ONLY AUTHENTICATION
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
   MAKE SURE CUSTOMER ARRAY EXISTS
========================================== */

if (
    typeof customers === "undefined"
) {

    window.customers = [];

}


/* ==========================================
   LOGIN
========================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );


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


            /* Clear old message */

            if (message) {

                message.textContent = "";

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

                if (message) {

                    message.textContent =
                        "Login successful. Opening admin dashboard...";

                    message.className =
                        "auth-message success";

                }


                /*
                    ARRAY-ONLY CURRENT USER

                    This exists only while this
                    page is running.
                */

                window.currentUser =
                    adminAccount;


                setTimeout(
                    function() {

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


            if (customer) {

                if (message) {

                    message.textContent =
                        "Login successful. Opening shop...";

                    message.className =
                        "auth-message success";

                }


                /*
                    ARRAY-ONLY CURRENT USER
                */

                window.currentUser =
                    customer;


                setTimeout(
                    function() {

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
    document.getElementById(
        "signupForm"
    );


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


            /* ==================================
               CHECK EMPTY FIELDS
            ================================== */

            if (
                !fullName ||
                !username ||
                !password ||
                !confirmPassword
            ) {

                showMessage(
                    message,
                    "Please complete all fields.",
                    true
                );

                return;

            }


            /* ==================================
               PREVENT ADMIN USERNAME
            ================================== */

            if (
                username.toLowerCase() ===
                "admin"
            ) {

                showMessage(
                    message,
                    "This username is not available.",
                    true
                );

                return;

            }


            /* ==================================
               CHECK PASSWORD
            ================================== */

            if (
                password !==
                confirmPassword
            ) {

                showMessage(
                    message,
                    "Passwords do not match.",
                    true
                );

                return;

            }


            /* ==================================
               CHECK EXISTING USERNAME
            ================================== */

            const existingCustomer =
                customers.find(
                    function(customer) {

                        return (
                            customer.username
                                .toLowerCase() ===
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


            /* ==================================
               CREATE CUSTOMER OBJECT
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

                shippingAddress: {

                    houseNumber: "",

                    street: "",

                    barangay: "",

                    city: "",

                    province: "",

                    postalCode: ""

                },

                role:
                    "customer"

            };


            /* ==================================
               ADD CUSTOMER TO ARRAY
            ================================== */

            customers.push(
                newCustomer
            );


            /* ==================================
               SUCCESS MESSAGE
            ================================== */

            showMessage(
                message,
                "Account created successfully!",
                false
            );


            signupForm.reset();


            /*
                Go back to login after
                successful signup.
            */

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
                    .getElementById(
                        "forgotUsername"
                    )
                    ?.value
                    .trim();


            const newPassword =
                document
                    .getElementById(
                        "forgotNewPassword"
                    )
                    ?.value;


            const confirmPassword =
                document
                    .getElementById(
                        "forgotConfirmPassword"
                    )
                    ?.value;


            const message =
                document.getElementById(
                    "forgotMessage"
                );


            /* ==================================
               CHECK FIELDS
            ================================== */

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

                return;

            }


            /* ==================================
               ADMIN PASSWORD
            ================================== */

            if (
                username.toLowerCase() ===
                adminAccount.username.toLowerCase()
            ) {

                showMessage(
                    message,
                    "Admin password cannot be reset here.",
                    true
                );

                return;

            }


            /* ==================================
               CHECK PASSWORD MATCH
            ================================== */

            if (
                newPassword !==
                confirmPassword
            ) {

                showMessage(
                    message,
                    "Passwords do not match.",
                    true
                );

                return;

            }


            /* ==================================
               FIND CUSTOMER
            ================================== */

            const customer =
                customers.find(
                    function(account) {

                        return (
                            account.username
                                .toLowerCase() ===
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

                return;

            }


            /* ==================================
               CHANGE PASSWORD IN ARRAY
            ================================== */

            customer.password =
                newPassword;


            showMessage(
                message,
                "Password changed successfully.",
                false
            );


            setTimeout(
                function() {

                    window.location.href =
                        "index.html";

                },
                1000
            );

        }
    );

}


/* ==========================================
   LOGOUT
========================================== */

function logoutCustomer() {

    window.currentUser =
        null;


    window.location.href =
        "index.html";

}


/* ==========================================
   ADMIN LOGOUT
========================================== */

function adminLogout() {

    window.currentUser =
        null;


    window.location.href =
        "index.html";

}


/* ==========================================
   CUSTOMER ACCOUNT HELPER
========================================== */

function getCurrentUser() {

    if (
        typeof window.currentUser ===
        "undefined"
    ) {

        return null;

    }


    return window.currentUser;

}


/* ==========================================
   DISPLAY CUSTOMER NAME
========================================== */

function displayCustomerName() {

    const user =
        getCurrentUser();


    if (!user) {

        return;

    }


    const customerNameElements =
        document.querySelectorAll(
            "[data-customer-name]"
        );


    customerNameElements.forEach(
        function(element) {

            element.textContent =
                user.fullName ||
                "Customer";

        }
    );


    const customerName =
        document.getElementById(
            "customerName"
        );


    if (customerName) {

        customerName.textContent =
            user.fullName ||
            "Customer";

    }

}


/* ==========================================
   ACCOUNT PAGE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const accountFullName =
            document.getElementById(
                "accountFullName"
            );


        if (!accountFullName) {

            return;

        }


        const user =
            getCurrentUser();


        if (
            !user ||
            user.role !== "customer"
        ) {

            window.location.href =
                "index.html";

            return;

        }


        /* ==================================
           DISPLAY PERSONAL INFORMATION
        ================================== */

        accountFullName.value =
            user.fullName || "";


        const accountUsername =
            document.getElementById(
                "accountUsername"
            );


        if (accountUsername) {

            accountUsername.value =
                user.username || "";

        }


        const accountPhone =
            document.getElementById(
                "accountPhone"
            );


        if (accountPhone) {

            accountPhone.value =
                user.phone || "";

        }


        displayCustomerName();

    }
);


/* ==========================================
   SAVE CUSTOMER ACCOUNT
========================================== */

function saveCustomerAccount() {

    const user =
        getCurrentUser();


    if (
        !user ||
        user.role !== "customer"
    ) {

        return;

    }


    const fullName =
        document.getElementById(
            "accountFullName"
        )?.value.trim();


    const phone =
        document.getElementById(
            "accountPhone"
        )?.value.trim();


    if (!fullName) {

        showAccountMessage(
            "Please enter your full name.",
            true
        );

        return;

    }


    user.fullName =
        fullName;


    user.phone =
        phone || "";


    showAccountMessage(
        "Account information saved successfully.",
        false
    );


    displayCustomerName();

}


/* ==========================================
   SAVE SHIPPING ADDRESS
========================================== */

function saveShippingAddress() {

    const user =
        getCurrentUser();


    if (
        !user ||
        user.role !== "customer"
    ) {

        return;

    }


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


    user.shippingAddress = {

        houseNumber:
            houseNumber || "",

        street:
            street || "",

        barangay:
            barangay || "",

        city:
            city || "",

        province:
            province || "",

        postalCode:
            postalCode || ""

    };


    showAccountMessage(
        "Shipping address saved successfully.",
        false
    );

}


/* ==========================================
   CHANGE CUSTOMER PASSWORD
========================================== */

function changeCustomerPassword() {

    const user =
        getCurrentUser();


    if (
        !user ||
        user.role !== "customer"
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


    /* ==================================
       CURRENT PASSWORD
    ================================== */

    if (
        currentPassword !==
        user.password
    ) {

        showAccountMessage(
            "Current password is incorrect.",
            true
        );

        return;

    }


    /* ==================================
       NEW PASSWORD
    ================================== */

    if (!newPassword) {

        showAccountMessage(
            "Please enter a new password.",
            true
        );

        return;

    }


    /* ==================================
       CONFIRM PASSWORD
    ================================== */

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


    /* ==================================
       UPDATE ARRAY OBJECT
    ================================== */

    user.password =
        newPassword;


    showAccountMessage(
        "Password changed successfully.",
        false
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
   MOBILE CUSTOMER SIDEBAR
========================================== */

function openCustomerSidebar() {

    const sidebar =
        document.getElementById(
            "customerSidebar"
        );


    const overlay =
        document.getElementById(
            "customerSidebarOverlay"
        );


    if (sidebar) {

        sidebar.classList.add(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }

}


function closeCustomerSidebar() {

    const sidebar =
        document.getElementById(
            "customerSidebar"
        );


    const overlay =
        document.getElementById(
            "customerSidebarOverlay"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const menuButton =
            document.getElementById(
                "customerMenuButton"
            );


        const overlay =
            document.getElementById(
                "customerSidebarOverlay"
            );


        if (menuButton) {

            menuButton.addEventListener(
                "click",
                openCustomerSidebar
            );

        }


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeCustomerSidebar
            );

        }

    }
);
