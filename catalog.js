/* ==========================================
   LOVE LUXE PRODUCT CATALOG
   ARRAY-ONLY VERSION
========================================== */


/* ==========================================
   SHARED DATA
========================================== */

const loveLuxeData = window.LoveLuxeData;

const customers = loveLuxeData.customers;

const orders = loveLuxeData.orders;


/* ==========================================
   CURRENT CUSTOMER
========================================== */

let currentUser = customers[0];


/* ==========================================
   PRODUCT ARRAY
========================================== */

const products = [

    {
        id: "LL-001",
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg",
        images: [
            "images/sophia-skirt.jpg",
            "images/sophia-skirt-2.jpg"
        ],
        description: "A stylish and comfortable skirt for everyday wear.",
        colors: ["Black", "White", "Brown"],
        sizes: ["Small", "Medium", "Large"]
    },

    {
        id: "LL-002",
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        image: "images/nov-mardi-tshirt.jpg",
        images: [
            "images/nov-mardi-tshirt.jpg",
            "images/nov-mardi-tshirt-2.jpg"
        ],
        description: "A simple and comfortable shirt that is easy to style.",
        colors: ["Black", "White", "Gray"],
        sizes: ["Small", "Medium", "Large"]
    },

    {
        id: "LL-003",
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        image: "images/basic-chic01-terno.jpg",
        images: [
            "images/basic-chic01-terno.jpg",
            "images/basic-chic01-terno-2.jpg"
        ],
        description: "A simple matching terno set with a clean and stylish look.",
        colors: ["Black", "Beige", "Brown"],
        sizes: ["Small", "Medium", "Large"]
    },

    {
        id: "LL-004",
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        image: "images/sami-tshirt.jpg",
        images: [
            "images/sami-tshirt.jpg",
            "images/sami-tshirt-2.jpg"
        ],
        description: "A casual shirt designed for comfortable everyday use.",
        colors: ["Black", "White", "Pink"],
        sizes: ["Small", "Medium", "Large"]
    },

    {
        id: "LL-005",
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        image: "images/alada-soap.jpg",
        images: [
            "images/alada-soap.jpg",
            "images/alada-soap-2.jpg"
        ],
        description: "A body care soap made for a refreshing daily routine.",
        scents: ["Original"]
    },

    {
        id: "LL-006",
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        image: "images/dewy-gluta-soap.jpg",
        images: [
            "images/dewy-gluta-soap.jpg",
            "images/dewy-gluta-soap-2.jpg"
        ],
        description: "A body care soap for a simple daily skincare routine.",
        scents: ["Original"]
    },

    {
        id: "LL-007",
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        image: "images/serene-skin-soap.jpg",
        description: "A gentle soap for everyday body care.",
        scents: ["Original"]
    },

    {
        id: "LL-008",
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        image: "images/vitamin-e-whitening-cream.jpg",
        description: "A Vitamin E cream for a simple skincare routine.",
        scents: ["Original"]
    },

    {
        id: "LL-009",
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg",
        images: [
            "images/mini-enzo.jpg",
            "images/mini-enzo-2.jpg"
        ],
        description: "A compact and stylish bag suitable for everyday use.",
        colors: ["Black", "Brown", "Beige"]
    },

    {
        id: "LL-010",
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        image: "images/mini-bucket-bag.jpg",
        images: [
            "images/mini-bucket-bag.jpg",
            "images/mini-bucket-bag-2.jpg"
        ],
        description: "A practical bucket bag with a simple and stylish design.",
        colors: ["Black", "Brown", "Cream"]
    },

    {
        id: "LL-011",
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        image: "images/anytime-medium.jpg",
        images: [
            "images/anytime-medium.jpg",
            "images/anytime-medium-2.jpg"
        ],
        description: "A medium-sized bag made for everyday activities.",
        colors: ["Black", "Brown", "Beige"]
    },

    {
        id: "LL-012",
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        image: "images/emilio-barrel.jpg",
        images: [
            "images/emilio-barrel.jpg",
            "images/emilio-barrel-2.jpg"
        ],
        description: "A stylish barrel-shaped bag for casual and daily use.",
        colors: ["Black", "Brown", "Cream"]
    },

    {
        id: "LL-013",
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg",
        images: [
            "images/victorias-secret-perfume.jpg",
            "images/victorias-secret-perfume-2.jpg"
        ],
        description: "A sweet and elegant fragrance for everyday wear.",
        scents: ["Original"]
    },

    {
        id: "LL-014",
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        image: "images/bath-body-works-perfume.jpg",
        description: "A pleasant fragrance suitable for everyday use.",
        scents: ["Original"]
    },

    {
        id: "LL-015",
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        image: "images/smart-collection-perfume.jpg",
        description: "A budget-friendly fragrance option for daily use.",
        scents: ["Original"]
    },

    {
        id: "LL-016",
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        image: "images/lattafa-yara.jpg",
        description: "A sweet and elegant perfume for everyday use.",
        scents: ["Original"]
    }

];


/* ==========================================
   SELECTED PRODUCT
========================================== */

let selectedProduct = null;

let selectedQuantity = 1;

let selectedColor = "";

let selectedSize = "";

let selectedScent = "";


/* ==========================================
   DOM ELEMENTS
========================================== */

const productGrid =
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-button");

const customerName =
    document.getElementById("customerName");

const checkoutModal =
    document.getElementById("checkoutModal");

const checkoutImage =
    document.getElementById("checkoutImage");

const checkoutThumbnails =
    document.getElementById("checkoutThumbnails");

const checkoutName =
    document.getElementById("checkoutName");

const checkoutCategory =
    document.getElementById("checkoutCategory");

const checkoutDescription =
    document.getElementById("checkoutDescription");

const checkoutPrice =
    document.getElementById("checkoutPrice");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const checkoutQuantity =
    document.getElementById("checkoutQuantity");

const productOptions =
    document.getElementById("productOptions");

const checkoutAddress =
    document.getElementById("checkoutAddress");

const checkoutMessage =
    document.getElementById("checkoutMessage");

const paymentMethod =
    document.getElementById("paymentMethod");

const closeCheckout =
    document.getElementById("closeCheckout");

const decreaseQuantity =
    document.getElementById("decreaseQuantity");

const increaseQuantity =
    document.getElementById("increaseQuantity");

const placeOrderButton =
    document.getElementById("placeOrderButton");

const accountToggle =
    document.getElementById("accountToggle");

const accountDropdown =
    document.getElementById("accountDropdown");

const productsLink =
    document.getElementById("productsLink");

const shopSidebar =
    document.getElementById("shopSidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");


/* ==========================================
   CURRENT CATEGORY
========================================== */

let selectedCategory = "All";


/* ==========================================
   FORMAT PRICE
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

    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    let filteredProducts =
        products.filter(
            function(product) {

                const categoryMatch =
                    selectedCategory === "All" ||
                    product.category === selectedCategory;

                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(searchTerm);

                return categoryMatch &&
                    searchMatch;

            }
        );


    productGrid.innerHTML = "";


    if (productCount) {

        productCount.textContent =
            "Showing " +
            filteredProducts.length +
            " product(s)";

    }


    if (filteredProducts.length === 0) {

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;

    }


    if (noProducts) {
        noProducts.style.display = "none";
    }


    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement("article");

            card.className =
                "product-card";


            const image =
                document.createElement("img");

            image.className =
                "product-image";

            image.src =
                product.image;

            image.alt =
                product.name;

            image.onerror =
                function() {

                    this.style.display = "none";

                };


            const content =
                document.createElement("div");

            content.className =
                "product-card-content";


            const category =
                document.createElement("div");

            category.className =
                "product-category";

            category.textContent =
                product.category;


            const name =
                document.createElement("h3");

            name.className =
                "product-name";

            name.textContent =
                product.name;


            const price =
                document.createElement("div");

            price.className =
                "product-price";

            price.textContent =
                formatPrice(product.price);


            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "view-button";

            button.textContent =
                "VIEW";

            button.addEventListener(
                "click",
                function() {

                    viewProduct(product.id);

                }
            );


            content.appendChild(category);

            content.appendChild(name);

            content.appendChild(price);

            content.appendChild(button);


            card.appendChild(image);

            card.appendChild(content);


            productGrid.appendChild(card);

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

                selectedCategory =
                    button.dataset.category ||
                    "All";


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


    if (checkoutImage) {

        checkoutImage.src =
            selectedProduct.image;

        checkoutImage.alt =
            selectedProduct.name;

    }


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


    if (checkoutQuantity) {

        checkoutQuantity.value = 1;

    }


    displayProductImages(
        selectedProduct
    );


    displayProductOptions(
        selectedProduct
    );


    updateCheckoutQuantity();

    displayShippingAddress();


    if (checkoutMessage) {

        checkoutMessage.textContent =
            "";

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
   PRODUCT IMAGES
========================================== */

function displayProductImages(product) {

    if (!checkoutThumbnails) {
        return;
    }


    checkoutThumbnails.innerHTML =
        "";


    const images =
        product.images ||
        [product.image];


    images.forEach(
        function(image, index) {

            const thumbnail =
                document.createElement("img");


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

function displayProductOptions(product) {

    if (!productOptions) {
        return;
    }


    productOptions.innerHTML =
        "";


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


        const defaultOption =
            document.createElement("option");

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


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(
            wrapper
        );

    }


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


        const defaultOption =
            document.createElement("option");

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


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(
            wrapper
        );

    }


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


        const defaultOption =
            document.createElement("option");

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


        wrapper.appendChild(label);

        wrapper.appendChild(select);

        productOptions.appendChild(
            wrapper
        );

    }

}


/* ==========================================
   QUANTITY
========================================== */

function updateCheckoutQuantity() {

    if (!selectedProduct) {
        return;
    }


    let quantity =
        Number(selectedQuantity);


    if (
        !Number.isFinite(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

    }


    if (quantity > 99) {

        quantity = 99;

    }


    selectedQuantity =
        Math.floor(quantity);


    if (checkoutQuantity) {

        checkoutQuantity.value =
            selectedQuantity;

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(
                selectedProduct.price *
                selectedQuantity
            );

    }

}


/* ==========================================
   DECREASE QUANTITY
========================================== */

if (decreaseQuantity) {

    decreaseQuantity.addEventListener(
        "click",
        function() {

            selectedQuantity--;

            if (selectedQuantity < 1) {

                selectedQuantity = 1;

            }

            updateCheckoutQuantity();

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

            selectedQuantity++;

            if (selectedQuantity > 99) {

                selectedQuantity = 99;

            }

            updateCheckoutQuantity();

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

            selectedQuantity =
                Number(
                    checkoutQuantity.value
                );


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
        !currentUser ||
        !currentUser.shippingAddress
    ) {

        checkoutAddress.textContent =
            "No shipping address saved.";

        return;

    }


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


    checkoutAddress.textContent =
        parts
            .filter(
                function(part) {

                    return part &&
                        String(part).trim() !== "";

                }
            )
            .join(", ");

}


/* ==========================================
   CLOSE CHECKOUT
========================================== */

function closeProductModal() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


if (closeCheckout) {

    closeCheckout.addEventListener(
        "click",
        function() {

            closeProductModal();

        }
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

                closeProductModal();

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


            if (
                selectedProduct.colors &&
                selectedProduct.colors.length > 0 &&
                !selectedColor
            ) {

                if (checkoutMessage) {

                    checkoutMessage.textContent =
                        "Please select a color.";

                }

                return;

            }


            if (
                selectedProduct.sizes &&
                selectedProduct.sizes.length > 0 &&
                !selectedSize
            ) {

                if (checkoutMessage) {

                    checkoutMessage.textContent =
                        "Please select a size.";

                }

                return;

            }


            if (
                selectedProduct.scents &&
                selectedProduct.scents.length > 0 &&
                !selectedScent
            ) {

                if (checkoutMessage) {

                    checkoutMessage.textContent =
                        "Please select a scent.";

                }

                return;

            }


            const payment =
                paymentMethod
                    ? paymentMethod.value
                    : "Cash on Delivery";


            const newOrder = {

                id:
                    "ORD-" +
                    Date.now(),

                customer:
                    currentUser
                        ? currentUser.fullName
                        : "Customer",

                productId:
                    selectedProduct.id,

                productName:
                    selectedProduct.name,

                category:
                    selectedProduct.category,

                price:
                    selectedProduct.price,

                quantity:
                    selectedQuantity,

                color:
                    selectedColor,

                size:
                    selectedSize,

                scent:
                    selectedScent,

                paymentMethod:
                    payment,

                total:
                    selectedProduct.price *
                    selectedQuantity,

                shippingAddress:
                    currentUser
                        ? currentUser.shippingAddress
                        : null,

                date:
                    new Date().toLocaleString()

            };


            orders.push(newOrder);


            if (checkoutMessage) {

                checkoutMessage.textContent =
                    "Order placed successfully.";

            }

        }
    );

}


/* ==========================================
   ACCOUNT DROPDOWN
========================================== */

if (accountToggle && accountDropdown) {

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
   MOBILE SIDEBAR
========================================== */

function openSidebar() {

    if (shopSidebar) {

        shopSidebar.classList.add(
            "open"
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.classList.add(
            "show"
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
            "show"
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
   INITIAL DISPLAY
========================================== */

displayProducts();
