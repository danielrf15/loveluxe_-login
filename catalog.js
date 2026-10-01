/* ==========================================
   LOVE LUXE CUSTOMER SPA
========================================== */


/* ==========================================
   CUSTOMER DATA
========================================== */

const loveLuxeData =
    window.LoveLuxeData;

const customers =
    loveLuxeData.customers;

const orders =
    loveLuxeData.orders;


/*
    Arrays only.

    NO localStorage
    NO sessionStorage
    NO cookies
    NO database
*/


let currentUser =
    customers[0];



/* ==========================================
   PRODUCTS
========================================== */

const products = [

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

let selectedCategory =
    "All";

let selectedProduct =
    null;

let selectedQuantity =
    1;

let selectedColor =
    "";

let selectedSize =
    "";

let selectedScent =
    "";



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

const pageTitle =
    document.getElementById(
        "pageTitle"
    );



/* ==========================================
   CUSTOMER INFORMATION
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
   PRODUCT DISPLAY
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


    productCount.textContent =
        "Showing " +
        filteredProducts.length +
        " product(s)";


    if (
        filteredProducts.length === 0
    ) {

        productGrid.innerHTML =
            "";

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

searchInput?.addEventListener(
    "input",
    displayProducts
);



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

                return product.id ===
                    productId;

            }
        );


    if (!selectedProduct) {
        return;
    }


    selectedQuantity =
        1;

    selectedColor =
        "";

    selectedSize =
        "";

    selectedScent =
        "";


    checkoutImage.src =
        selectedProduct.image;

    checkoutImage.alt =
        selectedProduct.name;


    checkoutName.textContent =
        selectedProduct.name;


    checkoutCategory.textContent =
        selectedProduct.category;


    checkoutDescription.textContent =
        selectedProduct.description;


    checkoutPrice.textContent =
        formatPrice(
            selectedProduct.price
        );


    checkoutQuantity.value =
        1;


    displayProductImages(
        selectedProduct
    );


    displayProductOptions(
        selectedProduct
    );


    updateCheckoutQuantity();


    displayShippingAddress();


    checkoutMessage.textContent =
        "";

    checkoutMessage.style.color =
        "";


    checkoutModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* ==========================================
   PRODUCT IMAGES
========================================== */

function displayProductImages(
    product
) {

    checkoutThumbnails.innerHTML =
        "";


    const images =
        product.images ||
        [product.image];


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

                    checkoutImage.src =
                        image;


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

function updateCheckoutQuantity() {

    checkoutQuantity.value =
        selectedQuantity;


    if (!selectedProduct) {
        return;
    }


    const total =
        selectedProduct.price *
        selectedQuantity;


    checkoutTotal.textContent =
        formatPrice(total);

}



/* MINUS */

document
    .getElementById(
        "decreaseQuantity"
    )
    ?.addEventListener(
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



/* PLUS */

document
    .getElementById(
        "increaseQuantity"
    )
    ?.addEventListener(
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



/* TYPED QUANTITY */

checkoutQuantity?.addEventListener(
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



/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {

    if (!checkoutAddress) {
        return;
    }


    const user =
        currentUser;


    if (
        !user ||
        !user.shippingAddress
    ) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    const address =
        user.shippingAddress;


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
        parts.length === 0
    ) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    checkoutAddress.textContent =
        parts.join(", ");

}



/* ==========================================
   CLOSE CHECKOUT
========================================== */

function closeCheckout() {

    checkoutModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


document
    .getElementById(
        "closeCheckout"
    )
    ?.addEventListener(
        "click",
        closeCheckout
    );


checkoutModal?.addEventListener(
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



/* ==========================================
   PLACE ORDER
========================================== */

document
    .getElementById(
        "placeOrderButton"
    )
    ?.addEventListener(
        "click",
        placeOrder
    );


function placeOrder() {

    if (!selectedProduct) {
        return;
    }


    const user =
        currentUser;


    if (
        !user ||
        user.role !== "customer"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    const address =
        user.shippingAddress;


    const addressParts = [

        address?.houseNumber,
        address?.street,
        address?.barangay,
        address?.city,
        address?.province,
        address?.postalCode

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

        checkoutMessage.textContent =
            "Please add your shipping address first.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }



    /* COLOR CHECK */

    if (
        selectedProduct.colors &&
        !selectedColor
    ) {

        checkoutMessage.textContent =
            "Please select a color.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }



    /* SIZE CHECK */

    if (
        selectedProduct.sizes &&
        !selectedSize
    ) {

        checkoutMessage.textContent =
            "Please select a size.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }



    /* SCENT CHECK */

    if (
        selectedProduct.scents &&
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
        ).value;


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
            user.username,

        customerName:
            user.fullName,

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
            paymentMethod,

        date:
            new Date().toISOString(),

        status:
            "Pending"

    };



    /*
        THIS IS THE IMPORTANT PART.

        The order is added to the SAME
        orders array that My Orders uses.
    */

    orders.push(
        order
    );



    checkoutMessage.textContent =
        "Order placed successfully!";

    checkoutMessage.style.color =
        "#16834a";



    setTimeout(
        function() {

            closeCheckout();

            showView(
                "orders"
            );

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
   SPA NAVIGATION
========================================== */

const spaViews = {

    products:
        document.getElementById(
            "productsView"
        ),

    personal:
        document.getElementById(
            "personalView"
        ),

    orders:
        document.getElementById(
            "ordersView"
        ),

    settings:
        document.getElementById(
            "settingsView"
        )

};



function showView(
    viewName
) {

    if (
        !spaViews[viewName]
    ) {

        viewName =
            "products";

    }


    Object.keys(
        spaViews
    ).forEach(
        function(key) {

            spaViews[key]
                .classList.remove(
                    "active"
                );

        }
    );


    spaViews[viewName]
        .classList.add(
            "active"
        );


    updateNavigation(
        viewName
    );


    if (
        viewName === "orders"
    ) {

        renderOrders();

    }


    if (
        viewName === "personal"
    ) {

        renderPersonalInformation();

    }


    if (
        viewName === "settings"
    ) {

        renderSettings();

    }


    if (
        viewName === "products"
    ) {

        pageTitle.textContent =
            "Product Management";

    } else {

        pageTitle.textContent =
            "My Account";

    }


    closeSidebar();


    window.scrollTo(
        0,
        0
    );

}



function updateNavigation(
    viewName
) {

    document
        .querySelectorAll(
            "[data-view]"
        )
        .forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );

            }
        );


    const selectedLink =
        document.querySelector(
            `[data-view="${viewName}"]`
        );


    selectedLink?.classList.add(
        "active"
    );



    if (
        viewName === "products"
    ) {

        document
            .getElementById(
                "productsLink"
            )
            ?.classList.add(
                "active"
            );

    }


    if (
        viewName === "personal" ||
        viewName === "orders" ||
        viewName === "settings"
    ) {

        document
            .getElementById(
                "accountToggle"
            )
            ?.classList.add(
                "active"
            );

    }

}



/* ==========================================
   HASH NAVIGATION
========================================== */

function loadViewFromHash() {

    let view =
        window.location.hash
            .replace(
                "#",
                ""
            );


    if (
        !spaViews[view]
    ) {

        view =
            "products";

    }


    showView(
        view
    );

}


window.addEventListener(
    "hashchange",
    loadViewFromHash
);



/* ==========================================
   ACCOUNT DROPDOWN
========================================== */

const accountToggle =
    document.getElementById(
        "accountToggle"
    );

const accountDropdown =
    document.getElementById(
        "accountDropdown"
    );


accountToggle?.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        event.stopPropagation();


        accountDropdown
            ?.classList.toggle(
                "show"
            );


        accountToggle
            ?.classList.toggle(
                "active"
            );

    }
);



/* ==========================================
   ACCOUNT LINKS
========================================== */

document
    .querySelectorAll(
        ".account-dropdown [data-view]"
    )
    .forEach(
        function(link) {

            link.addEventListener(
                "click",
                function() {

                    accountDropdown
                        ?.classList.remove(
                            "show"
                        );

                }
            );

        }
    );



/* ==========================================
   PERSONAL INFORMATION
========================================== */

function renderPersonalInformation() {

    if (!currentUser) {
        return;
    }


    document
        .getElementById(
            "personalFullName"
        )
        .textContent =
            currentUser.fullName ||
            "Customer";


    document
        .getElementById(
            "personalUsername"
        )
        .textContent =
            currentUser.username ||
            "-";


    document
        .getElementById(
            "personalEmail"
        )
        .textContent =
            currentUser.email ||
            "-";


    document
        .getElementById(
            "personalRole"
        )
        .textContent =
            currentUser.role ||
            "customer";

}



/* ==========================================
   MY ORDERS
========================================== */

function renderOrders() {

    const ordersContainer =
        document.getElementById(
            "ordersContainer"
        );


    if (!ordersContainer) {
        return;
    }


    /*
        Only show orders belonging
        to the current customer.
    */

    const customerOrders =
        orders.filter(
            function(order) {

                return (
                    order.customerUsername ===
                    currentUser.username
                );

            }
        );


    if (
        customerOrders.length === 0
    ) {

        ordersContainer.innerHTML = `

            <div class="no-orders">

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your placed orders will appear here.
                </p>

            </div>

        `;

        return;

    }



    ordersContainer.innerHTML =
        customerOrders
            .slice()
            .reverse()
            .map(
                function(order) {

                    const orderDate =
                        new Date(
                            order.date
                        );


                    const formattedDate =
                        orderDate.toLocaleString(
                            "en-PH",
                            {
                                dateStyle:
                                    "medium",

                                timeStyle:
                                    "short"
                            }
                        );


                    return `

                        <div class="order-card">

                            <div class="order-top">

                                <div>

                                    <div class="order-number">
                                        ${order.orderNumber}
                                    </div>

                                    <small>
                                        ${formattedDate}
                                    </small>

                                </div>


                                <span class="order-status">
                                    ${order.status}
                                </span>

                            </div>


                            <div class="order-details">


                                <div class="order-detail">

                                    <span>
                                        Product
                                    </span>

                                    <strong>
                                        ${order.productName}
                                    </strong>

                                </div>


                                <div class="order-detail">

                                    <span>
                                        Category
                                    </span>

                                    <strong>
                                        ${order.category}
                                    </strong>

                                </div>


                                <div class="order-detail">

                                    <span>
                                        Quantity
                                    </span>

                                    <strong>
                                        ${order.quantity}
                                    </strong>

                                </div>


                                <div class="order-detail">

                                    <span>
                                        Payment Method
                                    </span>

                                    <strong>
                                        ${order.paymentMethod}
                                    </strong>

                                </div>


                                ${
                                    order.color
                                    ?
                                    `
                                        <div class="order-detail">

                                            <span>
                                                Color
                                            </span>

                                            <strong>
                                                ${order.color}
                                            </strong>

                                        </div>
                                    `
                                    :
                                    ""
                                }


                                ${
                                    order.size
                                    ?
                                    `
                                        <div class="order-detail">

                                            <span>
                                                Size
                                            </span>

                                            <strong>
                                                ${order.size}
                                            </strong>

                                        </div>
                                    `
                                    :
                                    ""
                                }


                                ${
                                    order.scent
                                    ?
                                    `
                                        <div class="order-detail">

                                            <span>
                                                Scent
                                            </span>

                                            <strong>
                                                ${order.scent}
                                            </strong>

                                        </div>
                                    `
                                    :
                                    ""
                                }


                                <div class="order-detail">

                                    <span>
                                        Shipping Address
                                    </span>

                                    <strong>
                                        ${order.shippingAddress}
                                    </strong>

                                </div>


                            </div>


                            <div class="order-total">

                                <span>
                                    Order Total
                                </span>

                                <strong>
                                    ${formatPrice(order.total)}
                                </strong>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}



/* ==========================================
   SETTINGS
========================================== */

const viewAddressButton =
    document.getElementById(
        "viewAddressButton"
    );

const passwordButton =
    document.getElementById(
        "passwordButton"
    );

const settingsMessage =
    document.getElementById(
        "settingsMessage"
    );



viewAddressButton?.addEventListener(
    "click",
    function() {

        if (
            !currentUser ||
            !currentUser.shippingAddress
        ) {

            settingsMessage.textContent =
                "No shipping address has been added yet.";

        } else {

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
                function(part) {

                    return (
                        part &&
                        String(part).trim() !== ""
                    );

                }
            );


            settingsMessage.textContent =
                parts.length > 0
                    ? parts.join(", ")
                    : "No shipping address has been added.";

        }


        settingsMessage.style.display =
            "block";

    }
);



passwordButton?.addEventListener(
    "click",
    function() {

        settingsMessage.textContent =
            "Password management can be connected to your account module later.";

        settingsMessage.style.display =
            "block";

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

    shopSidebar?.classList.add(
        "open"
    );

    sidebarOverlay?.classList.add(
        "active"
    );

}


function closeSidebar() {

    shopSidebar?.classList.remove(
        "open"
    );

    sidebarOverlay?.classList.remove(
        "active"
    );

}


sidebarOverlay?.addEventListener(
    "click",
    closeSidebar
);



/* ==========================================
   INITIAL DISPLAY
========================================== */

displayProducts();


loadViewFromHash();
