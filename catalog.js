/* ==========================================
   LOVE LUXE BY EA
   CUSTOMER CATALOG
   ARRAY ONLY
========================================== */


/* ==========================================
   CATALOG VARIABLES
========================================== */

let selectedCategory = "All";

let selectedProduct = null;

let selectedQuantity = 1;

let selectedColor = "";

let selectedSize = "";

let selectedScent = "";


/* ==========================================
   PAGE ELEMENTS
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


    /* ======================================
       PRODUCT COUNT
    ====================================== */

    if (productCount) {

        productCount.textContent =
            "Showing " +
            filteredProducts.length +
            " product(s)";

    }


    /* ======================================
       NO PRODUCTS
    ====================================== */

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


    /* ======================================
       PRODUCT CARDS
    ====================================== */

    productGrid.innerHTML = "";


    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.innerHTML = `

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


                    <h3 class="product-name">

                        ${product.name}

                    </h3>


                    <p class="product-description">

                        ${product.description}

                    </p>


                    <div class="product-bottom">

                        <span class="product-price">

                            ${formatPrice(
                                product.price
                            )}

                        </span>


                        <button
                            type="button"
                            class="view-button"
                            data-product-id="${product.id}"
                        >

                            VIEW

                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(
                card
            );


            /* ==================================
               VIEW BUTTON
            ================================== */

            const viewButton =
                card.querySelector(
                    ".view-button"
                );


            if (viewButton) {

                viewButton.addEventListener(
                    "click",
                    function(event) {

                        event.preventDefault();

                        event.stopPropagation();


                        const productId =
                            Number(
                                viewButton.getAttribute(
                                    "data-product-id"
                                )
                            );


                        viewProduct(
                            productId
                        );

                    }
                );

            }

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
            function(event) {

                event.preventDefault();


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


const checkoutCategory =
    document.getElementById(
        "checkoutCategory"
    );


const checkoutName =
    document.getElementById(
        "checkoutName"
    );


const checkoutDescription =
    document.getElementById(
        "checkoutDescription"
    );


const checkoutPrice =
    document.getElementById(
        "checkoutPrice"
    );


const productOptions =
    document.getElementById(
        "productOptions"
    );


const checkoutQuantity =
    document.getElementById(
        "checkoutQuantity"
    );


const checkoutAddress =
    document.getElementById(
        "checkoutAddress"
    );


const paymentMethod =
    document.getElementById(
        "paymentMethod"
    );


const checkoutTotal =
    document.getElementById(
        "checkoutTotal"
    );


const checkoutMessage =
    document.getElementById(
        "checkoutMessage"
    );


const placeOrderButton =
    document.getElementById(
        "placeOrderButton"
    );


const closeCheckoutButton =
    document.getElementById(
        "closeCheckout"
    );


const decreaseQuantity =
    document.getElementById(
        "decreaseQuantity"
    );


const increaseQuantity =
    document.getElementById(
        "increaseQuantity"
    );


/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(productId) {

    /* Find product from array */

    selectedProduct =
        products.find(
            function(product) {

                return Number(product.id) ===
                    Number(productId);

            }
        );


    /* Stop if product doesn't exist */

    if (!selectedProduct) {

        console.log(
            "Product not found:",
            productId
        );

        return;

    }


    /* Reset selections */

    selectedQuantity = 1;

    selectedColor = "";

    selectedSize = "";

    selectedScent = "";


    /* ======================================
       PRODUCT IMAGE
    ====================================== */

    if (checkoutImage) {

        checkoutImage.src =
            selectedProduct.image;

        checkoutImage.alt =
            selectedProduct.name;

    }


    /* ======================================
       PRODUCT CATEGORY
    ====================================== */

    if (checkoutCategory) {

        checkoutCategory.textContent =
            selectedProduct.category;

    }


    /* ======================================
       PRODUCT NAME
    ====================================== */

    if (checkoutName) {

        checkoutName.textContent =
            selectedProduct.name;

    }


    /* ======================================
       PRODUCT DESCRIPTION
    ====================================== */

    if (checkoutDescription) {

        checkoutDescription.textContent =
            selectedProduct.description;

    }


    /* ======================================
       PRODUCT PRICE
    ====================================== */

    if (checkoutPrice) {

        checkoutPrice.textContent =
            formatPrice(
                selectedProduct.price
            );

    }


    /* ======================================
       QUANTITY
    ====================================== */

    if (checkoutQuantity) {

        checkoutQuantity.value = 1;

    }


    /* ======================================
       IMAGES
    ====================================== */

    displayProductImages(
        selectedProduct
    );


    /* ======================================
       OPTIONS
    ====================================== */

    displayProductOptions(
        selectedProduct
    );


    /* ======================================
       ADDRESS
    ====================================== */

    displayShippingAddress();


    /* ======================================
       TOTAL
    ====================================== */

    updateCheckoutTotal();


    /* ======================================
       CLEAR MESSAGE
    ====================================== */

    if (checkoutMessage) {

        checkoutMessage.textContent = "";

    }


    /* ======================================
       OPEN MODAL
    ====================================== */

    if (checkoutModal) {

        checkoutModal.classList.add(
            "show"
        );


        checkoutModal.style.display =
            "flex";


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


    let images = [];


    if (
        product.images &&
        product.images.length > 0
    ) {

        images =
            product.images;

    }

    else {

        images = [
            product.image
        ];

    }


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
       COLOR
    ====================================== */

    if (
        product.colors &&
        product.colors.length > 0
    ) {

        const group =
            document.createElement(
                "div"
            );


        group.className =
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


        defaultOption.value =
            "";


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


        group.appendChild(
            label
        );


        group.appendChild(
            select
        );


        productOptions.appendChild(
            group
        );

    }


    /* ======================================
       SIZE
    ====================================== */

    if (
        product.sizes &&
        product.sizes.length > 0
    ) {

        const group =
            document.createElement(
                "div"
            );


        group.className =
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


        defaultOption.value =
            "";


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


        group.appendChild(
            label
        );


        group.appendChild(
            select
        );


        productOptions.appendChild(
            group
        );

    }


    /* ======================================
       SCENT
    ====================================== */

    if (
        product.scents &&
        product.scents.length > 0
    ) {

        const group =
            document.createElement(
                "div"
            );


        group.className =
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


        defaultOption.value =
            "";


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


        group.appendChild(
            label
        );


        group.appendChild(
            select
        );


        productOptions.appendChild(
            group
        );

    }

}


/* ==========================================
   UPDATE TOTAL
========================================== */

function updateCheckoutTotal() {

    if (
        !selectedProduct ||
        !checkoutTotal
    ) {

        return;

    }


    const total =
        selectedProduct.price *
        selectedQuantity;


    checkoutTotal.textContent =
        formatPrice(total);

}


/* ==========================================
   DECREASE QUANTITY
========================================== */

if (decreaseQuantity) {

    decreaseQuantity.addEventListener(
        "click",
        function() {

            if (
                selectedQuantity > 1
            ) {

                selectedQuantity--;

            }


            if (checkoutQuantity) {

                checkoutQuantity.value =
                    selectedQuantity;

            }


            updateCheckoutTotal();

        }
    );

}


/* ==========================================
   INCREASE QUANTITY
========================================== */

if (increaseQuantity) {

    increaseQuantity.addEventListener(
        "click",
        function() {

            if (
                selectedQuantity < 99
            ) {

                selectedQuantity++;

            }


            if (checkoutQuantity) {

                checkoutQuantity.value =
                    selectedQuantity;

            }


            updateCheckoutTotal();

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

            let value =
                parseInt(
                    checkoutQuantity.value,
                    10
                );


            if (
                isNaN(value) ||
                value < 1
            ) {

                value = 1;

            }


            if (value > 99) {

                value = 99;

            }


            selectedQuantity =
                value;


            checkoutQuantity.value =
                selectedQuantity;


            updateCheckoutTotal();

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


    if (
        !currentUser.shippingAddress
    ) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    if (
        typeof currentUser.shippingAddress ===
        "string"
    ) {

        checkoutAddress.textContent =
            currentUser.shippingAddress;

        return;

    }


    if (
        typeof currentUser.shippingAddress ===
        "object"
    ) {

        const address =
            currentUser.shippingAddress;


        const parts = [

            address.houseNumber,

            address.street,

            address.barangay,

            address.city,

            address.province,

            address.postalCode

        ];


        const finalAddress =
            parts
                .filter(
                    function(item) {

                        return (
                            item &&
                            String(item).trim() !== ""
                        );

                    }
                )
                .join(", ");


        checkoutAddress.textContent =
            finalAddress ||
            "No shipping address saved.";

    }

}


/* ==========================================
   CLOSE PRODUCT MODAL
========================================== */

function closeCheckout() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "show"
        );


        checkoutModal.style.display =
            "none";

    }


    document.body.style.overflow =
        "";

}


/* ==========================================
   CLOSE BUTTON
========================================== */

if (closeCheckoutButton) {

    closeCheckoutButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            closeCheckout();

        }
    );

}


/* ==========================================
   CLICK OUTSIDE MODAL
========================================== */

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
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeCheckout();

        }

    }
);


/* ==========================================
   PLACE ORDER
========================================== */

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


    /* ======================================
       COLOR CHECK
    ====================================== */

    if (
        selectedProduct.colors &&
        selectedProduct.colors.length > 0 &&
        !selectedColor
    ) {

        showCheckoutMessage(
            "Please select a color.",
            "red"
        );

        return;

    }


    /* ======================================
       SIZE CHECK
    ====================================== */

    if (
        selectedProduct.sizes &&
        selectedProduct.sizes.length > 0 &&
        !selectedSize
    ) {

        showCheckoutMessage(
            "Please select a size.",
            "red"
        );

        return;

    }


    /* ======================================
       SCENT CHECK
    ====================================== */

    if (
        selectedProduct.scents &&
        selectedProduct.scents.length > 0 &&
        !selectedScent
    ) {

        showCheckoutMessage(
            "Please select a scent.",
            "red"
        );

        return;

    }


    /* ======================================
       PAYMENT
    ====================================== */

    const selectedPayment =
        paymentMethod
            ? paymentMethod.value
            : "Cash on Delivery";


    /* ======================================
       TOTAL
    ====================================== */

    const total =
        selectedProduct.price *
        selectedQuantity;


    /* ======================================
       CUSTOMER
    ====================================== */

    let username =
        "guest";


    let fullName =
        "Guest Customer";


    if (
        typeof currentUser !==
        "undefined" &&
        currentUser
    ) {

        username =
            currentUser.username ||
            "guest";


        fullName =
            currentUser.fullName ||
            "Guest Customer";

    }


    /* ======================================
       ORDER
    ====================================== */

    const order = {

        orderNumber:
            "LL-" +
            Date.now()
                .toString()
                .slice(-8),

        customerUsername:
            username,

        customerName:
            fullName,

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
            selectedPayment,

        date:
            new Date().toISOString(),

        status:
            "Pending"

    };


    /* ======================================
       ADD TO ARRAY
    ====================================== */

    orders.push(
        order
    );


    /* ======================================
       SUCCESS MESSAGE
    ====================================== */

    showCheckoutMessage(
        "Order placed successfully!",
        "green"
    );


    setTimeout(
        function() {

            closeCheckout();

        },
        700
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


if (
    accountToggle &&
    accountDropdown
) {

    accountToggle.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            accountDropdown.classList.toggle(
                "show"
            );


            accountToggle.classList.toggle(
                "active"
            );


            if (productsLink) {

                productsLink.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* ==========================================
   CLOSE DROPDOWN OUTSIDE
========================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            accountToggle &&
            accountDropdown
        ) {

            if (
                !accountToggle.contains(
                    event.target
                ) &&
                !accountDropdown.contains(
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


/* ==========================================
   OPEN SIDEBAR
========================================== */

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


/* ==========================================
   CLOSE SIDEBAR
========================================== */

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


/* ==========================================
   OVERLAY CLICK
========================================== */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );

}


/* ==========================================
   INITIALIZE
========================================== */

displayProducts();
