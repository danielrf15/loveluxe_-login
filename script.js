/* ==========================================
   LOVE LUXE AUTHENTICATION
   ARRAY-ONLY VERSION
========================================== */

const data = window.LoveLuxeData;
const adminAccount = data.adminAccount;
const customers = data.customers;

function showMessage(element, message, isError) {
    if (!element) return;

    element.textContent = message;
    element.style.color = isError ? "#c0392b" : "#16834a";
}

/* ==========================================
   LOGIN
========================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username =
            document.getElementById("username")?.value.trim() ||
            document.getElementById("loginUsername")?.value.trim() ||
            "";

        const password =
            document.getElementById("password")?.value ||
            document.getElementById("loginPassword")?.value ||
            "";

        const message =
            document.getElementById("loginMessage");

        if (!username || !password) {
            showMessage(message, "Please enter your username and password.", true);
            return;
        }

        if (
            username.toLowerCase() === adminAccount.username.toLowerCase() &&
            password === adminAccount.password
        ) {
            data.currentUser = adminAccount;
            showMessage(message, "Admin login successful!", false);

            setTimeout(function () {
                window.location.href = "admin.html";
            }, 400);

            return;
        }

        const customer = customers.find(function (user) {
            return (
                user.username.toLowerCase() === username.toLowerCase() &&
                user.password === password
            );
        });

        if (customer) {
            data.currentUser = customer;
            showMessage(message, "Login successful!", false);

            setTimeout(function () {
                window.location.href = "catalog.html";
            }, 400);

            return;
        }

        showMessage(message, "Invalid username or password.", true);
    });
}

/* ==========================================
   SIGN UP
========================================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName =
            document.getElementById("fullName")?.value.trim() || "";

        const username =
            document.getElementById("signupUsername")?.value.trim() || "";

        const password =
            document.getElementById("signupPassword")?.value || "";

        const confirmPassword =
            document.getElementById("confirmPassword")?.value || "";

        const message =
            document.getElementById("signupMessage");

        if (!fullName || !username || !password || !confirmPassword) {
            showMessage(message, "Please complete all fields.", true);
            return;
        }

        if (username.toLowerCase() === "admin") {
            showMessage(message, "This username is not available.", true);
            return;
        }

        if (password !== confirmPassword) {
            showMessage(message, "Passwords do not match.", true);
            return;
        }

        const exists = customers.some(function (customer) {
            return customer.username.toLowerCase() === username.toLowerCase();
        });

        if (exists) {
            showMessage(message, "Username already exists.", true);
            return;
        }

        customers.push({
            fullName: fullName,
            username: username,
            password: password,
            phone: "",
            role: "customer",
            shippingAddress: {
                houseNumber: "",
                street: "",
                barangay: "",
                city: "",
                province: "",
                postalCode: ""
            }
        });

        showMessage(
            message,
            "Account created successfully for this session!",
            false
        );

        signupForm.reset();

        setTimeout(function () {
            window.location.href = "index.html";
        }, 800);
    });
}

/* ==========================================
   FORGOT PASSWORD
========================================== */

function resetPassword() {
    const username =
        document.getElementById("forgotUsername")?.value.trim() ||
        document.getElementById("resetUsername")?.value.trim() ||
        "";

    const newPassword =
        document.getElementById("forgotNewPassword")?.value ||
        document.getElementById("newPassword")?.value ||
        "";

    const confirmPassword =
        document.getElementById("forgotConfirmPassword")?.value ||
        document.getElementById("confirmPassword")?.value ||
        "";

    const message =
        document.getElementById("forgotMessage") ||
        document.getElementById("resetMessage");

    if (!username || !newPassword || !confirmPassword) {
        showMessage(message, "Please complete all fields.", true);
        return false;
    }

    if (username.toLowerCase() === adminAccount.username.toLowerCase()) {
        showMessage(message, "Admin password cannot be reset here.", true);
        return false;
    }

    if (newPassword !== confirmPassword) {
        showMessage(message, "Passwords do not match.", true);
        return false;
    }

    const customer = customers.find(function (user) {
        return user.username.toLowerCase() === username.toLowerCase();
    });

    if (!customer) {
        showMessage(message, "Username not found.", true);
        return false;
    }

    customer.password = newPassword;

    showMessage(
        message,
        "Password changed successfully for this session!",
        false
    );

    return false;
}
