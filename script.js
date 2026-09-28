// ==========================================
// LOVE LUXE LOGIN AND ACCOUNT SYSTEM
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


    if (
        !usernameElement ||
        !passwordElement
    ) {

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


        // CUSTOMER GOES TO SHOPPER CATALOG

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
        document.getElementById(
            "signupUsername"
        );

    const passwordElement =
        document.getElementById(
            "signupPassword"
        );

    const confirmElement =
        document.getElementById(
            "confirmPassword"
        );

    const messageElement =
        document.getElementById(
            "signupMessage"
        );


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
    // PASSWORD MATCH
    // ==========================================

    if (
        password !== confirmPassword
    ) {

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
        username.toLowerCase() ===
        "admin"
    ) {

        messageElement.textContent =
            "This username is not available.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // ==========================================
    // GET CUSTOMERS
    // ==========================================

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    // ==========================================
    // DUPLICATE USERNAME
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

        role: "customer",

        phone: "",

        shippingAddress: {

            houseNumber: "",

            street: "",

            barangay: "",

            city: "",

            province: "",

            postalCode: ""

        }

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
// CUSTOMER PAGE ACCESS CHECK
// ==========================================

function checkCustomerAccess() {

    const currentUser =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!currentUser) {

        window.location.href =
            "index.html";

        return null;

    }


    try {

        const user =
            JSON.parse(currentUser);


        // Only customers can access
        // the My Account page

        if (
            user.role !== "customer"
        ) {

            window.location.href =
                dashboardURL;

            return null;

        }


        return user;

    }

    catch (error) {

        localStorage.removeItem(
            "loveLuxeCurrentUser"
        );


        window.location.href =
            "index.html";

        return null;

    }

}


// ==========================================
// LOAD CUSTOMER ACCOUNT
// ==========================================

function loadCustomerAccount() {

    const fullNameInput =
        document.getElementById(
            "accountFullName"
        );


    // If this isn't customer.html,
    // stop here.

    if (!fullNameInput) {

        return;

    }


    const user =
        checkCustomerAccess();


    if (!user) {

        return;

    }


    // ==========================================
    // MAKE SURE DATA EXISTS
    // ==========================================

    if (!user.shippingAddress) {

        user.shippingAddress = {

            houseNumber: "",

            street: "",

            barangay: "",

            city: "",

            province: "",

            postalCode: ""

        };

    }


    if (!user.phone) {

        user.phone = "";

    }


    // ==========================================
    // PERSONAL INFORMATION
    // ==========================================

    document.getElementById(
        "accountFullName"
    ).value =
        user.fullName || "";


    document.getElementById(
        "accountUsername"
    ).value =
        user.username || "";


    document.getElementById(
        "accountPhone"
    ).value =
        user.phone || "";


    // ==========================================
    // SHIPPING ADDRESS
    // ==========================================

    document.getElementById(
        "houseNumber"
    ).value =
        user.shippingAddress.houseNumber || "";


    document.getElementById(
        "street"
    ).value =
        user.shippingAddress.street || "";


    document.getElementById(
        "barangay"
    ).value =
        user.shippingAddress.barangay || "";


    document.getElementById(
        "city"
    ).value =
        user.shippingAddress.city || "";


    document.getElementById(
        "province"
    ).value =
        user.shippingAddress.province || "";


    document.getElementById(
        "postalCode"
    ).value =
        user.shippingAddress.postalCode || "";


    // ==========================================
    // SUMMARY
    // ==========================================

    updateAccountSummary(user);


    // ==========================================
    // TOP BAR NAME
    // ==========================================

    const topName =
        document.getElementById(
            "topCustomerName"
        );


    if (topName) {

        topName.textContent =
            user.fullName;

    }

}


// ==========================================
// SAVE ACCOUNT CHANGES
// ==========================================

function saveAccountChanges() {

    const user =
        checkCustomerAccess();


    if (!user) {

        return;

    }


    // ==========================================
    // GET NEW INFORMATION
    // ==========================================

    const newFullName =
        document.getElementById(
            "accountFullName"
        ).value.trim();


    const newUsername =
        document.getElementById(
            "accountUsername"
        ).value.trim();


    const newPhone =
        document.getElementById(
            "accountPhone"
        ).value.trim();


    // ==========================================
    // CHECK REQUIRED FIELDS
    // ==========================================

    if (
        newFullName === "" ||
        newUsername === ""
    ) {

        showAccountMessage(
            "Full name and username are required.",
            true
        );

        return;

    }


    // ==========================================
    // GET CUSTOMERS
    // ==========================================

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    // ==========================================
    // CHECK USERNAME
    // ==========================================

    const duplicateUser =

        customers.find(

            function(customer) {

                return (

                    customer.username.toLowerCase() ===
                    newUsername.toLowerCase() &&

                    customer.username.toLowerCase() !==
                    user.username.toLowerCase()

                );

            }

        );


    if (duplicateUser) {

        showAccountMessage(
            "That username is already being used.",
            true
        );

        return;

    }


    // ==========================================
    // GET SHIPPING ADDRESS
    // ==========================================

    const newAddress = {

        houseNumber:
            document.getElementById(
                "houseNumber"
            ).value.trim(),

        street:
            document.getElementById(
                "street"
            ).value.trim(),

        barangay:
            document.getElementById(
                "barangay"
            ).value.trim(),

        city:
            document.getElementById(
                "city"
            ).value.trim(),

        province:
            document.getElementById(
                "province"
            ).value.trim(),

        postalCode:
            document.getElementById(
                "postalCode"
            ).value.trim()

    };


    // ==========================================
    // UPDATE USER
    // ==========================================

    user.fullName =
        newFullName;

    user.username =
        newUsername;

    user.phone =
        newPhone;

    user.shippingAddress =
        newAddress;


    // ==========================================
    // UPDATE CUSTOMER LIST
    // ==========================================

    const userIndex =

        customers.findIndex(

            function(customer) {

                return (

                    customer.username ===
                    user.username

                );

            }

        );


    /*
       Because the username may have changed,
       find the old account using the original
       account information.
    */

    let originalIndex = userIndex;


    if (originalIndex === -1) {

        originalIndex =

            customers.findIndex(

                function(customer) {

                    return (

                        customer.fullName ===
                        user.fullName

                    );

                }

            );

    }


    /*
       If the account is still found,
       update it.
    */

    if (originalIndex !== -1) {

        customers[originalIndex] =
            user;

    }


    // ==========================================
    // SAVE CUSTOMER LIST
    // ==========================================

    localStorage.setItem(

        "loveLuxeCustomers",

        JSON.stringify(customers)

    );


    // ==========================================
    // UPDATE CURRENT USER
    // ==========================================

    localStorage.setItem(

        "loveLuxeCurrentUser",

        JSON.stringify(user)

    );


    // ==========================================
    // CHANGE PASSWORD
    // ==========================================

    const currentPassword =
        document.getElementById(
            "currentPassword"
        ).value;


    const newPassword =
        document.getElementById(
            "newPassword"
        ).value;


    const confirmNewPassword =
        document.getElementById(
            "confirmNewPassword"
        ).value;


    // If user wants to change password

    if (
        currentPassword !== "" ||
        newPassword !== "" ||
        confirmNewPassword !== ""
    ) {


        // Check current password

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


        // Check new password

        if (
            newPassword === ""
        ) {

            showAccountMessage(
                "Enter a new password.",
                true
            );

            return;

        }


        // Confirm new password

        if (
            newPassword !==
            confirmNewPassword
        ) {

            showAccountMessage(
                "New passwords do not match.",
                true
            );

            return;

        }


        // Update password

        user.password =
            newPassword;


        // Save updated user

        localStorage.setItem(

            "loveLuxeCurrentUser",

            JSON.stringify(user)

        );


        // Find and update customer

        const updatedCustomers =

            JSON.parse(

                localStorage.getItem(
                    "loveLuxeCustomers"
                )

            ) || [];


        const passwordIndex =

            updatedCustomers.findIndex(

                function(customer) {

                    return (
                        customer.username ===
                        user.username
                    );

                }

            );


        if (passwordIndex !== -1) {

            updatedCustomers[
                passwordIndex
            ] = user;


            localStorage.setItem(

                "loveLuxeCustomers",

                JSON.stringify(
                    updatedCustomers
                )

            );

        }


        // Clear password fields

        document.getElementById(
            "currentPassword"
        ).value = "";


        document.getElementById(
            "newPassword"
        ).value = "";


        document.getElementById(
            "confirmNewPassword"
        ).value = "";

    }


    // ==========================================
    // UPDATE SCREEN
    // ==========================================

    updateAccountSummary(user);


    document.getElementById(
        "topCustomerName"
    ).textContent =
        user.fullName;


    showAccountMessage(
        "Your account information has been saved.",
        false
    );

}


// ==========================================
// UPDATE ACCOUNT SUMMARY
// ==========================================

function updateAccountSummary(user) {

    const username =
        document.getElementById(
            "summaryUsername"
        );


    const phone =
        document.getElementById(
            "summaryPhone"
        );


    const address =
        document.getElementById(
            "summaryAddress"
        );


    if (username) {

        username.textContent =
            user.username || "-";

    }


    if (phone) {

        phone.textContent =
            user.phone || "Not set";

    }


    if (address) {


        const shipping =
            user.shippingAddress;


        if (
            shipping &&
            (
                shipping.houseNumber ||
                shipping.street ||
                shipping.barangay ||
                shipping.city ||
                shipping.province ||
                shipping.postalCode
            )
        ) {


            const parts = [

                shipping.houseNumber,

                shipping.street,

                shipping.barangay,

                shipping.city,

                shipping.province,

                shipping.postalCode

            ];


            address.textContent =
                parts
                    .filter(Boolean)
                    .join(", ");

        }

        else {

            address.textContent =
                "Not set";

        }

    }

}


// ==========================================
// ACCOUNT MESSAGE
// ==========================================

function showAccountMessage(
    message,
    isError
) {

    const messageElement =
        document.getElementById(
            "accountMessage"
        );


    if (!messageElement) {

        return;

    }


    messageElement.textContent =
        message;


    if (isError) {

        messageElement.style.color =
            "#c0392b";

    }

    else {

        messageElement.style.color =
            "#4a8c5c";

    }

}


// ==========================================
// ACCOUNT SIDEBAR
// ==========================================

function openAccountSidebar() {

    const sidebar =
        document.getElementById(
            "accountSidebar"
        );


    const overlay =
        document.getElementById(
            "accountOverlay"
        );


    sidebar.classList.add(
        "open"
    );


    overlay.classList.add(
        "active"
    );

}


function closeAccountSidebar() {

    const sidebar =
        document.getElementById(
            "accountSidebar"
        );


    const overlay =
        document.getElementById(
            "accountOverlay"
        );


    sidebar.classList.remove(
        "open"
    );


    overlay.classList.remove(
        "active"
    );

}


// ==========================================
// OVERLAY CLOSE
// ==========================================

const accountOverlay =
    document.getElementById(
        "accountOverlay"
    );


if (accountOverlay) {

    accountOverlay.addEventListener(

        "click",

        function() {

            closeAccountSidebar();

        }

    );

}


// ==========================================
// SIDEBAR MESSAGE
// ==========================================

function showAccountMessageBox(
    section
) {

    closeAccountSidebar();


    alert(
        section +
        " will be added next."
    );

}


function showAccountMessage(
    section
) {

    closeAccountSidebar();


    alert(
        section +
        " will be added next."
    );

}


// ==========================================
// LOAD ACCOUNT
// ==========================================

loadCustomerAccount();
