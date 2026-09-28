/* ==========================================
   LOVE LUXE BY EA
   LOGIN + SIGNUP + CUSTOMER ACCOUNT
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
   LOGIN
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const usernameInput =
            document.getElementById("username");

        const passwordInput =
            document.getElementById("password");

        const loginMessage =
            document.getElementById("loginMessage");


        if (!usernameInput || !passwordInput) {
            return;
        }


        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value.trim();


        /* Clear old message */

        if (loginMessage) {
            loginMessage.textContent = "";
        }


        /* ======================================
           ADMIN LOGIN
        ====================================== */

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


            if (loginMessage) {

                loginMessage.textContent =
                    "Login successful. Opening admin dashboard...";

                loginMessage.style.color = "green";

            }


            /* Go to admin dashboard */

            setTimeout(function () {

                window.location.href =
                    "admin.html";

            }, 300);


            return;
        }



        /* ======================================
           CUSTOMER LOGIN
        ====================================== */

        let customers = [];


        try {

            customers =
                JSON.parse(
                    localStorage.getItem(
                        "loveLuxeCustomers"
                    )
                ) || [];

        } catch (error) {

            customers = [];

        }


        const customer =
            customers.find(function (user) {

                return (
                    user.username === username &&
                    user.password === password
                );

            });


        if (customer) {

            localStorage.setItem(
                "loveLuxeAdminLoggedIn",
                "false"
            );


            localStorage.setItem(
                "loveLuxeCurrentUser",
                JSON.stringify(customer)
            );


            if (loginMessage) {

                loginMessage.textContent =
                    "Login successful. Opening shop...";

                loginMessage.style.color = "green";

            }


            setTimeout(function () {

                window.location.href =
                    "catalog.html";

            }, 300);


            return;
        }



        /* ======================================
           INVALID LOGIN
        ====================================== */

        if (loginMessage) {

            loginMessage.textContent =
                "Invalid username or password.";

            loginMessage.style.color = "red";

        }

    });

});



/* ==========================================
   SIGN UP
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const signupForm =
        document.getElementById("signupForm");


    if (!signupForm) {
        return;
    }


    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const fullName =
                document.getElementById("fullName")?.value.trim();

            const username =
                document.getElementById("signupUsername")?.value.trim();

            const password =
                document.getElementById("signupPassword")?.value.trim();

            const confirmPassword =
                document.getElementById("confirmPassword")?.value.trim();


            const signupMessage =
                document.getElementById("signupMessage");


            if (
                !fullName ||
                !username ||
                !password ||
                !confirmPassword
            ) {

                if (signupMessage) {

                    signupMessage.textContent =
                        "Please complete all fields.";

                    signupMessage.style.color = "red";

                }

                return;
            }


            if (username.toLowerCase() === "admin") {

                if (signupMessage) {

                    signupMessage.textContent =
                        "This username is not available.";

                    signupMessage.style.color = "red";

                }

                return;
            }


            if (password !== confirmPassword) {

                if (signupMessage) {

                    signupMessage.textContent =
                        "Passwords do not match.";

                    signupMessage.style.color = "red";

                }

                return;
            }


            let customers = [];


            try {

                customers =
                    JSON.parse(
                        localStorage.getItem(
                            "loveLuxeCustomers"
                        )
                    ) || [];

            } catch (error) {

                customers = [];

            }


            const existingCustomer =
                customers.find(function (user) {

                    return (
                        user.username.toLowerCase() ===
                        username.toLowerCase()
                    );

                });


            if (existingCustomer) {

                if (signupMessage) {

                    signupMessage.textContent =
                        "Username already exists.";

                    signupMessage.style.color = "red";

                }

                return;
            }


            const newCustomer = {

                fullName: fullName,

                username: username,

                password: password,

                phone: "",

                shippingAddress: "",

                role: "customer"

            };


            customers.push(newCustomer);


            localStorage.setItem(
                "loveLuxeCustomers",
                JSON.stringify(customers)
            );


            if (signupMessage) {

                signupMessage.textContent =
                    "Account created successfully!";

                signupMessage.style.color = "green";

            }


            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 700);

        }
    );

});



/* ==========================================
   FORGOT PASSWORD
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const forgotForm =
        document.getElementById("forgotPasswordForm") ||
        document.getElementById("resetForm");


    if (!forgotForm) {
        return;
    }


    forgotForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document.getElementById("forgotUsername")?.value.trim() ||
                document.getElementById("resetUsername")?.value.trim();


            const newPassword =
                document.getElementById("newPassword")?.value.trim();


            const message =
                document.getElementById("forgotMessage") ||
                document.getElementById("resetMessage");


            if (!username || !newPassword) {

                if (message) {

                    message.textContent =
                        "Please complete all fields.";

                    message.style.color = "red";

                }

                return;
            }


            if (
                username.toLowerCase() ===
                adminAccount.username.toLowerCase()
            ) {

                if (message) {

                    message.textContent =
                        "Admin password cannot be reset here.";

                    message.style.color = "red";

                }

                return;
            }


            let customers = [];


            try {

                customers =
                    JSON.parse(
                        localStorage.getItem(
                            "loveLuxeCustomers"
                        )
                    ) || [];

            } catch (error) {

                customers = [];

            }


            const customerIndex =
                customers.findIndex(function (user) {

                    return (
                        user.username.toLowerCase() ===
                        username.toLowerCase()
                    );

                });


            if (customerIndex === -1) {

                if (message) {

                    message.textContent =
                        "Username not found.";

                    message.style.color = "red";

                }

                return;
            }


            customers[customerIndex].password =
                newPassword;


            localStorage.setItem(
                "loveLuxeCustomers",
                JSON.stringify(customers)
            );


            if (message) {

                message.textContent =
                    "Password changed successfully.";

                message.style.color = "green";

            }


            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 800);

        }
    );

});



/* ==========================================
   CUSTOMER ACCOUNT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const accountFullName =
        document.getElementById("accountFullName");


    if (!accountFullName) {
        return;
    }


    const currentUserData =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!currentUserData) {

        window.location.href =
            "index.html";

        return;
    }


    let currentUser;


    try {

        currentUser =
            JSON.parse(currentUserData);

    } catch (error) {

        localStorage.removeItem(
            "loveLuxeCurrentUser"
        );

        window.location.href =
            "index.html";

        return;
    }


    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        window.location.href =
            "catalog.html";

        return;
    }


    /* ======================================
       DISPLAY ACCOUNT INFORMATION
    ====================================== */

    accountFullName.value =
        currentUser.fullName || "";


    const accountUsername =
        document.getElementById("accountUsername");


    if (accountUsername) {

        accountUsername.value =
            currentUser.username || "";

    }


    const accountPhone =
        document.getElementById("accountPhone");


    if (accountPhone) {

        accountPhone.value =
            currentUser.phone || "";

    }



    /* ======================================
       DISPLAY SHIPPING ADDRESS
    ====================================== */

    const address =
        currentUser.shippingAddress || {};


    if (typeof address === "object") {

        const houseNumber =
            document.getElementById("houseNumber");

        const street =
            document.getElementById("street");

        const barangay =
            document.getElementById("barangay");

        const city =
            document.getElementById("city");

        const province =
            document.getElementById("province");

        const postalCode =
            document.getElementById("postalCode");


        if (houseNumber)
            houseNumber.value =
                address.houseNumber || "";


        if (street)
            street.value =
                address.street || "";


        if (barangay)
            barangay.value =
                address.barangay || "";


        if (city)
            city.value =
                address.city || "";


        if (province)
            province.value =
                address.province || "";


        if (postalCode)
            postalCode.value =
                address.postalCode || "";

    }


    /* ======================================
       SAVE ACCOUNT
    ====================================== */

    const saveAccountButton =
        document.getElementById(
            "saveAccountButton"
        );


    if (saveAccountButton) {

        saveAccountButton.addEventListener(
            "click",
            function () {

                currentUser.fullName =
                    accountFullName.value.trim();


                currentUser.phone =
                    document.getElementById(
                        "accountPhone"
                    )?.value.trim() || "";


                updateCustomerStorage(
                    currentUser
                );


                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(currentUser)
                );


                showAccountMessage(
                    "Account information saved successfully.",
                    "green"
                );

            }
        );

    }



    /* ======================================
       SAVE SHIPPING ADDRESS
    ====================================== */

    const saveShippingButton =
        document.getElementById(
            "saveShippingButton"
        );


    if (saveShippingButton) {

        saveShippingButton.addEventListener(
            "click",
            function () {


                currentUser.shippingAddress = {

                    houseNumber:
                        document.getElementById(
                            "houseNumber"
                        )?.value.trim() || "",

                    street:
                        document.getElementById(
                            "street"
                        )?.value.trim() || "",

                    barangay:
                        document.getElementById(
                            "barangay"
                        )?.value.trim() || "",

                    city:
                        document.getElementById(
                            "city"
                        )?.value.trim() || "",

                    province:
                        document.getElementById(
                            "province"
                        )?.value.trim() || "",

                    postalCode:
                        document.getElementById(
                            "postalCode"
                        )?.value.trim() || ""

                };


                updateCustomerStorage(
                    currentUser
                );


                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(currentUser)
                );


                showAccountMessage(
                    "Shipping address saved successfully.",
                    "green"
                );

            }
        );

    }



    /* ======================================
       CHANGE PASSWORD
    ====================================== */

    const changePasswordButton =
        document.getElementById(
            "changePasswordButton"
        );


    if (changePasswordButton) {

        changePasswordButton.addEventListener(
            "click",
            function () {

                const currentPassword =
                    document.getElementById(
                        "currentPassword"
                    )?.value.trim();


                const newPassword =
                    document.getElementById(
                        "accountNewPassword"
                    )?.value.trim();


                const confirmPassword =
                    document.getElementById(
                        "accountConfirmPassword"
                    )?.value.trim();


                if (
                    currentPassword !==
                    currentUser.password
                ) {

                    showAccountMessage(
                        "Current password is incorrect.",
                        "red"
                    );

                    return;
                }


                if (!newPassword) {

                    showAccountMessage(
                        "Please enter a new password.",
                        "red"
                    );

                    return;
                }


                if (
                    newPassword !==
                    confirmPassword
                ) {

                    showAccountMessage(
                        "New passwords do not match.",
                        "red"
                    );

                    return;
                }


                currentUser.password =
                    newPassword;


                updateCustomerStorage(
                    currentUser
                );


                localStorage.setItem(
                    "loveLuxeCurrentUser",
                    JSON.stringify(currentUser)
                );


                showAccountMessage(
                    "Password changed successfully.",
                    "green"
                );

            }
        );

    }



    /* ======================================
       ORDERS
    ====================================== */

    loadCustomerOrders(
        currentUser.username
    );

});



/* ==========================================
   UPDATE CUSTOMER IN LOCAL STORAGE
========================================== */

function updateCustomerStorage(user) {

    let customers = [];


    try {

        customers =
            JSON.parse(
                localStorage.getItem(
                    "loveLuxeCustomers"
                )
            ) || [];

    } catch (error) {

        customers = [];

    }


    const index =
        customers.findIndex(function (customer) {

            return (
                customer.username ===
                user.username
            );

        });


    if (index !== -1) {

        customers[index] = user;

    } else {

        customers.push(user);

    }


    localStorage.setItem(
        "loveLuxeCustomers",
        JSON.stringify(customers)
    );

}



/* ==========================================
   ACCOUNT MESSAGE
========================================== */

function showAccountMessage(
    message,
    color
) {

    const accountMessage =
        document.getElementById(
            "accountMessage"
        );


    if (accountMessage) {

        accountMessage.textContent =
            message;

        accountMessage.style.color =
            color;

    }

}



/* ==========================================
   LOAD CUSTOMER ORDERS
========================================== */

function loadCustomerOrders(username) {

    const ordersList =
        document.getElementById(
            "ordersList"
        );


    if (!ordersList) {
        return;
    }


    let orders = [];


    try {

        orders =
            JSON.parse(
                localStorage.getItem(
                    "loveLuxeOrders"
                )
            ) || [];

    } catch (error) {

        orders = [];

    }


    const customerOrders =
        orders.filter(function (order) {

            return (
                order.customerUsername ===
                username
            );

        });


    if (customerOrders.length === 0) {

        ordersList.innerHTML = `
            <div class="empty-orders">
                <h3>No orders yet</h3>
                <p>Your orders will appear here.</p>
            </div>
        `;

        return;
    }


    ordersList.innerHTML =
        customerOrders.map(
            function (order) {

                return `
                    <div class="order-card">

                        <div>
                            <strong>
                                ${order.productName}
                            </strong>

                            <p>
                                Order #${order.orderNumber}
                            </p>

                            <p>
                                Quantity:
                                ${order.quantity}
                            </p>

                            <p>
                                Payment:
                                ${order.paymentMethod}
                            </p>
                        </div>


                        <div>
                            <strong>
                                ₱${Number(
                                    order.total
                                ).toLocaleString(
                                    "en-PH",
                                    {
                                        minimumFractionDigits: 2
                                    }
                                )}
                            </strong>

                            <p>
                                ${order.status}
                            </p>
                        </div>

                    </div>
                `;

            }
        ).join("");

}



/* ==========================================
   CUSTOMER LOGOUT
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

        sidebar.classList.add("open");

    }


    if (overlay) {

        overlay.classList.add("show");

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

        sidebar.classList.remove("open");

    }


    if (overlay) {

        overlay.classList.remove("show");

    }

}
