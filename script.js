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
// RESET PASSWORD
// ==========================================

function resetPassword() {

    const usernameElement =
        document.getElementById(
            "forgotUsername"
        );

    const newPasswordElement =
        document.getElementById(
            "forgotNewPassword"
        );

    const confirmPasswordElement =
        document.getElementById(
            "forgotConfirmPassword"
        );

    const messageElement =
        document.getElementById(
            "forgotMessage"
        );


    if (
        !usernameElement ||
        !newPasswordElement ||
        !confirmPasswordElement
    ) {

        return;

    }


    const username =
        usernameElement.value.trim();

    const newPassword =
        newPasswordElement.value;

    const confirmPassword =
        confirmPasswordElement.value;


    // CHECK EMPTY FIELDS

    if (
        username === "" ||
        newPassword === "" ||
        confirmPassword === ""
    ) {

        messageElement.textContent =
            "Please complete all fields.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // ADMIN ACCOUNT CANNOT BE RESET

    if (
        username.toLowerCase() === "admin"
    ) {

        messageElement.textContent =
            "The admin password cannot be reset here.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // CHECK PASSWORD MATCH

    if (
        newPassword !== confirmPassword
    ) {

        messageElement.textContent =
            "Passwords do not match.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // GET CUSTOMER ACCOUNTS

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    // FIND CUSTOMER

    const customerIndex =

        customers.findIndex(

            function(customer) {

                return (

                    customer.username.toLowerCase() ===
                    username.toLowerCase()

                );

            }

        );


    // USERNAME NOT FOUND

    if (
        customerIndex === -1
    ) {

        messageElement.textContent =
            "Username not found.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


    // UPDATE PASSWORD

    customers[
        customerIndex
    ].password =
        newPassword;


    // SAVE UPDATED CUSTOMERS

    localStorage.setItem(

        "loveLuxeCustomers",

        JSON.stringify(customers)

    );


    // SUCCESS MESSAGE

    messageElement.textContent =
        "Password reset successfully!";

    messageElement.style.color =
        "#4a8c5c";


    // CLEAR FIELDS

    usernameElement.value = "";

    newPasswordElement.value = "";

    confirmPasswordElement.value = "";


    // RETURN TO LOGIN

    setTimeout(

        function() {

            window.location.href =
                "index.html";

        },

        1200

    );

}

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


    // ADMIN LOGIN

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


    // CUSTOMER LOGIN

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


        window.location.href =
            "catalog.html";


        return;

    }


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


    if (
        password !== confirmPassword
    ) {

        messageElement.textContent =
            "Passwords do not match.";

        messageElement.style.color =
            "#c0392b";

        return;

    }


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


    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


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
// CUSTOMER ACCESS CHECK
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


    if (!fullNameInput) {

        return;

    }


    const user =
        checkCustomerAccess();


    if (!user) {

        return;

    }


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


    updateAccountSummary(user);


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


    // Remember the old username

    const originalUsername =
        user.username;


    // PERSONAL INFORMATION

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


    // CUSTOMER LIST

    const customers =

        JSON.parse(

            localStorage.getItem(
                "loveLuxeCustomers"
            )

        ) || [];


    // CHECK DUPLICATE USERNAME

    const duplicateUser =
        customers.find(

            function(customer) {

                return (

                    customer.username.toLowerCase() ===
                    newUsername.toLowerCase() &&

                    customer.username.toLowerCase() !==
                    originalUsername.toLowerCase()

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


    // SHIPPING ADDRESS

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


    // PASSWORD

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


    // CHECK PASSWORD ONLY
    // IF SOMETHING WAS ENTERED

    if (
        currentPassword !== "" ||
        newPassword !== "" ||
        confirmNewPassword !== ""
    ) {


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


        if (
            newPassword === ""
        ) {

            showAccountMessage(
                "Enter a new password.",
                true
            );

            return;

        }


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


        user.password =
            newPassword;

    }


    // UPDATE USER

    user.fullName =
        newFullName;


    user.username =
        newUsername;


    user.phone =
        newPhone;


    user.shippingAddress =
        newAddress;


    // FIND ORIGINAL ACCOUNT

    const originalIndex =
        customers.findIndex(

            function(customer) {

                return (
                    customer.username ===
                    originalUsername
                );

            }

        );


    // UPDATE ACCOUNT

    if (originalIndex !== -1) {

        customers[originalIndex] =
            user;

    }


    // SAVE CUSTOMER ACCOUNTS

    localStorage.setItem(

        "loveLuxeCustomers",

        JSON.stringify(
            customers
        )

    );


    // SAVE CURRENT USER

    localStorage.setItem(

        "loveLuxeCurrentUser",

        JSON.stringify(
            user
        )

    );


    // CLEAR PASSWORD INPUTS

    document.getElementById(
        "currentPassword"
    ).value = "";


    document.getElementById(
        "newPassword"
    ).value = "";


    document.getElementById(
        "confirmNewPassword"
    ).value = "";


    // UPDATE PAGE

    document.getElementById(
        "topCustomerName"
    ).textContent =
        user.fullName;


    updateAccountSummary(user);


    showAccountMessage(
        "Your account information has been saved.",
        false
    );

}


// ==========================================
// UPDATE SUMMARY
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
// SIDEBAR MESSAGE
// ==========================================

function showAccountMessageBox(section) {

    closeAccountSidebar();

    alert(
        section +
        " will be added next."
    );

}


// ==========================================
// OPEN SIDEBAR
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


// ==========================================
// CLOSE SIDEBAR
// ==========================================

function closeAccountSidebar() {

    const sidebar =
        document.getElementById(
            "accountSidebar"
        );


    const overlay =
        document.getElementById(
            "accountOverlay"
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
// LOAD ACCOUNT
// ==========================================

loadCustomerAccount();
