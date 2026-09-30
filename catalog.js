/* ==========================================
   LOVE LUXE BY EA
   CUSTOMER CATALOG
   ARRAY-ONLY VERSION
========================================== */


/* ==========================================
   VARIABLES
========================================== */

let selectedCategory = "All";

let searchText = "";

let selectedProduct = null;

let selectedQuantity = 1;


/* ==========================================
   HTML ELEMENTS
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


const shopSidebar =
    document.getElementById(
        "shopSidebar"
    );


const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


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


const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );


const closeCheckout =
    document.getElementById(
        "closeCheckout"
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


const decreaseQuantity =
    document.getElementById(
        "decreaseQuantity"
    );


const increaseQuantity =
    document.getElementById(
        "increaseQuantity"
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


const placeOrderButton =
    document.getElementById(
        "placeOrderButton"
    );


const checkoutMessage =
    document.getElementById(
        "checkoutMessage"
    );


/* ==========================================
   DISPLAY CUSTOMER NAME
========================================== */

function displayCustomerName() {

    const customerName =
        document.getElementById(
            "customerName"
        );


    if (!customerName) {

        return;

    }


    /*
        Because this project is using
        arrays only, the current user
        may not survive a page change.

        Therefore the catalog uses
        "Customer" when no current
        user exists.
    */

    if (
        typeof currentUser !==
        "undefined" &&

        currentUser &&

        currentUser.fullName
    ) {

        customerName.textContent =
            currentUser.fullName;

        return;

    }


    customerName.textContent =
        "Customer";

}


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts() {


    if (!productGrid) {

        return;

    }


    productGrid.innerHTML =
        "";


    const filteredProducts =
        products.filter(

            function(product) {


                const categoryMatch =

                    selectedCategory ===
                    "All"

                    ||

                    product.category ===
                    selectedCategory;


                const searchValue =
                    searchText.toLowerCase();


                const searchMatch =

                    product.name
                        .toLowerCase()
                        .includes(
                            searchValue
                        )

                    ||

                    product.category
                        .toLowerCase()
                        .includes(
                            searchValue
                        );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }

        );


    /* ======================================
       NO PRODUCTS
    ======================================= */

    if (
        filteredProducts.length ===
        0
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


    /* ======================================
       CREATE PRODUCT CARDS
    ======================================= */

    filteredProducts.forEach(

        function(product) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            let imageHTML =
                "";


            if (product.image) {


                imageHTML = `

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
                    >

                `;

            }

            else {


                imageHTML = `

                    <div class="image-placeholder">

                        LOVE LUXE

                    </div>

                `;

            }


            card.innerHTML = `

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

                            ${formatPrice(
                                product.price
                            )}

                        </span>


                        <button
                            type="button"
                            class="view-button"
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
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return (

        "₱" +

        Number(price).toLocaleString(
            "en-PH",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )

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
   VIEW PRODUCT
========================================== */

function viewProduct(productName) {


    const product =
        products.find(

            function(item) {

                return (
                    item.name ===
                    productName
                );

            }

        );


    if (!product) {

        return;

    }


    selectedProduct =
        product;


    selectedQuantity =
        1;


    if (checkoutQuantity) {

        checkoutQuantity.value =
            "1";

    }


    /* ======================================
       BASIC DETAILS
    ======================================= */

    if (checkoutCategory) {

        checkoutCategory.textContent =
            product.category;

    }


    if (checkoutName) {

        checkoutName.textContent =
            product.name;

    }


    if (checkoutDescription) {

        checkoutDescription.textContent =
            product.description;

    }


    if (checkoutPrice) {

        checkoutPrice.textContent =
            formatPrice(
                product.price
            );

    }


    /* ======================================
       IMAGE
    ======================================= */

    displayProductImage(
        product
    );


    /* ======================================
       OPTIONS
    ======================================= */

    displayProductOptions(
        product
    );


    /* ======================================
       ADDRESS
    ======================================= */

    displayShippingAddress();


    /* ======================================
       TOTAL
    ======================================= */

    updateCheckoutTotal();


    /* ======================================
       CLEAR MESSAGE
    ======================================= */

    if (checkoutMessage) {

        checkoutMessage.textContent =
            "";

        checkoutMessage.className =
            "checkout-message";

    }


    /* ======================================
       SHOW MODAL
    ======================================= */

    if (checkoutModal) {

        checkoutModal.classList.add(
            "active"
        );

    }

}


/* ==========================================
   PRODUCT IMAGE
========================================== */

function displayProductImage(product) {


    if (!checkoutImage) {

        return;

    }


    checkoutImage.src =
        product.image;


    checkoutImage.alt =
        product.name;


    if (checkoutThumbnails) {

        checkoutThumbnails.innerHTML =
            "";


        /*
            At the moment each product
            uses its main product image.
            This prevents broken second
            image paths.
        */

        const thumbnail =
            document.createElement(
                "button"
            );


        thumbnail.type =
            "button";


        thumbnail.className =
            "gallery-thumbnail active";


        thumbnail.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        `;


        thumbnail.addEventListener(

            "click",

            function() {

                checkoutImage.src =
                    product.image;

            }

        );


        checkoutThumbnails.appendChild(
            thumbnail
        );

    }

}


/* ==========================================
   PRODUCT OPTIONS
========================================== */

function displayProductOptions(product) {


    if (!productOptions) {

        return;

    }


    productOptions.innerHTML =
        "";


    /* ======================================
       COLORS
    ======================================= */

    if (
        product.colors &&
        product.colors.length > 0
    ) {


        const colorGroup =
            document.createElement(
                "div"
            );


        colorGroup.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Color";


        colorGroup.appendChild(
            label
        );


        const select =
            document.createElement(
                "select"
            );


        select.id =
            "productColor";


        select.innerHTML = `

            <option value="">

                Select Color

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


        colorGroup.appendChild(
            select
        );


        productOptions.appendChild(
            colorGroup
        );

    }


    /* ======================================
       SIZES
    ======================================= */

    if (
        product.sizes &&
        product.sizes.length > 0
    ) {


        const sizeGroup =
            document.createElement(
                "div"
            );


        sizeGroup.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Size";


        sizeGroup.appendChild(
            label
        );


        const select =
            document.createElement(
                "select"
            );


        select.id =
            "productSize";


        select.innerHTML = `

            <option value="">

                Select Size

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


        sizeGroup.appendChild(
            select
        );


        productOptions.appendChild(
            sizeGroup
        );

    }


    /* ======================================
       SCENTS
    ======================================= */

    if (
        product.scents &&
        product.scents.length > 0
    ) {


        const scentGroup =
            document.createElement(
                "div"
            );


        scentGroup.className =
            "option-group";


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            "Scent";


        scentGroup.appendChild(
            label
        );


        const select =
            document.createElement(
                "select"
            );


        select.id =
            "productScent";


        select.innerHTML = `

            <option value="">

                Select Scent

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


        scentGroup.appendChild(
            select
        );


        productOptions.appendChild(
            scentGroup
        );

    }


    /*
        If there are no options,
        show a simple message.
    */

    if (
        productOptions.children.length ===
        0
    ) {


        const noOptions =
            document.createElement(
                "div"
            );


        noOptions.className =
            "no-product-options";


        noOptions.textContent =
            "No additional options required.";


        productOptions.appendChild(
            noOptions
        );

    }

}


/* ==========================================
   QUANTITY
========================================== */

if (decreaseQuantity) {


    decreaseQuantity.addEventListener(

        "click",

        function() {


            let quantity =
                Number(
                    checkoutQuantity.value
                );


            if (
                !Number.isFinite(
                    quantity
                )
            ) {

                quantity =
                    1;

            }


            quantity =
                Math.max(
                    1,
                    quantity - 1
                );


            selectedQuantity =
                quantity;


            checkoutQuantity.value =
                quantity;


            updateCheckoutTotal();

        }

    );

}


if (increaseQuantity) {


    increaseQuantity.addEventListener(

        "click",

        function() {


            let quantity =
                Number(
                    checkoutQuantity.value
                );


            if (
                !Number.isFinite(
                    quantity
                )
            ) {

                quantity =
                    1;

            }


            quantity =
                Math.min(
                    99,
                    quantity + 1
                );


            selectedQuantity =
                quantity;


            checkoutQuantity.value =
                quantity;


            updateCheckoutTotal();

        }

    );

}


/* ==========================================
   TYPED QUANTITY
========================================== */

if (checkoutQuantity) {


    checkoutQuantity.addEventListener(

        "input",

        function() {


            let quantity =
                Number(
                    checkoutQuantity.value
                );


            if (
                !Number.isFinite(
                    quantity
                ) ||
                quantity < 1
            ) {

                quantity =
                    1;

            }


            if (quantity > 99) {

                quantity =
                    99;

            }


            selectedQuantity =
                quantity;


            checkoutQuantity.value =
                quantity;


            updateCheckoutTotal();

        }

    );

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


    let quantity =
        Number(
            checkoutQuantity?.value
        );


    if (
        !Number.isFinite(quantity) ||
        quantity < 1
    ) {

        quantity =
            1;

    }


    const total =
        selectedProduct.price *
        quantity;


    checkoutTotal.textContent =
        formatPrice(
            total
        );

}


/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {


    if (!checkoutAddress) {

        return;

    }


    /*
        Arrays only means there is no
        persistent account storage.

        If a currentUser exists in this
        page context, use its address.
    */

    if (
        typeof currentUser !==
        "undefined" &&

        currentUser &&

        currentUser.shippingAddress
    ) {


        checkoutAddress.textContent =
            currentUser.shippingAddress;


        return;

    }


    checkoutAddress.textContent =
        "No shipping address saved.";

}


/* ==========================================
   CLOSE CHECKOUT
========================================== */

if (closeCheckout) {


    closeCheckout.addEventListener(

        "click",

        function() {

            closeCheckoutModal();

        }

    );

}


/* ==========================================
   CLOSE MODAL FUNCTION
========================================== */

function closeCheckoutModal() {


    if (checkoutModal) {

        checkoutModal.classList.remove(
            "active"
        );

    }


    selectedProduct =
        null;


    selectedQuantity =
        1;

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

                closeCheckoutModal();

            }

        }

    );

}


/* ==========================================
   PLACE ORDER
========================================== */

if (placeOrderButton) {


    placeOrderButton.addEventListener(

        "click",

        function() {


            if (!selectedProduct) {

                return;

            }


            /* ==================================
               GET QUANTITY
            ================================== */

            let quantity =
                Number(
                    checkoutQuantity.value
                );


            if (
                !Number.isFinite(quantity) ||
                quantity < 1
            ) {

                quantity =
                    1;

            }


            /* ==================================
               GET OPTIONS
            ================================== */

            const colorElement =
                document.getElementById(
                    "productColor"
                );


            const sizeElement =
                document.getElementById(
                    "productSize"
                );


            const scentElement =
                document.getElementById(
                    "productScent"
                );


            const color =
                colorElement
                    ? colorElement.value
                    : "";


            const size =
                sizeElement
                    ? sizeElement.value
                    : "";


            const scent =
                scentElement
                    ? scentElement.value
                    : "";


            /* ==================================
               REQUIRED OPTIONS
            ================================== */

            if (
                selectedProduct.colors &&
                selectedProduct.colors.length >
                0 &&
                !color
            ) {


                showCheckoutMessage(
                    "Please select a color.",
                    true
                );


                return;

            }


            if (
                selectedProduct.sizes &&
                selectedProduct.sizes.length >
                0 &&
                !size
            ) {


                showCheckoutMessage(
                    "Please select a size.",
                    true
                );


                return;

            }


            if (
                selectedProduct.scents &&
                selectedProduct.scents.length >
                0 &&
                !scent
            ) {


                showCheckoutMessage(
                    "Please select a scent.",
                    true
                );


                return;

            }


            /* ==================================
               ADDRESS
            ================================== */

            let shippingAddress =
                "";


            if (
                typeof currentUser !==
                "undefined" &&

                currentUser
            ) {

                shippingAddress =
                    currentUser.shippingAddress ||
                    "";

            }


            if (!shippingAddress) {


                showCheckoutMessage(

                    "Please add a shipping address in Settings first.",

                    true

                );


                return;

            }


            /* ==================================
               PAYMENT
            ================================== */

            const payment =
                paymentMethod
                    ? paymentMethod.value
                    : "Cash on Delivery";


            /* ==================================
               CREATE ORDER
            ================================== */

            const order = {

                id:
                    "ORD-" +
                    Date.now(),

                customerUsername:
                    currentUser
                        ? currentUser.username
                        : "customer",

                customerName:
                    currentUser
                        ? currentUser.fullName
                        : "Customer",

                product:
                    selectedProduct.name,

                category:
                    selectedProduct.category,

                price:
                    selectedProduct.price,

                quantity:
                    quantity,

                color:
                    color,

                size:
                    size,

                scent:
                    scent,

                shippingAddress:
                    shippingAddress,

                paymentMethod:
                    payment,

                total:
                    selectedProduct.price *
                    quantity,

                status:
                    "Pending",

                date:
                    new Date().toLocaleString(
                        "en-PH"
                    )

            };


            /*
                Add order to the array.

                This is temporary because
                arrays do not persist after
                the page is closed/refreshed.
            */

            if (
                typeof orders !==
                "undefined"
            ) {

                orders.push(
                    order
                );

            }


            /* ==================================
               SUCCESS MESSAGE
            ================================== */

            showCheckoutMessage(

                "Order placed successfully!",

                false

            );


            placeOrderButton.disabled =
                true;


            placeOrderButton.textContent =
                "ORDER PLACED";


            setTimeout(

                function() {


                    placeOrderButton.disabled =
                        false;


                    placeOrderButton.textContent =
                        "PLACE ORDER";


                    closeCheckoutModal();


                },

                1200

            );

        }

    );

}


/* ==========================================
   CHECKOUT MESSAGE
========================================== */

function showCheckoutMessage(
    message,
    isError
) {


    if (!checkoutMessage) {

        return;

    }


    checkoutMessage.textContent =
        message;


    checkoutMessage.className =
        "checkout-message";


    if (isError) {

        checkoutMessage.classList.add(
            "error"
        );

    }

    else {

        checkoutMessage.classList.add(
            "success"
        );

    }

}


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
   SIDEBAR OVERLAY
========================================== */

if (sidebarOverlay) {


    sidebarOverlay.addEventListener(

        "click",

        function() {

            closeSidebar();

        }

    );

}


/* ==========================================
   MY ACCOUNT DROPDOWN
========================================== */

if (accountToggle) {


    accountToggle.addEventListener(

        "click",

        function(event) {


            event.preventDefault();


            event.stopPropagation();


            const isOpen =
                accountDropdown.classList.contains(
                    "open"
                );


            if (isOpen) {


                accountDropdown.classList.remove(
                    "open"
                );


                accountToggle.classList.remove(
                    "active"
                );


                if (productsLink) {

                    productsLink.classList.add(
                        "active"
                    );

                }

            }

            else {


                accountDropdown.classList.add(
                    "open"
                );


                accountToggle.classList.add(
                    "active"
                );


                if (productsLink) {

                    productsLink.classList.remove(
                        "active"
                    );

                }

            }

        }

    );

}


/* ==========================================
   ACCOUNT DROPDOWN LINKS
========================================== */

if (accountDropdown) {


    const accountLinks =
        accountDropdown.querySelectorAll(
            "a"
        );


    accountLinks.forEach(

        function(link) {


            link.addEventListener(

                "click",

                function() {

                    closeSidebar();

                }

            );

        }

    );

}


/* ==========================================
   CLOSE ACCOUNT DROPDOWN
   WHEN CLICKING OUTSIDE
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
                    "open"
                );


                accountToggle.classList.remove(
                    "active"
                );


                if (productsLink) {

                    productsLink.classList.add(
                        "active"
                    );

                }

            }

        }

    }

);


/* ==========================================
   START CATALOG
========================================== */

displayCustomerName();

displayProducts();
