/* ==========================================
   LOVE LUXE PRODUCT CATALOG
========================================== */


/* ==========================================
   CUSTOMER ACCESS
========================================== */

const currentUser =
    JSON.parse(
        localStorage.getItem(
            "loveLuxeCurrentUser"
        )
    );


if (
    !currentUser ||
    currentUser.role !== "customer"
) {

    window.location.href =
        "index.html";

}


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* ==========================================
       CLOTHING
    ========================================== */

    {
        id: 1,
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg",
        description:
            "A simple and stylish skirt that is easy to pair with different outfits.",

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
        ]
    },


    {
        id: 2,
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        image: "images/nov-mardi-tshirt.jpg",
        description:
            "A comfortable everyday t-shirt with a simple and casual style.",

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
        ]
    },


    {
        id: 3,
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        image: "images/basic-chic01-terno.jpg",
        description:
            "A stylish terno set designed for a simple and comfortable look.",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ]

        /* Fixed color, so no color option */
    },


    {
        id: 4,
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        image: "images/sami-tshirt.jpg",
        description:
            "A casual t-shirt that can be worn for everyday activities.",

        colors: [
            "Brown",
            "Tan",
            "Pink",
            "Black",
            "Light Blue"
        ]

        /* No size */
    },


    /* ==========================================
       BODY CARE
    ========================================== */

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
        image: "images/vitamine-e-whitening-cream.jpg",
        description:
            "A moisturizing cream for an everyday skincare routine."
    },


    /* ==========================================
       BAGS
    ========================================== */

    {
        id: 9,
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg",
        description:
            "A compact and stylish bag that works well for everyday use.",

        colors: [
            "Black",
            "Green",
            "Red",
            "Blue"
        ]
    },


    {
        id: 10,
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        image: "images/mini-bucket-bag.jpg",
        description:
            "A small bucket-style bag with a simple and fashionable design.",

        colors: [
            "Dark Blue",
            "Grayish Blue",
            "Blue",
            "Blue Stripes"
        ]
    },


    {
        id: 11,
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        image: "images/anytime-medium.jpg",
        description:
            "A medium-sized everyday bag with enough space for your essentials.",

        colors: [
            "Black",
            "Tantaupe",
            "Tantaupe Two",
            "White",
            "Clay Two"
        ]
    },


    {
        id: 12,
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        image: "images/emilio-barrel.jpg",
        description:
            "A barrel-style bag with a clean and modern appearance.",

        colors: [
            "Dark Brown",
            "Red",
            "Green",
            "Black"
        ]
    },


    /* ==========================================
       PERFUME
    ========================================== */

    {
        id: 13,
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg",
        description:
            "A fragrance option for everyday wear.",

        scents: [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals"
        ]
    },


    {
        id: 14,
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        image: "images/bath-body-works-perfume.jpg",
        description:
            "A fragrance designed for a fresh everyday scent.",

        scents: [
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're the One",
            "Vanilla Ease"
        ]
    },


    {
        id: 15,
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        image: "images/smart-collection-perfume.jpg",
        description:
            "An affordable fragrance option for everyday use.",

        scents: [
            "Chanel N'5"
        ]
    },


    {
        id: 16,
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        image: "images/lattafa-yara.jpg",
        description:
            "A popular fragrance choice with a soft and pleasant scent."

        /* No other scent */
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


/* ==========================================
   CUSTOMER NAME
========================================== */

const customerName =
    document.getElementById(
        "customerName"
    );


if (customerName) {

    customerName.textContent =
        currentUser.fullName ||
        "Customer";

}


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return "₱" +
        price.toLocaleString(
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
            filteredProducts.length +
            (
                filteredProducts.length === 1
                    ? " product"
                    : " products"
            );

    }


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


    productGrid.innerHTML =
        filteredProducts.map(
            function(product) {

                return `

                    <article
                        class="product-card"
                    >

                        <div
                            class="product-image"
                        >

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                onerror="this.src='https://via.placeholder.com/500x500?text=Love+Luxe'"
                            >

                        </div>


                        <div
                            class="product-info"
                        >

                            <div
                                class="product-category"
                            >
                                ${product.category}
                            </div>


                            <div
                                class="product-name"
                            >
                                ${product.name}
                            </div>


                            <div
                                class="product-description"
                            >
                                ${product.description}
                            </div>


                            <div
                                class="product-bottom"
                            >

                                <div
                                    class="product-price"
                                >
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


    const viewButtons =
        document.querySelectorAll(
            ".view-button"
        );


    viewButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

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
        displayProducts
    );

}


/* ==========================================
   CREATE CHECKOUT MODAL
========================================== */

function createCheckoutModal() {

    if (
        document.getElementById(
            "checkoutModal"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.textContent = `

        .option-group {
            margin-top: 18px;
        }

        .option-group label {
            display: block;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .option-group select {
            width: 100%;
            height: 45px;
            border: 1px solid #d8d8d8;
            border-radius: 7px;
            padding: 0 12px;
            background: white;
            font-size: 14px;
        }

        .option-group select:focus {
            outline: none;
            border-color: #c5a059;
        }

        .selected-option-note {
            margin-top: 8px;
            font-size: 12px;
            color: #777777;
        }

    `;


    document.head.appendChild(
        style
    );


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "checkoutModal";


    modal.className =
        "modal-overlay";


    modal.innerHTML = `

        <div
            class="checkout-modal"
        >

            <button
                type="button"
                class="close-modal"
                id="closeCheckout"
            >
                ×
            </button>


            <div
                class="checkout-header"
            >

                <span>
                    LOVE LUXE ORDER
                </span>

                <h2>
                    Product Details
                </h2>

            </div>


            <div
                class="checkout-product"
            >

                <div
                    class="checkout-image-wrapper"
                >

                    <img
                        id="checkoutImage"
                        src=""
                        alt=""
                    >

                </div>


                <div
                    class="checkout-product-info"
                >

                    <div
                        class="checkout-category"
                        id="checkoutCategory"
                    ></div>


                    <h3
                        id="checkoutName"
                    ></h3>


                    <p
                        class="checkout-description"
                        id="checkoutDescription"
                    ></p>


                    <div
                        class="checkout-price"
                        id="checkoutPrice"
                    ></div>

                </div>

            </div>


            <div
                id="productOptions"
            ></div>


            <div
                class="checkout-field"
            >

                <label>
                    Quantity
                </label>


                <div
                    class="quantity-control"
                >

                    <button
                        type="button"
                        id="decreaseQuantity"
                    >
                        −
                    </button>


                    <span
                        id="checkoutQuantity"
                    >
                        1
                    </span>


                    <button
                        type="button"
                        id="increaseQuantity"
                    >
                        +
                    </button>

                </div>

            </div>


            <div
                class="checkout-section"
            >

                <div
                    class="checkout-section-title"
                >
                    Shipping Address
                </div>


                <div
                    class="checkout-address"
                    id="checkoutAddress"
                >
                    No shipping address saved.
                </div>


                <a
                    href="customer.html#settings"
                    class="edit-address-link"
                >
                    Manage shipping address
                </a>

            </div>


            <div
                class="checkout-field"
            >

                <label
                    for="paymentMethod"
                >
                    Payment Method
                </label>


                <select
                    id="paymentMethod"
                >

                    <option>
                        Cash on Delivery
                    </option>

                    <option>
                        GCash
                    </option>

                    <option>
                        Bank Transfer
                    </option>

                    <option>
                        Card
                    </option>

                </select>

            </div>


            <div
                class="checkout-total-row"
            >

                <span>
                    Total
                </span>


                <strong
                    id="checkoutTotal"
                >
                    ₱0.00
                </strong>

            </div>


            <button
                type="button"
                class="place-order-button"
                id="placeOrderButton"
            >
                PLACE ORDER
            </button>


            <div
                class="checkout-message"
                id="checkoutMessage"
            ></div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    document.getElementById(
        "closeCheckout"
    ).addEventListener(
        "click",
        closeCheckout
    );


    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeCheckout();

            }

        }
    );


    document.getElementById(
        "decreaseQuantity"
    ).addEventListener(
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


    document.getElementById(
        "increaseQuantity"
    ).addEventListener(
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


    document.getElementById(
        "placeOrderButton"
    ).addEventListener(
        "click",
        placeOrder
    );

}


/* ==========================================
   PRODUCT OPTIONS
========================================== */

function createProductOptions(
    product
) {

    const container =
        document.getElementById(
            "productOptions"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


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


        group.innerHTML = `

            <label for="productColor">
                Color
            </label>

            <select
                id="productColor"
            >

                <option value="">
                    Select color
                </option>

                ${product.colors.map(
                    function(color) {

                        return `
                            <option value="${color}">
                                ${color}
                            </option>
                        `;

                    }
                ).join("")}

            </select>

        `;


        container.appendChild(
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


        group.innerHTML = `

            <label for="productSize">
                Size
            </label>

            <select
                id="productSize"
            >

                <option value="">
                    Select size
                </option>

                ${product.sizes.map(
                    function(size) {

                        return `
                            <option value="${size}">
                                ${size}
                            </option>
                        `;

                    }
                ).join("")}

            </select>

        `;


        container.appendChild(
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


        group.innerHTML = `

            <label for="productScent">
                Scent
            </label>

            <select
                id="productScent"
            >

                <option value="">
                    Select scent
                </option>

                ${product.scents.map(
                    function(scent) {

                        return `
                            <option value="${scent}">
                                ${scent}
                            </option>
                        `;

                    }
                ).join("")}

            </select>

        `;


        container.appendChild(
            group
        );

    }

}


/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(
    productId
) {

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


    createCheckoutModal();


    selectedQuantity = 1;

    selectedColor = "";

    selectedSize = "";

    selectedScent = "";


    const checkoutImage =
        document.getElementById(
            "checkoutImage"
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


    const checkoutMessage =
        document.getElementById(
            "checkoutMessage"
        );


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


    createProductOptions(
        selectedProduct
    );


    updateCheckoutQuantity();


    displayShippingAddress();


    checkoutMessage.textContent =
        "";


    document.getElementById(
        "checkoutModal"
    ).classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   QUANTITY
========================================== */

function updateCheckoutQuantity() {

    const quantity =
        document.getElementById(
            "checkoutQuantity"
        );


    const total =
        document.getElementById(
            "checkoutTotal"
        );


    if (quantity) {

        quantity.textContent =
            selectedQuantity;

    }


    if (
        total &&
        selectedProduct
    ) {

        total.textContent =
            formatPrice(
                selectedProduct.price *
                selectedQuantity
            );

    }

}


/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {

    const checkoutAddress =
        document.getElementById(
            "checkoutAddress"
        );


    if (!checkoutAddress) {

        return;

    }


    const user =
        JSON.parse(
            localStorage.getItem(
                "loveLuxeCurrentUser"
            )
        );


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

            return part &&
                part.trim() !== "";

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

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder() {

    if (!selectedProduct) {

        return;

    }


    const user =
        JSON.parse(
            localStorage.getItem(
                "loveLuxeCurrentUser"
            )
        );


    if (
        !user ||
        user.role !== "customer"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    /* ======================================
       GET OPTIONS
    ====================================== */

    const colorSelect =
        document.getElementById(
            "productColor"
        );


    const sizeSelect =
        document.getElementById(
            "productSize"
        );


    const scentSelect =
        document.getElementById(
            "productScent"
        );


    selectedColor =
        colorSelect
            ? colorSelect.value
            : "";


    selectedSize =
        sizeSelect
            ? sizeSelect.value
            : "";


    selectedScent =
        scentSelect
            ? scentSelect.value
            : "";


    /* ======================================
       REQUIRE OPTIONS
    ====================================== */

    if (
        selectedProduct.colors &&
        selectedProduct.colors.length > 0 &&
        !selectedColor
    ) {

        showCheckoutMessage(
            "Please select a color."
        );

        return;

    }


    if (
        selectedProduct.sizes &&
        selectedProduct.sizes.length > 0 &&
        !selectedSize
    ) {

        showCheckoutMessage(
            "Please select a size."
        );

        return;

    }


    if (
        selectedProduct.scents &&
        selectedProduct.scents.length > 0 &&
        !selectedScent
    ) {

        showCheckoutMessage(
            "Please select a scent."
        );

        return;

    }


    /* ======================================
       SHIPPING ADDRESS
    ====================================== */

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

            return part &&
                part.trim() !== "";

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
       PAYMENT
    ====================================== */

    const paymentMethod =
        document.getElementById(
            "paymentMethod"
        )?.value ||
        "Cash on Delivery";


    /* ======================================
       TOTAL
    ====================================== */

    const total =
        selectedProduct.price *
        selectedQuantity;


    /* ======================================
       ORDER NUMBER
    ====================================== */

    const orderNumber =
        "LL-" +
        Date.now()
            .toString()
            .slice(-8);


    /* ======================================
       ORDER DATA
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

        unitPrice:
            selectedProduct.price,

        color:
            selectedColor,

        size:
            selectedSize,

        scent:
            selectedScent,

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


    /* ======================================
       SAVE ORDER
    ====================================== */

    const orders =
        JSON.parse(
            localStorage.getItem(
                "loveLuxeOrders"
            )
        ) || [];


    orders.push(
        order
    );


    localStorage.setItem(
        "loveLuxeOrders",
        JSON.stringify(
            orders
        )
    );


    showCheckoutMessage(
        "Order placed successfully! Order #" +
        orderNumber,
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

                (
                    selectedColor
                        ? "Color: " +
                          selectedColor +
                          "\n"
                        : ""
                ) +

                (
                    selectedSize
                        ? "Size: " +
                          selectedSize +
                          "\n"
                        : ""
                ) +

                (
                    selectedScent
                        ? "Scent: " +
                          selectedScent +
                          "\n"
                        : ""
                ) +

                "Quantity: " +
                selectedQuantity +
                "\n" +

                "Total: " +
                formatPrice(total)

            );

        },
        600
    );

}


/* ==========================================
   CHECKOUT MESSAGE
========================================== */

function showCheckoutMessage(
    message,
    color = "#c0392b"
) {

    const messageBox =
        document.getElementById(
            "checkoutMessage"
        );


    if (!messageBox) {

        return;

    }


    messageBox.textContent =
        message;


    messageBox.style.color =
        color;

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


sidebarOverlay?.addEventListener(
    "click",
    closeSidebar
);


/* ==========================================
   LOGOUT
========================================== */

document.getElementById(
    "logoutButton"
)?.addEventListener(
    "click",
    function() {

        const confirmLogout =
            confirm(
                "Are you sure you want to logout?"
            );


        if (!confirmLogout) {

            return;

        }


        localStorage.removeItem(
            "loveLuxeCurrentUser"
        );


        localStorage.removeItem(
            "loveLuxeAdminLoggedIn"
        );


        window.location.href =
            "index.html";

    }
);


/* ==========================================
   INITIAL DISPLAY
========================================== */

displayProducts();
