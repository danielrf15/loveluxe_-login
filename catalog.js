/* ==========================================
   LOVE LUXE PRODUCT CATALOG
========================================== */


/* ==========================================
   CUSTOMER ACCESS
========================================== */

let currentUser = null;

try {

    currentUser = JSON.parse(
        localStorage.getItem("loveLuxeCurrentUser")
    );

} catch (error) {

    currentUser = null;

}


if (
    !currentUser ||
    currentUser.role !== "customer"
) {

    window.location.href = "index.html";

}



/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* CLOTHING */

    {
        id: 1,
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg",
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
        image: "images/nov-mardi-tshirt.jpg",
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
        image: "images/basic-chic01-terno.jpg",
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
        image: "images/sami-tshirt.jpg",
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


    /* BODY CARE */

    {
        id: 5,
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        image: "images/alada-soap.jpg",
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
        image: "images/dewy-gluta-soap.jpg",
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


    /* BAGS */

    {
        id: 9,
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg",
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
        image: "images/mini-bucket-bag.jpg",
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
        image: "images/anytime-medium.jpg",
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
        image: "images/emilio-barrel.jpg",
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


    /* PERFUME */

    {
        id: 13,
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg",
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



/* ==========================================
   CUSTOMER NAME
========================================== */

if (customerName && currentUser) {

    customerName.textContent =
        currentUser.fullName ||
        "Customer";

}



/* ==========================================
   PRICE
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
        products.filter(function(product) {

            const categoryMatch =
                selectedCategory === "All" ||
                product.category === selectedCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchText) ||

                product.category
                    .toLowerCase()
                    .includes(searchText);


            return categoryMatch &&
                searchMatch;

        });


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
            noProducts.style.display = "block";
        }

        return;

    }


    if (noProducts) {
        noProducts.style.display = "none";
    }


    productGrid.innerHTML =
        filteredProducts.map(function(product) {

            return `

                <article class="product-card">

                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            onerror="this.src='images/placeholder.jpg'"
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

        }).join("");


    document
        .querySelectorAll(".view-button")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    const productId =
                        Number(
                            button.dataset.productId
                        );

                    viewProduct(productId);

                }
            );

        });

}



/* ==========================================
   CATEGORY FILTER
========================================== */

filterButtons.forEach(function(button) {

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

});



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

const productOptions =
    document.getElementById(
        "productOptions"
    );



/* ==========================================
   VIEW PRODUCT
========================================== */

function viewProduct(productId) {

    selectedProduct =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!selectedProduct) {
        return;
    }


    selectedQuantity = 1;

    selectedColor = "";

    selectedSize = "";

    selectedScent = "";


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


    displayProductImages(
        selectedProduct
    );


    displayProductOptions(
        selectedProduct
    );


    updateCheckoutQuantity();

    displayShippingAddress();


    checkoutMessage.textContent = "";


    checkoutModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* ==========================================
   PRODUCT IMAGES
========================================== */

function displayProductImages(product) {

    if (!checkoutThumbnails) {
        return;
    }


    checkoutThumbnails.innerHTML = "";


    const images =
        product.images ||
        [product.image];


    images.forEach(function(image, index) {

        const thumbnail =
            document.createElement("img");


        thumbnail.src = image;

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
                    .forEach(function(item) {

                        item.classList.remove(
                            "active"
                        );

                    });


                thumbnail.classList.add(
                    "active"
                );

            }
        );


        checkoutThumbnails.appendChild(
            thumbnail
        );

    });

}



/* ==========================================
   PRODUCT OPTIONS
========================================== */

function displayProductOptions(product) {

    if (!productOptions) {
        return;
    }


    productOptions.innerHTML = "";


    /* COLORS */

    if (
        product.colors &&
        product.colors.length > 0
    ) {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "option-group";


        const label =
            document.createElement("label");


        label.textContent =
            "Color";


        const select =
            document.createElement("select");


        select.id =
            "colorOption";


        select.innerHTML =
            `<option value="">Select color</option>`;


        product.colors.forEach(function(color) {

            select.innerHTML +=
                `<option value="${color}">
                    ${color}
                </option>`;

        });


        select.addEventListener(
            "change",
            function() {

                selectedColor =
                    select.value;

            }
        );


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(wrapper);

    }



    /* SIZE */

    if (
        product.sizes &&
        product.sizes.length > 0
    ) {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "option-group";


        const label =
            document.createElement("label");


        label.textContent =
            "Size";


        const select =
            document.createElement("select");


        select.id =
            "sizeOption";


        select.innerHTML =
            `<option value="">Select size</option>`;


        product.sizes.forEach(function(size) {

            select.innerHTML +=
                `<option value="${size}">
                    ${size}
                </option>`;

        });


        select.addEventListener(
            "change",
            function() {

                selectedSize =
                    select.value;

            }
        );


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(wrapper);

    }



    /* SCENT */

    if (
        product.scents &&
        product.scents.length > 0
    ) {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "option-group";


        const label =
            document.createElement("label");


        label.textContent =
            "Scent";


        const select =
            document.createElement("select");


        select.id =
            "scentOption";


        select.innerHTML =
            `<option value="">Select scent</option>`;


        product.scents.forEach(function(scent) {

            select.innerHTML +=
                `<option value="${scent}">
                    ${scent}
                </option>`;

        });


        select.addEventListener(
            "change",
            function() {

                selectedScent =
                    select.value;

            }
        );


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(wrapper);

    }

}



/* ==========================================
   QUANTITY
   ONLY + AND -
========================================== */

function updateCheckoutQuantity() {

    checkoutQuantity.textContent =
        selectedQuantity;


    const total =
        selectedProduct.price *
        selectedQuantity;


    checkoutTotal.textContent =
        formatPrice(total);

}


document
    .getElementById("decreaseQuantity")
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


document
    .getElementById("increaseQuantity")
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



/* ==========================================
   SHIPPING ADDRESS
========================================== */

function displayShippingAddress() {

    if (!checkoutAddress) {
        return;
    }


    let user = null;


    try {

        user = JSON.parse(
            localStorage.getItem(
                "loveLuxeCurrentUser"
            )
        );

    } catch (error) {

        user = null;

    }


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

    ].filter(function(part) {

        return part &&
            String(part).trim() !== "";

    });


    if (parts.length === 0) {

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

    if (!checkoutModal) {
        return;
    }


    checkoutModal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


document
    .getElementById("closeCheckout")
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
    .getElementById("placeOrderButton")
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

    ].filter(function(part) {

        return part &&
            String(part).trim() !== "";

    });


    if (
        addressParts.length === 0
    ) {

        checkoutMessage.textContent =
            "Please add your shipping address first.";

        checkoutMessage.style.color =
            "#c0392b";

        return;

    }


    /* CHECK REQUIRED OPTIONS */

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


    let orders = [];


    try {

        orders =
            JSON.parse(
                localStorage.getItem(
                    "loveLuxeOrders"
                )
            ) || [];

    } catch (error) {

        orders = [];

    }


    orders.push(order);


    localStorage.setItem(
        "loveLuxeOrders",
        JSON.stringify(orders)
    );


    checkoutMessage.textContent =
        "Order placed successfully!";

    checkoutMessage.style.color =
        "#16834a";


    setTimeout(function() {

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

    }, 500);

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


accountToggle?.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        event.stopPropagation();


        accountDropdown.classList.toggle(
            "show"
        );

    }
);



/* ==========================================
   MOBILE SIDEBAR
========================================== */

const menuButton =
    document.getElementById(
        "menuButton"
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


menuButton?.addEventListener(
    "click",
    openSidebar
);


sidebarOverlay?.addEventListener(
    "click",
    closeSidebar
);



/* ==========================================
   INITIAL DISPLAY
========================================== */

displayProducts();
