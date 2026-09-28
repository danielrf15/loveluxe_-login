/* ==========================================
   LOVE LUXE CUSTOMER CATALOG
========================================== */


/* ==========================================
   CUSTOMER ACCESS CHECK
========================================== */

const currentUserData =
    localStorage.getItem(
        "loveLuxeCurrentUser"
    );


if (!currentUserData) {

    window.location.href =
        "index.html";

}


let catalogUser = null;


try {

    catalogUser =
        JSON.parse(currentUserData);

}

catch (error) {

    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );

    window.location.href =
        "index.html";

}


if (
    catalogUser &&
    catalogUser.role !== "customer"
) {

    window.location.href =
        "admin.html";

}


/* ==========================================
   LOVE LUXE PRODUCTS
========================================== */

const products = [

    {
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        description: "Stylish Sophia skirt.",
        image: "images/sophia-skirt.jpg"
    },

    {
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        description: "Casual Nov-Mardi T-Shirt.",
        image: "images/nov-mardi-tshirt.jpg"
    },

    {
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        description: "Simple and stylish Basic Chic01 Terno.",
        image: "images/basic-chic01-terno.jpg"
    },

    {
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        description: "Casual Sami T-Shirt.",
        image: "images/sami-tshirt.jpg"
    },

    {
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        description: "Alada Soap.",
        image: "images/alada-soap.jpg"
    },

    {
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        description: "Dewy Gluta Soap.",
        image: "images/dewy-gluta-soap.jpg"
    },

    {
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        description: "Serene Skin Soap.",
        image: "images/serene-skin-soap.jpg"
    },

    {
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        description: "Vitamin E Whitening Cream.",
        image: "images/vitamin-e-whitening-cream.jpg"
    },

    {
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        description: "Mini Enzo bag.",
        image: "images/mini-enzo.jpg"
    },

    {
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        description: "Mini Bucket Bag.",
        image: "images/mini-bucket-bag.jpg"
    },

    {
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        description: "Anytime Medium bag.",
        image: "images/anytime-medium.jpg"
    },

    {
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        description: "Emilio Barrel bag.",
        image: "images/emilio-barrel.jpg"
    },

    {
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        description: "Victoria's Secret perfume.",
        image: "images/victorias-secret-perfume.jpg"
    },

    {
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        description: "Bath & Body Works perfume.",
        image: "images/bath-body-works-perfume.jpg"
    },

    {
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        description: "Smart Collection perfume.",
        image: "images/smart-collection-perfume.jpg"
    },

    {
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        description: "Lattafa YARA perfume.",
        image: "images/lattafa-yara.jpg"
    }

];


/* ==========================================
   VARIABLES
========================================== */

let selectedCategory = "All";

let searchText = "";

let selectedProduct = null;

let selectedQuantity = 1;


const productGrid =
    document.getElementById(
        "productGrid"
    );


const productCount =
    document.getElementById(
        "productCount"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const noProducts =
    document.getElementById(
        "noProducts"
    );


const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts() {

    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    const filteredProducts =
        products.filter(
            function(product) {

                const categoryMatch =
                    selectedCategory === "All" ||
                    product.category === selectedCategory;


                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(
                            searchText.toLowerCase()
                        )
                    ||
                    product.category
                        .toLowerCase()
                        .includes(
                            searchText.toLowerCase()
                        );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    if (
        filteredProducts.length === 0
    ) {

        if (noProducts) {
            noProducts.style.display =
                "block";
        }


        if (productCount) {
            productCount.textContent =
                "No products found";
        }


        return;
    }


    if (noProducts) {
        noProducts.style.display =
            "none";
    }


    if (productCount) {
        productCount.textContent =
            "Showing " +
            filteredProducts.length +
            " product(s)";
    }


    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            let imageHTML = "";


            if (product.image) {

                imageHTML =
                    `
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >
                    `;

            }

            else {

                imageHTML =
                    `
                    <div class="image-placeholder">
                        LOVE LUXE
                    </div>
                    `;

            }


            card.innerHTML =
                `
                <div class="product-image">
                    ${imageHTML}
                </div>

                <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-bottom">

                        <span class="product-price">
                            ₱${product.price.toLocaleString(
                                "en-PH",
                                {
                                    minimumFractionDigits: 2
                                }
                            )}
                        </span>

                        <button
                            class="view-button"
                            type="button"
                        >
                            VIEW
                        </button>

                    </div>

                </div>
                `;


            const viewButton =
                card.querySelector(
                    ".view-button"
                );


            viewButton.addEventListener(
                "click",
                function() {

                    viewProduct(
                        product.name
                    );

                }
            );


            productGrid.appendChild(
                card
            );

        }
    );

}


/* ==========================================
   CATEGORY FILTER
========================================== */

filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                filterButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
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


/* ==========================================
   SEARCH
========================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            searchText =
                searchInput.value.trim();


            displayProducts();

        }
    );

}


/* ==========================================
   CREATE CHECKOUT MODAL
========================================== */

function createCheckoutModal() {

    if (
        document.getElementById(
            "loveLuxeCheckoutModal"
        )
    ) {
        return;
    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "loveLuxeCheckoutModal";


    modal.innerHTML =
        `
        <div
            id="checkoutOverlay"
            style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,0.55);
                z-index:9998;
            "
        ></div>

        <div
            style="
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                width:min(500px,92%);
                max-height:90vh;
                overflow-y:auto;
                background:white;
                border-radius:16px;
                padding:25px;
                z-index:9999;
                box-shadow:0 20px 60px rgba(0,0,0,0.25);
                font-family:Arial,sans-serif;
            "
        >

            <button
                id="checkoutClose"
                type="button"
                style="
                    float:right;
                    border:0;
                    background:none;
                    font-size:25px;
                    cursor:pointer;
                "
            >
                ×
            </button>

            <h2
                style="
                    margin-top:0;
                    margin-bottom:20px;
                "
            >
                Love Luxe Checkout
            </h2>

            <div
                id="checkoutProduct"
                style="
                    margin-bottom:20px;
                "
            ></div>

            <label
                style="
                    display:block;
                    margin-bottom:7px;
                    font-weight:bold;
                "
            >
                Quantity
            </label>

            <div
                style="
                    display:flex;
                    align-items:center;
                    gap:10px;
                    margin-bottom:18px;
                "
            >

                <button
                    id="quantityMinus"
                    type="button"
                    style="
                        width:35px;
                        height:35px;
                        cursor:pointer;
                    "
                >
                    -
                </button>

                <span
                    id="checkoutQuantity"
                    style="
                        min-width:30px;
                        text-align:center;
                        font-weight:bold;
                    "
                >
                    1
                </span>

                <button
                    id="quantityPlus"
                    type="button"
                    style="
                        width:35px;
                        height:35px;
                        cursor:pointer;
                    "
                >
                    +
                </button>

            </div>

            <div
                style="
                    margin-bottom:18px;
                    padding:15px;
                    background:#f5f5f5;
                    border-radius:10px;
                "
            >
                <strong>
                    Total:
                </strong>

                <span
                    id="checkoutTotal"
                    style="
                        float:right;
                        font-weight:bold;
                    "
                >
                    ₱0.00
                </span>
            </div>

            <h3>
                Shipping Address
            </h3>

            <p
                id="checkoutAddress"
                style="
                    background:#f8f8f8;
                    padding:12px;
                    border-radius:8px;
                    line-height:1.5;
                "
            >
                No shipping address saved.
            </p>

            <p
                style="
                    font-size:13px;
                    color:#777;
                "
            >
                You can update your shipping address in
                My Account → Settings.
            </p>

            <label
                for="checkoutPayment"
                style="
                    display:block;
                    margin-bottom:7px;
                    font-weight:bold;
                "
            >
                Payment Method
            </label>

            <select
                id="checkoutPayment"
                style="
                    width:100%;
                    padding:12px;
                    margin-bottom:20px;
                    border:1px solid #ddd;
                    border-radius:8px;
                "
            >
                <option value="Cash on Delivery">
                    Cash on Delivery
                </option>

                <option value="GCash">
                    GCash
                </option>

                <option value="Bank Transfer">
                    Bank Transfer
                </option>

                <option value="Card">
                    Card
                </option>
            </select>

            <button
                id="placeOrderButton"
                type="button"
                style="
                    width:100%;
                    padding:14px;
                    border:0;
                    border-radius:8px;
                    background:#111;
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                PLACE ORDER
            </button>

            <p
                id="checkoutMessage"
                style="
                    text-align:center;
                    margin-top:15px;
                "
            ></p>

        </div>
        `;


    document.body.appendChild(
        modal
    );


    document
        .getElementById("checkoutClose")
        .addEventListener(
            "click",
            closeCheckout
        );


    document
        .getElementById("checkoutOverlay")
        .addEventListener(
            "click",
            closeCheckout
        );


    document
        .getElementById("quantityMinus")
        .addEventListener(
            "click",
            function() {

                if (selectedQuantity > 1) {

                    selectedQuantity--;

                    updateCheckout();

                }

            }
        );


    document
        .getElementById("quantityPlus")
        .addEventListener(
            "click",
            function() {

                selectedQuantity++;

                updateCheckout();

            }
        );


    document
        .getElementById("placeOrderButton")
        .addEventListener(
            "click",
            placeOrder
        );

}


/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(productName) {

    selectedProduct =
        products.find(
            function(product) {

                return product.name === productName;

            }
        );


    if (!selectedProduct) {
        return;
    }


    selectedQuantity = 1;


    createCheckoutModal();


    const modal =
        document.getElementById(
            "loveLuxeCheckoutModal"
        );


    modal.style.display =
        "block";


    updateCheckout();

}


/* ==========================================
   UPDATE CHECKOUT
========================================== */

function updateCheckout() {

    if (!selectedProduct) {
        return;
    }


    const productElement =
        document.getElementById(
            "checkoutProduct"
        );


    const quantityElement =
        document.getElementById(
            "checkoutQuantity"
        );


    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    const addressElement =
        document.getElementById(
            "checkoutAddress"
        );


    if (!productElement) {
        return;
    }


    productElement.innerHTML =
        `
        <div
            style="
                display:flex;
                gap:15px;
                align-items:center;
            "
        >

            <img
                src="${selectedProduct.image}"
                alt="${selectedProduct.name}"
                style="
                    width:90px;
                    height:90px;
                    object-fit:cover;
                    border-radius:10px;
                "
            >

            <div>

                <div
                    style="
                        font-size:13px;
                        color:#777;
                    "
                >
                    ${selectedProduct.category}
                </div>

                <h3
                    style="
                        margin:5px 0;
                    "
                >
                    ${selectedProduct.name}
                </h3>

                <div>
                    ₱${selectedProduct.price.toLocaleString(
                        "en-PH",
                        {
                            minimumFractionDigits:2
                        }
                    )}
                </div>

            </div>

        </div>
        `;


    quantityElement.textContent =
        selectedQuantity;


    const total =
        selectedProduct.price *
        selectedQuantity;


    totalElement.textContent =
        "₱" +
        total.toLocaleString(
            "en-PH",
            {
                minimumFractionDigits:2
            }
        );


    const user =
        getCatalogCurrentUser();


    const address =
        user?.shippingAddress;


    if (
        address &&
        (
            address.houseNumber ||
            address.street ||
            address.barangay ||
            address.city ||
            address.province ||
            address.postalCode
        )
    ) {

        addressElement.textContent =
            formatShippingAddress(
                address
            );

    }

    else {

        addressElement.textContent =
            "No shipping address saved. Please update your address in My Account → Settings.";

    }

}


/* ==========================================
   GET CURRENT CUSTOMER
========================================== */

function getCatalogCurrentUser() {

    const savedUser =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!savedUser) {
        return null;
    }


    try {

        return JSON.parse(
            savedUser
        );

    }

    catch (error) {

        return null;

    }

}


/* ==========================================
   FORMAT SHIPPING ADDRESS
========================================== */

function formatShippingAddress(address) {

    const parts = [

        address.houseNumber,

        address.street,

        address.barangay,

        address.city,

        address.province,

        address.postalCode

    ];


    return parts
        .filter(
            function(part) {
                return part && part.trim() !== "";
            }
        )
        .join(", ");

}


/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder() {

    if (!selectedProduct) {
        return;
    }


    const user =
        getCatalogCurrentUser();


    if (
        !user ||
        user.role !== "customer"
    ) {

        alert(
            "Please log in as a customer first."
        );

        window.location.href =
            "index.html";

        return;
    }


    const address =
        user.shippingAddress;


    if (
        !address ||
        !(
            address.houseNumber ||
            address.street ||
            address.barangay ||
            address.city ||
            address.province ||
            address.postalCode
        )
    ) {

        alert(
            "Please save your shipping address in My Account → Settings before checking out."
        );

        window.location.href =
            "customer.html#shipping";

        return;
    }


    const paymentElement =
        document.getElementById(
            "checkoutPayment"
        );


    const paymentMethod =
        paymentElement
            ? paymentElement.value
            : "Cash on Delivery";


    const total =
        selectedProduct.price *
        selectedQuantity;


    const orders =
        JSON.parse(
            localStorage.getItem(
                "loveLuxeOrders"
            )
        ) || [];


    const orderNumber =
        "LL-" +
        Date.now();


    const newOrder = {

        orderNumber:
            orderNumber,

        customerUsername:
            user.username,

        customerName:
            user.fullName,

        customerPhone:
            user.phone || "",

        productName:
            selectedProduct.name,

        category:
            selectedProduct.category,

        quantity:
            selectedQuantity,

        unitPrice:
            selectedProduct.price,

        total:
            total,

        shippingAddress:
            formatShippingAddress(
                address
            ),

        paymentMethod:
            paymentMethod,

        date:
            new Date().toLocaleString(
                "en-PH"
            ),

        status:
            "Pending"

    };


    orders.push(
        newOrder
    );


    localStorage.setItem(
        "loveLuxeOrders",
        JSON.stringify(orders)
    );


    const message =
        document.getElementById(
            "checkoutMessage"
        );


    if (message) {

        message.style.color =
            "green";

        message.textContent =
            "Order placed successfully! Order #" +
            orderNumber;

    }


    setTimeout(
        function() {

            closeCheckout();

            alert(
                "Order placed successfully!\n\nOrder Number: " +
                orderNumber
            );

        },
        700
    );

}


/* ==========================================
   CLOSE CHECKOUT
========================================== */

function closeCheckout() {

    const modal =
        document.getElementById(
            "loveLuxeCheckoutModal"
        );


    if (modal) {

        modal.remove();

    }


    selectedProduct =
        null;

    selectedQuantity =
        1;

}


/* ==========================================
   SIDEBAR
========================================== */

const shopSidebar =
    document.getElementById(
        "shopSidebar"
    );


const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


function openSidebar() {

    if (shopSidebar) {

        shopSidebar.classList.add(
            "open"
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.classList.add(
            "active"
        );

    }

}


function closeSidebar() {

    if (shopSidebar) {

        shopSidebar.classList.remove(
            "open"
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.classList.remove(
            "active"
        );

    }

}


if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        function() {

            closeSidebar();

        }
    );

}


/* ==========================================
   SIDEBAR MESSAGE
========================================== */

function showMessage(section) {

    closeSidebar();


    alert(
        section +
        " page will be added next."
    );

}


/* ==========================================
   CUSTOMER NAME
========================================== */

function displayCustomerName() {

    const customerName =
        document.getElementById(
            "customerName"
        );


    if (!customerName) {
        return;
    }


    const user =
        getCatalogCurrentUser();


    customerName.textContent =
        user?.fullName ||
        "Customer";

}


/* ==========================================
   START
========================================== */

displayCustomerName();

displayProducts();
