/* ==========================================
   LOVE LUXE PRODUCT CATALOG
   ARRAY ONLY VERSION
========================================== */


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
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const searchInput =
    document.getElementById("searchInput");

const noProducts =
    document.getElementById("noProducts");

const filterButtons =
    document.querySelectorAll(".filter-button");

const customerName =
    document.getElementById("customerName");


/*
    IMPORTANT:

    products and currentUser are already
    provided by data.js.

    DO NOT declare them again here.
*/


/* ==========================================
   CUSTOMER NAME
========================================== */

if (
    customerName &&
    typeof currentUser !== "undefined" &&
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

    if (!productGrid) {
        return;
    }


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


    /* PRODUCT COUNT */

    if (productCount) {

        productCount.textContent =
            "Showing " +
            filteredProducts.length +
            " product(s)";

    }


    /* NO PRODUCTS */

    if (
        filteredProducts.length === 0
    ) {

        productGrid.innerHTML = "";

        if (noProducts) {

            noProducts.style.display =
                "block";

        }

        return;

    }


    if (noProducts) {

        noProducts.style.display =
            "none";

    }


    /* CREATE PRODUCT CARDS */

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


    /* ==========================================
       VIEW BUTTONS
    ========================================== */

    document
        .querySelectorAll(".view-button")
        .forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function(event) {

                        event.preventDefault();

                        event.stopPropagation();


                        const productId =
                            Number(
                                button.dataset.productId
                            );


                        viewProduct(
                            productId
                        );

                    }
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
   CHECKOUT ELEMENTS
========================================== */

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );

const checkoutImage =
    document.getElementById(
        "checkoutImage"
    );

const checkoutThumbnails =
    document.getElementById(
        "checkoutThumbnails"
    );

const checkoutName =
    document.getElementById(
        "checkoutName"
    );

const checkoutCategory =
    document.getElementById(
        "checkoutCategory"
    );

const checkoutDescription =
    document.getElementById(
        "checkoutDescription"
    );

const checkoutPrice =
    document.getElementById(
        "checkoutPrice"
    );

const checkoutQuantity =
    document.getElementById(
        "checkoutQuantity"
    );

const checkoutTotal =
    document.getElementById(
        "checkoutTotal"
    );

const checkoutAddress =
    document.getElementById(
        "checkoutAddress"
    );

const checkoutMessage =
    document.getElementById(
        "checkoutMessage"
    );

const productOptions =
    document.getElementById(
        "productOptions"
    );


/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(productId) {

    selectedProduct =
        products.find(
            function(product) {

                return Number(product.id) ===
                    Number(productId);

            }
        );


    if (!selectedProduct) {

        console.log(
            "Product not found:",
            productId
        );

        return;

    }


    selectedQuantity = 1;

    selectedColor = "";

    selectedSize = "";

    selectedScent = "";


    /* PRODUCT IMAGE */

    if (checkoutImage) {

        checkoutImage.src =
            selectedProduct.image;

        checkoutImage.alt =
            selectedProduct.name;

    }


    /* PRODUCT NAME */

    if (checkoutName) {

        checkoutName.textContent =
            selectedProduct.name;

    }


    /* CATEGORY */

    if (checkoutCategory) {

        checkoutCategory.textContent =
            selectedProduct.category;

    }


    /* DESCRIPTION */

    if (checkoutDescription) {

        checkoutDescription.textContent =
            selectedProduct.description;

    }


    /* PRICE */

    if (checkoutPrice) {

        checkoutPrice.textContent =
            formatPrice(
                selectedProduct.price
            );

    }


    /* QUANTITY */

    if (checkoutQuantity) {

        checkoutQuantity.value = 1;

    }


    /* IMAGES */

    displayProductImages(
        selectedProduct
    );


    /* OPTIONS */

    displayProductOptions(
        selectedProduct
    );


    /* TOTAL */

    updateCheckoutQuantity();


    /* SHIPPING */

    displayShippingAddress();


    /* MESSAGE */

    if (checkoutMessage) {

        checkoutMessage.textContent = "";

    }


    /* OPEN MODAL */

    if (checkoutModal) {

        checkoutModal.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }

}


/* ==========================================
   PRODUCT IMAGES
========================================== */

function displayProductImages(
    product
) {

    if (!checkoutThumbnails) {
        return;
    }


    checkoutThumbnails.innerHTML = "";


    const images =
        product.images &&
        product.images.length > 0
            ? product.images
            : [product.image];


    images.forEach(
        function(image, index) {

            const thumbnail =
                document.createElement(
                    "img"
                );


            thumbnail.src =
                image;

            thumbnail.alt =
                product.name;

            thumbnail.className =
                "checkout-thumbnail";


            if (index === 0) {

                thumbnail.classList.add(
                    "active"
                );

            }


            thumbnail.onerror =
                function() {

                    this.style.display =
                        "none";

                };


            thumbnail.addEventListener(
                "click",
                function() {

                    if (checkoutImage) {

                        checkoutImage.src =
                            image;

                    }


                    document
                        .querySelectorAll(
                            ".checkout-thumbnail"
                        )
                        .forEach(
                            function(item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                    thumbnail.classList.add(
                        "active"
                    );

                }
            );


            checkoutThumbnails.appendChild(
                thumbnail
            );

        }
    );

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


    productOptions.innerHTML = "";


    /* ======================================
       COLORS
    ====================================== */

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


        const defaultOption =
            document.createElement(
                "option"
            );

        defaultOption.value = "";

        defaultOption.textContent =
            "Select color";

        select.appendChild(
            defaultOption
        );


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


    /* ======================================
       SIZES
    ====================================== */

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


        const defaultOption =
            document.createElement(
                "option"
            );

        defaultOption.value = "";

        defaultOption.textContent =
            "Select size";

        select.appendChild(
            defaultOption
        );


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


    /* ======================================
       SCENTS
    ====================================== */

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


        const defaultOption =
            document.createElement(
                "option"
            );

        defaultOption.value = "";

        defaultOption.textContent =
            "Select scent";

        select.appendChild(
            defaultOption
        );


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

function updateCheckoutQuantity() {

    if (!checkoutQuantity) {
        return;
    }


    if (
        selectedQuantity < 1
    ) {

        selectedQuantity = 1;

    }


    if (
        selectedQuantity > 99
    ) {

        selectedQuantity = 99;

    }


    checkoutQuantity.value =
        selectedQuantity;


    if (
        checkoutTotal &&
        selectedProduct
    ) {

        const total =
            selectedProduct.price *
            selectedQuantity;


        checkoutTotal.textContent =
            formatPrice(total);

    }

}


/* ==========================================
   MINUS BUTTON
========================================== */

const decreaseQuantity =
    document.getElementById(
        "decreaseQuantity"
    );


if (decreaseQuantity) {

    decreaseQuantity.addEventListener(
        "click",
        function() {

            if (
                selectedQuantity > 1
            ) {

                selectedQuantity--;

                updateCheckoutQuantity();

            }

        }
    );

}


/* ==========================================
   PLUS BUTTON
========================================== */

const increaseQuantity =
    document.getElementById(
        "increaseQuantity"
    );


if (increaseQuantity) {

    increaseQuantity.addEventListener(
        "click",
        function() {

            if (
                selectedQuantity < 99
            ) {

                selectedQuantity++;

                updateCheckoutQuantity();

            }

        }
    );

}


/* ==========================================
   TYPABLE QUANTITY
========================================== */

if (checkoutQuantity) {

    checkoutQuantity.addEventListener(
        "input",
        function() {

            let quantity =
                parseInt(
                    checkoutQuantity.value,
                    10
                );


            if (
                isNaN(quantity) ||
                quantity < 1
            ) {

                quantity = 1;

            }


            if (
                quantity > 99
            ) {

                quantity = 99;

            }


            selectedQuantity =
                quantity;


            updateCheckoutQuantity();

        }
    );

}


/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {

    if (!checkoutAddress) {
        return;
    }


    if (
        typeof currentUser ===
        "undefined" ||
        !currentUser
    ) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    const address =
        currentUser.shippingAddress;


    if (!address) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    /*
        Supports an address object.
    */

    if (
        typeof address === "object"
    ) {

        const parts = [

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
            parts.length > 0
        ) {

            checkoutAddress.textContent =
                parts.join(", ");

            return;

        }

    }


    /*
        Supports a simple text address.
    */

    if (
        typeof address === "string" &&
        address.trim() !== ""
    ) {

        checkoutAddress.textContent =
            address;

        return;

    }


    checkoutAddress.textContent =
        "No shipping address saved.";

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


    document.body.style.overflow = "";

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
   ARRAY ONLY
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
        typeof currentUser ===
        "undefined" ||
        !currentUser
    ) {

        return;

    }


    /* COLOR */

    if (
        selectedProduct.colors &&
        selectedProduct.colors.length > 0 &&
        !selectedColor
    ) {

        checkoutMessage.textContent =
            "Please select a color.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }


    /* SIZE */

    if (
        selectedProduct.sizes &&
        selectedProduct.sizes.length > 0 &&
        !selectedSize
    ) {

        checkoutMessage.textContent =
            "Please select a size.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }


    /* SCENT */

    if (
        selectedProduct.scents &&
        selectedProduct.scents.length > 0 &&
        !selectedScent
    ) {

        checkoutMessage.textContent =
            "Please select a scent.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }


    const paymentMethod =
        document.getElementById(
            "paymentMethod"
        )?.value ||
        "Cash on Delivery";


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

        date:
            new Date().toISOString(),

        status:
            "Pending"

    };


    /*
        ARRAY ONLY

        orders is already declared
        in data.js.

        No localStorage.
        No database.
    */

    if (
        typeof orders !== "undefined"
    ) {

        orders.push(order);

    }


    checkoutMessage.textContent =
        "Order placed successfully!";

    checkoutMessage.style.color =
        "#16834a";


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


if (
    accountToggle &&
    accountDropdown
) {

    accountToggle.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            /*
                Remove Products highlight.
            */

            if (productsLink) {

                productsLink.classList.remove(
                    "active"
                );

            }


            /*
                Toggle My Account highlight.
            */

            accountToggle.classList.toggle(
                "active"
            );


            /*
                Open / close dropdown.
            */

            accountDropdown.classList.toggle(
                "show"
            );

        }
    );

}


/* ==========================================
   CLOSE ACCOUNT DROPDOWN WHEN
   CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            accountToggle &&
            accountDropdown &&
            !accountToggle.contains(event.target) &&
            !accountDropdown.contains(event.target)
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
        closeSidebar
    );

}


/* ==========================================
   INITIAL DISPLAY
========================================== */

displayProducts();
