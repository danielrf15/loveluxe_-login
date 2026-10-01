/* ==========================================
   LOVE LUXE PRODUCT CATALOG
   ARRAY-ONLY VERSION
========================================== */


/* ==========================================
   SHARED DATA
========================================== */

const loveLuxeData =
    window.LoveLuxeData;


const customers =
    loveLuxeData.customers;


const orders =
    loveLuxeData.orders;


/*
    Array-only project.

    No localStorage.
    No sessionStorage.
    No cookies.
*/


let currentUser =
    customers[0];


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* ======================================
       CLOTHING
    ====================================== */

    {
        id: 1,

        name: "Sophia Skirt",

        category: "Clothing",

        price: 790,

        image:
            "images/sophia-skirt.jpg",

        images: [
            "images/sophia-skirt.jpg",
            "images/sophia-skirt-2.jpg"
        ],

        colors: [
            "Black and White Polka",
            "Light Blue",
            "Gray",
            "Black"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],

        description:
            "A simple and stylish skirt that is easy to pair with different outfits."
    },


    {
        id: 2,

        name: "Nov-Mardi T-Shirt",

        category: "Clothing",

        price: 450,

        image:
            "images/nov-mardi-tshirt.jpg",

        images: [
            "images/nov-mardi-tshirt.jpg",
            "images/nov-mardi-tshirt-2.jpg"
        ],

        colors: [
            "White",
            "Pink",
            "Black"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],

        description:
            "A comfortable everyday t-shirt with a simple and casual style."
    },


    {
        id: 3,

        name: "Basic Chic01 Terno",

        category: "Clothing",

        price: 950,

        image:
            "images/basic-chic01-terno.jpg",

        images: [
            "images/basic-chic01-terno.jpg",
            "images/basic-chic01-terno-2.jpg"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],

        description:
            "A stylish terno set designed for a simple and comfortable look."
    },


    {
        id: 4,

        name: "Sami T-Shirt",

        category: "Clothing",

        price: 790,

        image:
            "images/sami-tshirt.jpg",

        images: [
            "images/sami-tshirt.jpg",
            "images/sami-tshirt-2.jpg"
        ],

        colors: [
            "Brown",
            "Tan",
            "Pink",
            "Black",
            "Light Blue"
        ],

        description:
            "A casual t-shirt that can be worn for everyday activities."
    },


    /* ======================================
       BODY CARE
    ====================================== */

    {
        id: 5,

        name: "Alada Soap",

        category: "Body Care",

        price: 350,

        image:
            "images/alada-soap.jpg",

        images: [
            "images/alada-soap.jpg",
            "images/alada-soap-2.jpg"
        ],

        description:
            "A body care soap for a simple everyday skincare routine."
    },


    {
        id: 6,

        name: "Dewy Gluta Soap",

        category: "Body Care",

        price: 199,

        image:
            "images/dewy-gluta-soap.jpg",

        images: [
            "images/dewy-gluta-soap.jpg",
            "images/dewy-gluta-soap-2.jpg"
        ],

        description:
            "A cleansing soap made for everyday personal care."
    },


    {
        id: 7,

        name: "Serene Skin Soap",

        category: "Body Care",

        price: 299,

        image:
            "images/serene-skin-soap.jpg",

        description:
            "A gentle body care product for everyday use."
    },


    {
        id: 8,

        name: "Vitamin E Whitening Cream",

        category: "Body Care",

        price: 180,

        image:
            "images/vitamin-e-whitening-cream.jpg",

        description:
            "A moisturizing cream for an everyday skincare routine."
    },


    /* ======================================
       BAGS
    ====================================== */

    {
        id: 9,

        name: "Mini Enzo",

        category: "Bags",

        price: 3590,

        image:
            "images/mini-enzo.jpg",

        images: [
            "images/mini-enzo.jpg",
            "images/mini-enzo-2.jpg"
        ],

        colors: [
            "Black",
            "Green",
            "Red",
            "Blue"
        ],

        description:
            "A compact and stylish bag that works well for everyday use."
    },


    {
        id: 10,

        name: "Mini Bucket Bag",

        category: "Bags",

        price: 2090,

        image:
            "images/mini-bucket-bag.jpg",

        images: [
            "images/mini-bucket-bag.jpg",
            "images/mini-bucket-bag-2.jpg"
        ],

        colors: [
            "Dark Blue",
            "Grayish Blue",
            "Blue",
            "Blue Stripes"
        ],

        description:
            "A small bucket-style bag with a simple and fashionable design."
    },


    {
        id: 11,

        name: "Anytime Medium",

        category: "Bags",

        price: 2890,

        image:
            "images/anytime-medium.jpg",

        images: [
            "images/anytime-medium.jpg",
            "images/anytime-medium-2.jpg"
        ],

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

        image:
            "images/emilio-barrel.jpg",

        images: [
            "images/emilio-barrel.jpg",
            "images/emilio-barrel-2.jpg"
        ],

        colors: [
            "Dark Brown",
            "Red",
            "Green",
            "Black"
        ],

        description:
            "A barrel-style bag with a clean and modern appearance."
    },


    /* ======================================
       PERFUME
    ====================================== */

    {
        id: 13,

        name: "Victoria's Secret Perfume",

        category: "Perfume",

        price: 700,

        image:
            "images/victorias-secret-perfume.jpg",

        images: [
            "images/victorias-secret-perfume.jpg",
            "images/victorias-secret-perfume-2.jpg"
        ],

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

        image:
            "images/bath-body-works-perfume.jpg",

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

        image:
            "images/smart-collection-perfume.jpg",

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

        image:
            "images/lattafa-yara.jpg",

        description:
            "A popular fragrance choice with a soft and pleasant scent."
    }

];


/* ==========================================
   VARIABLES
========================================== */

let selectedCategory = "All";

let selectedProduct = null;

let selectedQuantity = 1;

let selectedColor = "";

let selectedSize = "";

let selectedScent = "";


/* ==========================================
   ELEMENTS
========================================== */

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


const customerName =
    document.getElementById(
        "customerName"
    );


const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );


const checkoutProductImage =
    document.getElementById(
        "checkoutProductImage"
    );


const checkoutProductName =
    document.getElementById(
        "checkoutProductName"
    );


const checkoutProductCategory =
    document.getElementById(
        "checkoutProductCategory"
    );


const checkoutProductPrice =
    document.getElementById(
        "checkoutProductPrice"
    );


const checkoutTotal =
    document.getElementById(
        "checkoutTotal"
    );


const quantityInput =
    document.getElementById(
        "quantityInput"
    );


const productOptions =
    document.getElementById(
        "productOptions"
    );


const checkoutMessage =
    document.getElementById(
        "checkoutMessage"
    );


const paymentMethod =
    document.getElementById(
        "paymentMethod"
    );


/* ==========================================
   CUSTOMER NAME
========================================== */

if (
    customerName &&
    currentUser
) {

    customerName.textContent =
        currentUser.fullName ||
        "Customer";

}


/* ==========================================
   PRICE FORMAT
========================================== */

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
   DISPLAY PRODUCTS
========================================== */

function displayProducts() {

    const searchText =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const filteredProducts =
        products.filter(
            function(product) {

                const categoryMatch =
                    selectedCategory === "All" ||
                    product.category ===
                    selectedCategory;


                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(searchText) ||

                    product.category
                        .toLowerCase()
                        .includes(searchText);


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    if (productCount) {

        productCount.textContent =
            "Showing " +
            filteredProducts.length +
            " product(s)";

    }


    if (
        filteredProducts.length === 0
    ) {

        productGrid.innerHTML = "";

        noProducts.style.display =
            "block";

        return;

    }


    noProducts.style.display =
        "none";


    productGrid.innerHTML =
        filteredProducts.map(
            function(product) {

                return `

                    <article class="product-card">

                        <div class="product-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
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
                                    data-product-id="${product.id}"
                                >
                                    VIEW
                                </button>

                            </div>

                        </div>

                    </article>

                `;

            }
        ).join("");


    document
        .querySelectorAll(
            ".view-button"
        )
        .forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        viewProduct(
                            Number(
                                button.dataset.productId
                            )
                        );

                    }
                );

            }
        );

}


/* ==========================================
   CATEGORY FILTERS
========================================== */

filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                filterButtons.forEach(
                    function(item) {

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


/* ==========================================
   SIDEBAR CATEGORY BUTTONS
========================================== */

const sidebarCategoryButtons =
    document.querySelectorAll(
        ".category-sidebar-link"
    );


sidebarCategoryButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const category =
                    button.dataset.sidebarCategory;


                selectedCategory =
                    category;


                filterButtons.forEach(
                    function(filterButton) {

                        filterButton.classList.remove(
                            "active"
                        );


                        if (
                            filterButton.dataset.category ===
                            category
                        ) {

                            filterButton.classList.add(
                                "active"
                            );

                        }

                    }
                );


                displayProducts();

                closeSidebar();

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

            displayProducts();

        }
    );

}


/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(productId) {

    selectedProduct =
        products.find(
            function(product) {

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


    if (checkoutProductImage) {

        checkoutProductImage.src =
            selectedProduct.image;

        checkoutProductImage.alt =
            selectedProduct.name;

    }


    if (checkoutProductName) {

        checkoutProductName.textContent =
            selectedProduct.name;

    }


    if (checkoutProductCategory) {

        checkoutProductCategory.textContent =
            selectedProduct.category;

    }


    if (checkoutProductPrice) {

        checkoutProductPrice.textContent =
            formatPrice(
                selectedProduct.price
            );

    }


    if (quantityInput) {

        quantityInput.value = 1;

    }


    displayProductOptions(
        selectedProduct
    );


    updateTotal();


    if (checkoutMessage) {

        checkoutMessage.textContent = "";

    }


    if (checkoutModal) {

        checkoutModal.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }

}


/* ==========================================
   PRODUCT OPTIONS
========================================== */

function displayProductOptions(
    product
) {

    if (!productOptions) {
        return;
    }


    productOptions.innerHTML =
        "";


    /* COLOR */

    if (
        product.colors &&
        product.colors.length > 0
    ) {

        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Color";


        const select =
            document.createElement(
                "select"
            );


        select.innerHTML =
            `
                <option value="">
                    Select color
                </option>
            `;


        product.colors.forEach(
            function(color) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    color;

                option.textContent =
                    color;


                select.appendChild(
                    option
                );

            }
        );


        select.addEventListener(
            "change",
            function() {

                selectedColor =
                    select.value;

            }
        );


        wrapper.appendChild(
            label
        );


        wrapper.appendChild(
            select
        );


        productOptions.appendChild(
            wrapper
        );

    }


    /* SIZE */

    if (
        product.sizes &&
        product.sizes.length > 0
    ) {

        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Size";


        const select =
            document.createElement(
                "select"
            );


        select.innerHTML =
            `
                <option value="">
                    Select size
                </option>
            `;


        product.sizes.forEach(
            function(size) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    size;

                option.textContent =
                    size;


                select.appendChild(
                    option
                );

            }
        );


        select.addEventListener(
            "change",
            function() {

                selectedSize =
                    select.value;

            }
        );


        wrapper.appendChild(
            label
        );


        wrapper.appendChild(
            select
        );


        productOptions.appendChild(
            wrapper
        );

    }


    /* SCENT */

    if (
        product.scents &&
        product.scents.length > 0
    ) {

        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Scent";


        const select =
            document.createElement(
                "select"
            );


        select.innerHTML =
            `
                <option value="">
                    Select scent
                </option>
            `;


        product.scents.forEach(
            function(scent) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    scent;

                option.textContent =
                    scent;


                select.appendChild(
                    option
                );

            }
        );


        select.addEventListener(
            "change",
            function() {

                selectedScent =
                    select.value;

            }
        );


        wrapper.appendChild(
            label
        );


        wrapper.appendChild(
            select
        );


        productOptions.appendChild(
            wrapper
        );

    }

}


/* ==========================================
   QUANTITY
========================================== */

function updateTotal() {

    if (
        !selectedProduct ||
        !quantityInput
    ) {
        return;
    }


    let quantity =
        parseInt(
            quantityInput.value,
            10
        );


    if (
        isNaN(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

    }


    if (quantity > 99) {

        quantity = 99;

    }


    selectedQuantity =
        quantity;


    quantityInput.value =
        selectedQuantity;


    const total =
        selectedProduct.price *
        selectedQuantity;


    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(total);

    }

}


/* ==========================================
   MINUS BUTTON
========================================== */

const quantityMinus =
    document.getElementById(
        "quantityMinus"
    );


if (quantityMinus) {

    quantityMinus.addEventListener(
        "click",
        function() {

            let quantity =
                parseInt(
                    quantityInput.value,
                    10
                );


            if (
                isNaN(quantity) ||
                quantity <= 1
            ) {

                quantity = 1;

            } else {

                quantity--;

            }


            quantityInput.value =
                quantity;


            updateTotal();

        }
    );

}


/* ==========================================
   PLUS BUTTON
========================================== */

const quantityPlus =
    document.getElementById(
        "quantityPlus"
    );


if (quantityPlus) {

    quantityPlus.addEventListener(
        "click",
        function() {

            let quantity =
                parseInt(
                    quantityInput.value,
                    10
                );


            if (
                isNaN(quantity) ||
                quantity < 1
            ) {

                quantity = 1;

            }


            if (quantity < 99) {

                quantity++;

            }


            quantityInput.value =
                quantity;


            updateTotal();

        }
    );

}


/* ==========================================
   TYPED QUANTITY
========================================== */

if (quantityInput) {

    quantityInput.addEventListener(
        "input",
        function() {

            updateTotal();

        }
    );

}


/* ==========================================
   PAYMENT METHOD
========================================== */

if (paymentMethod) {

    paymentMethod.addEventListener(
        "change",
        function() {

            const referenceField =
                document.getElementById(
                    "referenceField"
                );


            if (!referenceField) {
                return;
            }


            if (
                paymentMethod.value ===
                "Cash"
            ) {

                referenceField.style.display =
                    "none";

            } else {

                referenceField.style.display =
                    "block";

            }

        }
    );

}


/* ==========================================
   CLOSE CHECKOUT
========================================== */

function closeCheckout() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


const closeCheckoutButton =
    document.getElementById(
        "closeCheckout"
    );


if (closeCheckoutButton) {

    closeCheckoutButton.addEventListener(
        "click",
        closeCheckout
    );

}


if (checkoutModal) {

    checkoutModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                checkoutModal
            ) {

                closeCheckout();

            }

        }
    );

}


/* ==========================================
   PLACE ORDER
========================================== */

const placeOrderButton =
    document.getElementById(
        "placeOrderButton"
    );


if (placeOrderButton) {

    placeOrderButton.addEventListener(
        "click",
        placeOrder
    );

}


function placeOrder() {

    if (!selectedProduct) {
        return;
    }


    if (
        !currentUser ||
        currentUser.role !==
        "customer"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    /* ======================================
       SHIPPING ADDRESS
    ====================================== */

    const address =
        currentUser.shippingAddress ||
        {};


    const addressParts = [

        address.houseNumber,

        address.street,

        address.barangay,

        address.city,

        address.province,

        address.postalCode

    ].filter(
        function(part) {

            return (
                part &&
                String(part).trim() !== ""
            );

        }
    );


    if (
        addressParts.length === 0
    ) {

        showCheckoutMessage(
            "Please add your shipping address first.",
            "#c0392b"
        );

        return;

    }


    /* ======================================
       PRODUCT OPTIONS
    ====================================== */

    if (
        selectedProduct.colors &&
        !selectedColor
    ) {

        showCheckoutMessage(
            "Please select a color.",
            "#c0392b"
        );

        return;

    }


    if (
        selectedProduct.sizes &&
        !selectedSize
    ) {

        showCheckoutMessage(
            "Please select a size.",
            "#c0392b"
        );

        return;

    }


    if (
        selectedProduct.scents &&
        !selectedScent
    ) {

        showCheckoutMessage(
            "Please select a scent.",
            "#c0392b"
        );

        return;

    }


    /* ======================================
       PAYMENT
    ====================================== */

    const selectedPayment =
        paymentMethod
            ? paymentMethod.value
            : "";


    if (!selectedPayment) {

        showCheckoutMessage(
            "Please select a payment method.",
            "#c0392b"
        );

        return;

    }


    const total =
        selectedProduct.price *
        selectedQuantity;


    const orderNumber =
        "LL-" +
        Date.now()
            .toString()
            .slice(-8);


    /* ======================================
       CREATE ORDER
    ====================================== */

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

        shippingAddress:
            addressParts.join(", "),

        paymentMethod:
            selectedPayment,

        date:
            new Date().toISOString(),

        status:
            "Pending"

    };


    /* ======================================
       ARRAY
    ====================================== */

    orders.push(
        order
    );


    showCheckoutMessage(
        "Order placed successfully!",
        "#16834a"
    );


    setTimeout(
        function() {

            closeCheckout();


            alert(
                "Order placed successfully!\n\n" +
                "Order #: " +
                orderNumber +
                "\n" +
                "Product: " +
                selectedProduct.name +
                "\n" +
                "Quantity: " +
                selectedQuantity +
                "\n" +
                "Total: " +
                formatPrice(total)
            );

        },
        500
    );

}


/* ==========================================
   CHECKOUT MESSAGE
========================================== */

function showCheckoutMessage(
    message,
    color
) {

    if (!checkoutMessage) {
        return;
    }


    checkoutMessage.textContent =
        message;


    checkoutMessage.style.color =
        color;

}


/* ==========================================
   MY ACCOUNT DROPDOWN
========================================== */

const accountToggle =
    document.getElementById(
        "accountToggle"
    );


const accountDropdown =
    document.getElementById(
        "accountDropdown"
    );


const productsLink =
    document.getElementById(
        "productsLink"
    );


if (accountToggle) {

    accountToggle.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            if (productsLink) {

                productsLink.classList.remove(
                    "active"
                );

            }


            accountToggle.classList.toggle(
                "active"
            );


            if (accountDropdown) {

                accountDropdown.classList.toggle(
                    "show"
                );

            }

        }
    );

}


/* ==========================================
   CLOSE ACCOUNT DROPDOWN
========================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            accountDropdown &&
            accountToggle &&
            !accountDropdown.contains(
                event.target
            ) &&
            !accountToggle.contains(
                event.target
            )
        ) {

            accountDropdown.classList.remove(
                "show"
            );


            accountToggle.classList.remove(
                "active"
            );

        }

    }
);


/* ==========================================
   LOGOUT
========================================== */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function() {

            /*
                No browser storage is used.

                Simply return to the
                login page.
            */

            window.location.href =
                "index.html";

        }
    );

}


/* ==========================================
   MOBILE SIDEBAR
========================================== */

const shopSidebar =
    document.getElementById(
        "shopSidebar"
    );


const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


const menuButton =
    document.getElementById(
        "menuButton"
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


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function() {

            openSidebar();

        }
    );

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
   INITIAL DISPLAY
========================================== */

displayProducts();
