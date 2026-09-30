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

    /* ------------------------------
       CLOTHING
    ------------------------------ */

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

        description:
            "A casual t-shirt that can be worn for everyday activities."

    },


    /* ------------------------------
       BODY CARE
    ------------------------------ */

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


    /* --------------------------------
       ONLY ONE IMAGE
       SERENE SKIN SOAP
    --------------------------------- */

    {
        id: 7,

        name: "Serene Skin Soap",

        category: "Body Care",

        price: 299,

        image:
            "images/serene-skin-soap.jpg",

        images: [
            "images/serene-skin-soap.jpg"
        ],

        description:
            "A gentle body care product for everyday use."

    },


    /* --------------------------------
       ONLY ONE IMAGE
       VITAMIN E CREAM
    --------------------------------- */

    {
        id: 8,

        name: "Vitamin E Whitening Cream",

        category: "Body Care",

        price: 180,

        image:
            "images/vitamin-e-whitening-cream.jpg",

        images: [
            "images/vitamin-e-whitening-cream.jpg"
        ],

        description:
            "A moisturizing cream for an everyday skincare routine."

    },


    /* ------------------------------
       BAGS
    ------------------------------ */

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

        description:
            "A barrel-style bag with a clean and modern appearance."

    },


    /* ------------------------------
       PERFUME
    ------------------------------ */

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

        description:
            "A fragrance option for everyday wear."

    },


    /* --------------------------------
       ONLY ONE IMAGE
       BATH & BODY WORKS
    --------------------------------- */

    {
        id: 14,

        name: "Bath & Body Works Perfume",

        category: "Perfume",

        price: 600,

        image:
            "images/bath-body-works-perfume.jpg",

        images: [
            "images/bath-body-works-perfume.jpg"
        ],

        description:
            "A fragrance designed for a fresh everyday scent."

    },


    /* --------------------------------
       ONLY ONE IMAGE
       SMART COLLECTION
    --------------------------------- */

    {
        id: 15,

        name: "Smart Collection Perfume",

        category: "Perfume",

        price: 350,

        image:
            "images/smart-collection-perfume.jpg",

        images: [
            "images/smart-collection-perfume.jpg"
        ],

        description:
            "An affordable fragrance option for everyday use."

    },


    /* --------------------------------
       ONLY ONE IMAGE
       LATTAFA YARA
    --------------------------------- */

    {
        id: 16,

        name: "Lattafa YARA",

        category: "Perfume",

        price: 390,

        image:
            "images/lattafa-yara.jpg",

        images: [
            "images/lattafa-yara.jpg"
        ],

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
   DISPLAY CUSTOMER NAME
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
   FILTER BUTTONS
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


/* ==========================================
   PRODUCT IMAGE GALLERY
========================================== */

function displayProductImages(product) {

    if (!checkoutThumbnails) {

        return;

    }


    checkoutThumbnails.innerHTML =
        "";


    const productImages =
        product.images || [
            product.image
        ];


    productImages.forEach(
        function(imagePath, index) {

            const thumbnail =
                document.createElement(
                    "img"
                );


            thumbnail.src =
                imagePath;


            thumbnail.alt =
                product.name +
                " image " +
                (index + 1);


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
                            imagePath;

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


            thumbnail.onerror =
                function() {

                    thumbnail.style.display =
                        "none";

                };


            checkoutThumbnails.appendChild(
                thumbnail
            );

        }
    );

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


    selectedQuantity =
        1;


    if (checkoutImage) {

        checkoutImage.src =
            selectedProduct.image;


        checkoutImage.alt =
            selectedProduct.name;

    }


    displayProductImages(
        selectedProduct
    );


    if (checkoutName) {

        checkoutName.textContent =
            selectedProduct.name;

    }


    if (checkoutCategory) {

        checkoutCategory.textContent =
            selectedProduct.category;

    }


    if (checkoutDescription) {

        checkoutDescription.textContent =
            selectedProduct.description;

    }


    if (checkoutPrice) {

        checkoutPrice.textContent =
            formatPrice(
                selectedProduct.price
            );

    }


    updateCheckoutQuantity();


    displayShippingAddress();


    if (checkoutMessage) {

        checkoutMessage.textContent = "";

    }


    if (checkoutModal) {

        checkoutModal.classList.add(
            "show"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   QUANTITY
========================================== */

function updateCheckoutQuantity() {

    if (checkoutQuantity) {

        checkoutQuantity.textContent =
            selectedQuantity;

    }


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
   DECREASE QUANTITY
========================================== */

document.getElementById(
    "decreaseQuantity"
)?.addEventListener(
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


/* ==========================================
   INCREASE QUANTITY
========================================== */

document.getElementById(
    "increaseQuantity"
)?.addEventListener(
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


/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {

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


    if (parts.length === 0) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


    checkoutAddress.textContent =
        parts.join(", ");

}


/* ==========================================
   CLOSE MODAL
========================================== */

document.getElementById(
    "closeCheckout"
)?.addEventListener(
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


function closeCheckout() {

    if (!checkoutModal) {

        return;

    }


    checkoutModal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================
   PLACE ORDER
========================================== */

document.getElementById(
    "placeOrderButton"
)?.addEventListener(
    "click",
    placeOrder
);


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

        if (checkoutMessage) {

            checkoutMessage.textContent =
                "Please add your shipping address first.";

            checkoutMessage.style.color =
                "#c0392b";

        }

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
        JSON.stringify(orders)
    );


    if (checkoutMessage) {

        checkoutMessage.textContent =
            "Order placed successfully! Order #" +
            orderNumber;

        checkoutMessage.style.color =
            "#16834a";

    }


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
   MOBILE SIDEBAR
========================================== */

const menuButton =
    document.querySelector(
        ".menu-button"
    );


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


menuButton?.addEventListener(
    "click",
    openSidebar
);


sidebarOverlay?.addEventListener(
    "click",
    closeSidebar
);


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


accountToggle?.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        event.stopPropagation();


        if (accountDropdown) {

            accountDropdown.classList.toggle(
                "show"
            );

        }

    }
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
