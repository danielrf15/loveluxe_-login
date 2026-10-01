/* ==========================================
   LOVE LUXE BY EA
   ARRAY-ONLY SPA
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
   CUSTOMER ARRAY
========================================== */

const customers = [];



/* ==========================================
   ORDER ARRAY
========================================== */

const orders = [];



/* ==========================================
   CURRENT USER
========================================== */

let currentUser = null;



/* ==========================================
   PRODUCTS
========================================== */

const products = [

    {
        id: 1,
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg",
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "White"],
        description:
            "A simple and stylish skirt that is easy to pair with different outfits."
    },

    {
        id: 2,
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        image: "images/nov-mardi-tshirt.jpg",
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "White"],
        description:
            "A comfortable everyday t-shirt with a simple and casual style."
    },

    {
        id: 3,
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        image: "images/basic-chic01-terno.jpg",
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "White"],
        description:
            "A stylish terno set designed for a simple and comfortable look."
    },

    {
        id: 4,
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        image: "images/sami-tshirt.jpg",
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "White"],
        description:
            "A casual t-shirt that can be worn for everyday activities."
    },

    {
        id: 5,
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        image: "images/alada-soap.jpg",
        description:
            "A body care soap for a simple everyday skincare routine."
    },

    {
        id: 6,
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        image: "images/dewy-gluta-soap.jpg",
        description:
            "A cleansing soap made for everyday personal care."
    },

    {
        id: 7,
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        image: "images/serene-skin-soap.jpg",
        description:
            "A gentle body care product for everyday use."
    },

    {
        id: 8,
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        image: "images/vitamin-e-whitening-cream.jpg",
        description:
            "A moisturizing cream for an everyday skincare routine."
    },

    {
        id: 9,
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg",
        colors: ["Black", "Brown", "White"],
        description:
            "A compact and stylish bag that works well for everyday use."
    },

    {
        id: 10,
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        image: "images/mini-bucket-bag.jpg",
        colors: ["Black", "Brown", "White"],
        description:
            "A small bucket-style bag with a simple and fashionable design."
    },

    {
        id: 11,
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        image: "images/anytime-medium.jpg",
        colors: [
            "Black",
            "Tantaupe",
            "Tantaupe Two",
            "White",
            "Clay Two"
        ],
        description:
            "A medium-sized everyday bag with enough space for your essentials."
    },

    {
        id: 12,
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        image: "images/emilio-barrel.jpg",
        colors: [
            "Dark Brown",
            "Red",
            "Green",
            "Black"
        ],
        description:
            "A barrel-style bag with a clean and modern appearance."
    },

    {
        id: 13,
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg",
        scents: [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals"
        ],
        description:
            "A fragrance option for everyday wear."
    },

    {
        id: 14,
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        image: "images/bath-body-works-perfume.jpg",
        scents: [
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're the One",
            "Vanilla Ease"
        ],
        description:
            "A fragrance designed for a fresh everyday scent."
    },

    {
        id: 15,
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        image: "images/smart-collection-perfume.jpg",
        scents: [
            "Chanel N'5"
        ],
        description:
            "An affordable fragrance option for everyday use."
    },

    {
        id: 16,
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        image: "images/lattafa-yara.jpg",
        description:
            "A popular fragrance choice with a soft and pleasant scent."
    }

];



/* ==========================================
   APP VARIABLES
========================================== */

let selectedCategory = "All";

let selectedProduct = null;

let selectedQuantity = 1;

let selectedColor = "";

let selectedSize = "";

let selectedScent = "";

let currentView = "products";

let accountOpen = true;



/* ==========================================
   START APP
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAuthentication();

        setupNavigation();

        setupProducts();

        setupAccountFunctions();

        setupCheckout();

    }
);



/* ==========================================
   AUTHENTICATION
========================================== */

function setupAuthentication() {

    document
        .getElementById("showSignup")
        .addEventListener(
            "click",
            showSignup
        );


    document
        .getElementById("showForgot")
        .addEventListener(
            "click",
            showForgot
        );


    document
        .getElementById("backToLoginFromSignup")
        .addEventListener(
            "click",
            showLogin
        );


    document
        .getElementById("backToLoginFromForgot")
        .addEventListener(
            "click",
            showLogin
        );


    document
        .getElementById("loginForm")
        .addEventListener(
            "submit",
            login
        );


    document
        .getElementById("signupForm")
        .addEventListener(
            "submit",
            signup
        );


    document
        .getElementById("forgotForm")
        .addEventListener(
            "submit",
            resetPassword
        );

}


function showLogin() {

    document.getElementById(
        "loginView"
    ).style.display = "block";

    document.getElementById(
        "signupView"
    ).style.display = "none";

    document.getElementById(
        "forgotView"
    ).style.display = "none";

}


function showSignup() {

    document.getElementById(
        "loginView"
    ).style.display = "none";

    document.getElementById(
        "signupView"
    ).style.display = "block";

    document.getElementById(
        "forgotView"
    ).style.display = "none";

}


function showForgot() {

    document.getElementById(
        "loginView"
    ).style.display = "none";

    document.getElementById(
        "signupView"
    ).style.display = "none";

    document.getElementById(
        "forgotView"
    ).style.display = "block";

}



/* ==========================================
   LOGIN
========================================== */

function login(event) {

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


    message.textContent = "";


    /* ADMIN */

    if (
        username === adminAccount.username &&
        password === adminAccount.password
    ) {

        currentUser = {
            username: adminAccount.username,
            password: adminAccount.password,
            fullName: adminAccount.fullName,
            role: "admin"
        };


        openApplication();


        showView("admin");


        message.textContent = "";


        return;

    }


    /* CUSTOMER */

    const customer =
        customers.find(
            function (user) {

                return (
                    user.username === username &&
                    user.password === password
                );

            }
        );


    if (!customer) {

        message.textContent =
            "Invalid username or password.";

        message.style.color = "#c0392b";

        return;

    }


    currentUser = customer;


    document
        .getElementById("loginForm")
        .reset();


    openApplication();


    showView("products");

}



/* ==========================================
   SIGN UP
========================================== */

function signup(event) {

    event.preventDefault();


    const fullName =
        document
            .getElementById("signupFullName")
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
            .getElementById("signupConfirm")
            .value;


    const message =
        document.getElementById(
            "signupMessage"
        );


    message.textContent = "";


    if (
        !fullName ||
        !username ||
        !password ||
        !confirmPassword
    ) {

        message.textContent =
            "Please complete all fields.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        username.toLowerCase() ===
        "admin"
    ) {

        message.textContent =
            "This username is not available.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        password !== confirmPassword
    ) {

        message.textContent =
            "Passwords do not match.";

        message.style.color =
            "#c0392b";

        return;

    }


    const existingCustomer =
        customers.find(
            function (user) {

                return (
                    user.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    if (existingCustomer) {

        message.textContent =
            "Username already exists.";

        message.style.color =
            "#c0392b";

        return;

    }


    const newCustomer = {

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

    };


    customers.push(
        newCustomer
    );


    currentUser =
        newCustomer;


    message.textContent =
        "Account created successfully!";

    message.style.color =
        "green";


    document
        .getElementById("signupForm")
        .reset();


    setTimeout(
        function () {

            openApplication();

            showView("products");

        },
        500
    );

}



/* ==========================================
   RESET PASSWORD
========================================== */

function resetPassword(event) {

    event.preventDefault();


    const username =
        document
            .getElementById("forgotUsername")
            .value
            .trim();

    const newPassword =
        document
            .getElementById("forgotPassword")
            .value;

    const confirmPassword =
        document
            .getElementById("forgotConfirm")
            .value;


    const message =
        document.getElementById(
            "forgotMessage"
        );


    if (
        username.toLowerCase() ===
        "admin"
    ) {

        message.textContent =
            "The admin password cannot be reset here.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        newPassword !== confirmPassword
    ) {

        message.textContent =
            "Passwords do not match.";

        message.style.color =
            "#c0392b";

        return;

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

        message.textContent =
            "Username not found.";

        message.style.color =
            "#c0392b";

        return;

    }


    customer.password =
        newPassword;


    message.textContent =
        "Password reset successfully.";

    message.style.color =
        "green";


    document
        .getElementById("forgotForm")
        .reset();

}



/* ==========================================
   OPEN APPLICATION
========================================== */

function openApplication() {

    document.getElementById(
        "authPage"
    ).style.display = "none";


    document.getElementById(
        "app"
    ).style.display = "block";


    updateUserDisplay();


    if (
        currentUser.role === "admin"
    ) {

        document.getElementById(
            "adminNavigation"
        ).style.display = "block";

    }

}



/* ==========================================
   USER DISPLAY
========================================== */

function updateUserDisplay() {

    const name =
        currentUser.fullName ||
        "Customer";


    document.getElementById(
        "sidebarName"
    ).textContent = name;


    document.getElementById(
        "profileName"
    ).textContent = name;


    document.getElementById(
        "avatar"
    ).textContent =
        name.charAt(0).toUpperCase();


    loadPersonalInformation();

    loadAddress();

}



/* ==========================================
   NAVIGATION
========================================== */

function setupNavigation() {

    document
        .getElementById("menuButton")
        .addEventListener(
            "click",
            function () {

                document
                    .getElementById("sidebar")
                    .classList.toggle("open");

            }
        );


    document
        .getElementById("accountToggle")
        .addEventListener(
            "click",
            function () {

                accountOpen =
                    !accountOpen;

                document
                    .getElementById("accountDropdown")
                    .style.display =
                    accountOpen
                        ? "block"
                        : "none";

                document
                    .getElementById("accountArrow")
                    .textContent =
                    accountOpen
                        ? "▼"
                        : "▶";

            }
        );


    document
        .querySelectorAll(
            "[data-view]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const view =
                            button.dataset.view;

                        showView(view);

                        closeMobileSidebar();

                    }
                );

            }
        );


    document
        .getElementById("logoutButton")
        .addEventListener(
            "click",
            logout
        );

}



function showView(viewName) {

    currentView =
        viewName;


    document
        .querySelectorAll(".view")
        .forEach(
            function (view) {

                view.classList.remove(
                    "active"
                );

            }
        );


    const selectedView =
        document.getElementById(
            viewName + "View"
        );


    if (selectedView) {

        selectedView.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

            }
        );


    document
        .querySelectorAll(
            ".account-sub-link"
        )
        .forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

            }
        );


    const matchingAccountLink =
        document.querySelector(
            '.account-sub-link[data-view="' +
            viewName +
            '"]'
        );


    if (matchingAccountLink) {

        matchingAccountLink.classList.add(
            "active"
        );

        /*
            IMPORTANT:
            Account dropdown stays open.
        */

        accountOpen = true;

        document
            .getElementById("accountDropdown")
            .style.display = "block";

        document
            .getElementById("accountArrow")
            .textContent = "▼";

    }


    if (
        viewName === "products"
    ) {

        document
            .getElementById("productsNav")
            .classList.add("active");

        document.getElementById(
            "pageTitle"
        ).textContent =
            "Product Management";

    }


    if (
        viewName === "personal"
    ) {

        document.getElementById(
            "pageTitle"
        ).textContent =
            "Personal Information";

    }


    if (
        viewName === "orders"
    ) {

        document.getElementById(
            "pageTitle"
        ).textContent =
            "My Orders";

        renderOrders();

    }


    if (
        viewName === "settings"
    ) {

        document.getElementById(
            "pageTitle"
        ).textContent =
            "Settings";

        loadAddress();

    }


    if (
        viewName === "admin"
    ) {

        document.getElementById(
            "pageTitle"
        ).textContent =
            "Admin Dashboard";

        renderAdmin();

    }

}



function closeMobileSidebar() {

    document
        .getElementById("sidebar")
        .classList.remove("open");

}



/* ==========================================
   PRODUCTS
========================================== */

function setupProducts() {

    document
        .getElementById("searchInput")
        .addEventListener(
            "input",
            displayProducts
        );


    document
        .querySelectorAll(
            ".filter-button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".filter-button"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );


                        selectedCategory =
                            button.dataset.category;


                        displayProducts();

                    }
                );

            }
        );


    displayProducts();

}



function displayProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );


    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(
            function (product) {

                const categoryMatch =
                    selectedCategory === "All" ||
                    product.category ===
                    selectedCategory;


                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(search) ||
                    product.category
                        .toLowerCase()
                        .includes(search);


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    document.getElementById(
        "productCount"
    ).textContent =
        "Showing " +
        filteredProducts.length +
        " product(s)";


    if (
        filteredProducts.length === 0
    ) {

        grid.innerHTML = "";

        document.getElementById(
            "noProducts"
        ).style.display = "block";

        return;

    }


    document.getElementById(
        "noProducts"
    ).style.display = "none";


    grid.innerHTML =
        filteredProducts
            .map(
                function (product) {

                    return `

                        <article class="product-card">

                            <div class="product-image">

                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;image-placeholder&quot;>LOVE LUXE</div>';"
                                >

                            </div>


                            <div class="product-info">

                                <div class="product-category">
                                    ${product.category}
                                </div>


                                <div class="product-name">
                                    ${product.name}
                                </div>


                                <div class="product-description">
                                    ${product.description}
                                </div>


                                <div class="product-bottom">

                                    <div class="product-price">
                                        ${formatPrice(product.price)}
                                    </div>


                                    <button
                                        type="button"
                                        class="view-button"
                                        onclick="openCheckout(${product.id})"
                                    >
                                        VIEW
                                    </button>

                                </div>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");

}



function formatPrice(price) {

    return "₱" +
        Number(price).toLocaleString(
            "en-PH",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}



/* ==========================================
   CHECKOUT
========================================== */

function setupCheckout() {

    document
        .getElementById("closeModal")
        .addEventListener(
            "click",
            closeCheckout
        );


    document
        .getElementById("minusQuantity")
        .addEventListener(
            "click",
            function () {

                if (
                    selectedQuantity > 1
                ) {

                    selectedQuantity--;

                    updateCheckoutTotal();

                }

            }
        );


    document
        .getElementById("plusQuantity")
        .addEventListener(
            "click",
            function () {

                selectedQuantity++;

                updateCheckoutTotal();

            }
        );


    document
        .getElementById("checkoutPayment")
        .addEventListener(
            "change",
            updateCheckoutTotal
        );


    document
        .getElementById("placeOrderButton")
        .addEventListener(
            "click",
            placeOrder
        );

}



function openCheckout(productId) {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    selectedProduct =
        products.find(
            function (product) {

                return product.id ===
                    productId;

            }
        );


    if (!selectedProduct) {

        return;

    }


    selectedQuantity = 1;

    selectedColor = "";

    selectedSize = "";

    selectedScent = "";


    document.getElementById(
        "checkoutName"
    ).textContent =
        selectedProduct.name;


    document.getElementById(
        "checkoutPrice"
    ).textContent =
        formatPrice(
            selectedProduct.price
        );


    document.getElementById(
        "quantityValue"
    ).textContent =
        selectedQuantity;


    const imageBox =
        document.getElementById(
            "checkoutImage"
        );


    imageBox.innerHTML = `

        <img
            src="${selectedProduct.image}"
            alt="${selectedProduct.name}"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;image-placeholder&quot;>LOVE LUXE</div>';"
        >

    `;


    renderCheckoutOptions();


    renderCheckoutAddress();


    document.getElementById(
        "checkoutMessage"
    ).textContent = "";


    updateCheckoutTotal();


    document.getElementById(
        "checkoutModal"
    ).classList.add("show");

}



function renderCheckoutOptions() {

    const container =
        document.getElementById(
            "checkoutOptions"
        );


    let html = "";


    if (
        selectedProduct.colors
    ) {

        html += `

            <div class="form-group checkout-option">

                <label>
                    Color
                </label>

                <select id="checkoutColor">

                    <option value="">
                        Select color
                    </option>

                    ${selectedProduct.colors
                        .map(
                            function (color) {

                                return `
                                    <option value="${color}">
                                        ${color}
                                    </option>
                                `;

                            }
                        )
                        .join("")}

                </select>

            </div>

        `;

    }


    if (
        selectedProduct.sizes
    ) {

        html += `

            <div class="form-group checkout-option">

                <label>
                    Size
                </label>

                <select id="checkoutSize">

                    <option value="">
                        Select size
                    </option>

                    ${selectedProduct.sizes
                        .map(
                            function (size) {

                                return `
                                    <option value="${size}">
                                        ${size}
                                    </option>
                                `;

                            }
                        )
                        .join("")}

                </select>

            </div>

        `;

    }


    if (
        selectedProduct.scents
    ) {

        html += `

            <div class="form-group checkout-option">

                <label>
                    Scent
                </label>

                <select id="checkoutScent">

                    <option value="">
                        Select scent
                    </option>

                    ${selectedProduct.scents
                        .map(
                            function (scent) {

                                return `
                                    <option value="${scent}">
                                        ${scent}
                                    </option>
                                `;

                            }
                        )
                        .join("")}

                </select>

            </div>

        `;

    }


    container.innerHTML =
        html;


    const color =
        document.getElementById(
            "checkoutColor"
        );

    const size =
        document.getElementById(
            "checkoutSize"
        );

    const scent =
        document.getElementById(
            "checkoutScent"
        );


    if (color) {

        color.addEventListener(
            "change",
            function () {

                selectedColor =
                    color.value;

            }
        );

    }


    if (size) {

        size.addEventListener(
            "change",
            function () {

                selectedSize =
                    size.value;

            }
        );

    }


    if (scent) {

        scent.addEventListener(
            "change",
            function () {

                selectedScent =
                    scent.value;

            }
        );

    }

}



function renderCheckoutAddress() {

    const address =
        currentUser.shippingAddress;


    const parts = [

        address.houseNumber,

        address.street,

        address.barangay,

        address.city,

        address.province,

        address.postalCode

    ].filter(
        function (part) {

            return (
                part &&
                String(part).trim() !== ""
            );

        }
    );


    const element =
        document.getElementById(
            "checkoutAddress"
        );


    if (
        parts.length === 0
    ) {

        element.textContent =
            "No shipping address saved. Add your address in Settings.";

        return;

    }


    element.textContent =
        "Shipping to: " +
        parts.join(", ");

}



function updateCheckoutTotal() {

    if (!selectedProduct) {

        return;

    }


    const total =
        selectedProduct.price *
        selectedQuantity;


    document.getElementById(
        "quantityValue"
    ).textContent =
        selectedQuantity;


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        "Total: " +
        formatPrice(total);

}



function closeCheckout() {

    document.getElementById(
        "checkoutModal"
    ).classList.remove("show");

}



function placeOrder() {

    if (
        !selectedProduct ||
        !currentUser
    ) {

        return;

    }


    const address =
        currentUser.shippingAddress;


    const addressParts = [

        address.houseNumber,

        address.street,

        address.barangay,

        address.city,

        address.province,

        address.postalCode

    ].filter(
        function (part) {

            return (
                part &&
                String(part).trim() !== ""
            );

        }
    );


    const message =
        document.getElementById(
            "checkoutMessage"
        );


    if (
        addressParts.length === 0
    ) {

        message.textContent =
            "Please add your shipping address in Settings first.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        selectedProduct.colors &&
        !selectedColor
    ) {

        message.textContent =
            "Please select a color.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        selectedProduct.sizes &&
        !selectedSize
    ) {

        message.textContent =
            "Please select a size.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        selectedProduct.scents &&
        !selectedScent
    ) {

        message.textContent =
            "Please select a scent.";

        message.style.color =
            "#c0392b";

        return;

    }


    const paymentMethod =
        document.getElementById(
            "checkoutPayment"
        ).value;


    const total =
        selectedProduct.price *
        selectedQuantity;


    const orderNumber =
        "LL-" +
        Date.now()
            .toString()
            .slice(-8);


    const order = {

        orderNumber:
            orderNumber,

        customerUsername:
            currentUser.username,

        customerName:
            currentUser.fullName,

        productId:
            selectedProduct.id,

        productName:
            selectedProduct.name,

        category:
            selectedProduct.category,

        quantity:
            selectedQuantity,

        color:
            selectedColor,

        size:
            selectedSize,

        scent:
            selectedScent,

        unitPrice:
            selectedProduct.price,

        total:
            total,

        paymentMethod:
            paymentMethod,

        shippingAddress:
            addressParts.join(", "),

        date:
            new Date().toLocaleString(
                "en-PH"
            ),

        status:
            "Pending"

    };


    orders.push(
        order
    );


    closeCheckout();


    showView("orders");


    renderOrders();

}



/* ==========================================
   ORDERS
========================================== */

function renderOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );


    const customerOrders =
        orders
            .filter(
                function (order) {

                    return (
                        order.customerUsername ===
                        currentUser.username
                    );

                }
            )
            .slice()
            .reverse();


    if (
        customerOrders.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-orders">

                <h3>
                    No Orders Yet
                </h3>

                <p>
                    Your orders will appear here after you make a purchase.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        customerOrders
            .map(
                function (order) {

                    const cancelled =
                        order.status ===
                        "Cancelled";


                    return `

                        <div class="order-card">

                            <div class="order-top">

                                <div>

                                    <div class="order-number">
                                        Order #${order.orderNumber}
                                    </div>

                                    <div class="order-date">
                                        ${order.date}
                                    </div>

                                </div>


                                <div class="status ${
                                    cancelled
                                        ? "cancelled"
                                        : ""
                                }">

                                    ${order.status}

                                </div>

                            </div>


                            <div class="order-details">

                                <div>
                                    <strong>Product:</strong>
                                    ${order.productName}
                                </div>

                                <div>
                                    <strong>Category:</strong>
                                    ${order.category}
                                </div>

                                <div>
                                    <strong>Quantity:</strong>
                                    ${order.quantity}
                                </div>

                                <div>
                                    <strong>Payment:</strong>
                                    ${order.paymentMethod}
                                </div>

                                ${
                                    order.color
                                        ? `
                                            <div>
                                                <strong>Color:</strong>
                                                ${order.color}
                                            </div>
                                        `
                                        : ""
                                }

                                ${
                                    order.size
                                        ? `
                                            <div>
                                                <strong>Size:</strong>
                                                ${order.size}
                                            </div>
                                        `
                                        : ""
                                }

                                ${
                                    order.scent
                                        ? `
                                            <div>
                                                <strong>Scent:</strong>
                                                ${order.scent}
                                            </div>
                                        `
                                        : ""
                                }

                            </div>


                            <div class="order-total">

                                Total:
                                ${formatPrice(order.total)}

                            </div>


                            ${
                                !cancelled
                                    ? `

                                        <div class="order-actions">

                                            <button
                                                type="button"
                                                class="secondary-button"
                                                onclick="changePaymentMethod('${order.orderNumber}')"
                                            >
                                                CHANGE PAYMENT METHOD
                                            </button>


                                            <button
                                                type="button"
                                                class="danger-button"
                                                onclick="cancelOrder('${order.orderNumber}')"
                                            >
                                                CANCEL ORDER
                                            </button>

                                        </div>

                                    `
                                    : ""
                            }

                        </div>

                    `;

                }
            )
            .join("");

}



/* ==========================================
   CANCEL ORDER
========================================== */

function cancelOrder(orderNumber) {

    const order =
        orders.find(
            function (item) {

                return (
                    item.orderNumber ===
                    orderNumber
                );

            }
        );


    if (!order) {

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to cancel this order?"
        );


    if (!confirmed) {

        return;

    }


    order.status =
        "Cancelled";


    renderOrders();

}



/* ==========================================
   CHANGE PAYMENT
========================================== */

function changePaymentMethod(
    orderNumber
) {

    const order =
        orders.find(
            function (item) {

                return (
                    item.orderNumber ===
                    orderNumber
                );

            }
        );


    if (!order) {

        return;

    }


    const newPayment =
        prompt(
            "Enter payment method:\nCash\nGCash\nBank Transfer\nCard",
            order.paymentMethod
        );


    if (!newPayment) {

        return;

    }


    const allowedPayments = [

        "Cash",

        "GCash",

        "Bank Transfer",

        "Card"

    ];


    if (
        !allowedPayments.includes(
            newPayment
        )
    ) {

        alert(
            "Please enter one of the available payment methods."
        );

        return;

    }


    order.paymentMethod =
        newPayment;


    renderOrders();

}



/* ==========================================
   PERSONAL INFORMATION
========================================== */

function setupAccountFunctions() {

    document
        .getElementById("savePersonalButton")
        .addEventListener(
            "click",
            savePersonalInformation
        );


    document
        .getElementById("saveAddressButton")
        .addEventListener(
            "click",
            saveAddress
        );


    document
        .getElementById("changePasswordButton")
        .addEventListener(
            "click",
            changePassword
        );

}



function loadPersonalInformation() {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    document.getElementById(
        "personalFullName"
    ).value =
        currentUser.fullName || "";


    document.getElementById(
        "personalUsername"
    ).value =
        currentUser.username || "";


    document.getElementById(
        "personalPhone"
    ).value =
        currentUser.phone || "";

}



function savePersonalInformation() {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    const fullName =
        document.getElementById(
            "personalFullName"
        ).value.trim();


    const username =
        document.getElementById(
            "personalUsername"
        ).value.trim();


    const phone =
        document.getElementById(
            "personalPhone"
        ).value.trim();


    const message =
        document.getElementById(
            "personalMessage"
        );


    if (
        !fullName ||
        !username
    ) {

        message.textContent =
            "Full name and username are required.";

        message.style.color =
            "#c0392b";

        return;

    }


    const duplicate =
        customers.find(
            function (customer) {

                return (
                    customer !== currentUser &&
                    customer.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    if (duplicate) {

        message.textContent =
            "That username is already being used.";

        message.style.color =
            "#c0392b";

        return;

    }


    currentUser.fullName =
        fullName;

    currentUser.username =
        username;

    currentUser.phone =
        phone;


    message.textContent =
        "Personal information updated.";

    message.style.color =
        "green";


    updateUserDisplay();

}



/* ==========================================
   SHIPPING ADDRESS
========================================== */

function loadAddress() {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    const address =
        currentUser.shippingAddress;


    document.getElementById(
        "houseNumber"
    ).value =
        address.houseNumber || "";


    document.getElementById(
        "street"
    ).value =
        address.street || "";


    document.getElementById(
        "barangay"
    ).value =
        address.barangay || "";


    document.getElementById(
        "city"
    ).value =
        address.city || "";


    document.getElementById(
        "province"
    ).value =
        address.province || "";


    document.getElementById(
        "postalCode"
    ).value =
        address.postalCode || "";

}



function saveAddress() {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    currentUser.shippingAddress = {

        houseNumber:
            document
                .getElementById("houseNumber")
                .value
                .trim(),

        street:
            document
                .getElementById("street")
                .value
                .trim(),

        barangay:
            document
                .getElementById("barangay")
                .value
                .trim(),

        city:
            document
                .getElementById("city")
                .value
                .trim(),

        province:
            document
                .getElementById("province")
                .value
                .trim(),

        postalCode:
            document
                .getElementById("postalCode")
                .value
                .trim()

    };


    const message =
        document.getElementById(
            "addressMessage"
        );


    message.textContent =
        "Shipping address saved.";

    message.style.color =
        "green";

}



/* ==========================================
   CHANGE PASSWORD
========================================== */

function changePassword() {

    if (
        !currentUser ||
        currentUser.role !== "customer"
    ) {

        return;

    }


    const currentPassword =
        document.getElementById(
            "currentPassword"
        ).value;


    const newPassword =
        document.getElementById(
            "newPassword"
        ).value;


    const confirmPassword =
        document.getElementById(
            "confirmNewPassword"
        ).value;


    const message =
        document.getElementById(
            "passwordMessage"
        );


    if (
        currentPassword !==
        currentUser.password
    ) {

        message.textContent =
            "Current password is incorrect.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        !newPassword
    ) {

        message.textContent =
            "Please enter a new password.";

        message.style.color =
            "#c0392b";

        return;

    }


    if (
        newPassword !==
        confirmPassword
    ) {

        message.textContent =
            "New passwords do not match.";

        message.style.color =
            "#c0392b";

        return;

    }


    currentUser.password =
        newPassword;


    document.getElementById(
        "currentPassword"
    ).value = "";

    document.getElementById(
        "newPassword"
    ).value = "";

    document.getElementById(
        "confirmNewPassword"
    ).value = "";


    message.textContent =
        "Password changed successfully.";

    message.style.color =
        "green";

}



/* ==========================================
   ADMIN
========================================== */

function renderAdmin() {

    document.getElementById(
        "adminCustomerCount"
    ).textContent =
        customers.length;


    document.getElementById(
        "adminOrderCount"
    ).textContent =
        orders.length;

}



/* ==========================================
   LOGOUT
========================================== */

function logout() {

    currentUser = null;


    document.getElementById(
        "app"
    ).style.display = "none";


    document.getElementById(
        "authPage"
    ).style.display = "flex";


    document.getElementById(
        "loginForm"
    ).reset();


    document.getElementById(
        "loginMessage"
    ).textContent = "";


    showLogin();

}
