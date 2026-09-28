// ==========================================
// CUSTOMER ACCESS CHECK
// ==========================================

const currentUser =
    localStorage.getItem(
        "loveLuxeCurrentUser"
    );


if (!currentUser) {

    // Not logged in
    window.location.href =
        "index.html";

}

else {

    try {

        const user =
            JSON.parse(currentUser);


        // ==========================================
        // ONLY CUSTOMERS CAN ENTER CATALOG
        // ==========================================

        if (user.role !== "customer") {

            window.location.href =
                "https://danielrf15.github.io/loveluxe_dashboard/";

        }

    }

    catch (error) {

        localStorage.removeItem(
            "loveLuxeCurrentUser"
        );


        window.location.href =
            "index.html";

    }

}


// ==========================================
// LOVE LUXE PRODUCTS
// ==========================================

const products = [

    // ==========================================
    // CLOTHING
    // ==========================================

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


    // ==========================================
    // BODY CARE
    // ==========================================

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


    // ==========================================
    // BAGS
    // ==========================================

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


    // ==========================================
    // PERFUME
    // ==========================================

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


// ==========================================
// VARIABLES
// ==========================================

let selectedCategory = "All";

let searchText = "";


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


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts() {

    productGrid.innerHTML = "";


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


    // ==========================================
    // NO PRODUCTS
    // ==========================================

    if (
        filteredProducts.length === 0
    ) {

        noProducts.style.display =
            "block";


        productCount.textContent =
            "No products found";


        return;

    }


    noProducts.style.display =
        "none";


    productCount.textContent =

        "Showing " +
        filteredProducts.length +
        " product(s)";


    // ==========================================
    // CREATE CARDS
    // ==========================================

    filteredProducts.forEach(

        function(product) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            let imageHTML = "";


            if (
                product.image !== ""
            ) {

                imageHTML =

                    `<img
                        src="${product.image}"
                        alt="${product.name}"
                    >`;

            }


            else {

                imageHTML =

                    `<div class="image-placeholder">
                        LOVE LUXE
                    </div>`;

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

                            ₱${product.price.toLocaleString(
                                "en-PH",
                                {
                                    minimumFractionDigits: 2
                                }
                            )}

                        </span>


                        <button
                            class="view-button"
                            onclick="viewProduct('${product.name}')"
                        >

                            VIEW

                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(
                card
            );

        }

    );

}


// ==========================================
// CATEGORY FILTER
// ==========================================

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


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(

    "input",

    function() {

        searchText =
            searchInput.value.trim();


        displayProducts();

    }

);


// ==========================================
// VIEW PRODUCT
// ==========================================

function viewProduct(productName) {

    alert(

        "You selected: " +
        productName +
        "\n\nProduct details and ordering can be added here."

    );

}


// ==========================================
// SIDEBAR
// ==========================================

const shopSidebar =
    document.getElementById(
        "shopSidebar"
    );


const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


// ==========================================
// OPEN SIDEBAR
// ==========================================

function openSidebar() {

    shopSidebar.classList.add(
        "open"
    );


    sidebarOverlay.classList.add(
        "active"
    );

}


// ==========================================
// CLOSE SIDEBAR
// ==========================================

function closeSidebar() {

    shopSidebar.classList.remove(
        "open"
    );


    sidebarOverlay.classList.remove(
        "active"
    );

}


// ==========================================
// CLICK OVERLAY
// ==========================================

sidebarOverlay.addEventListener(

    "click",

    function() {

        closeSidebar();

    }

);


// ==========================================
// SIDEBAR MESSAGE
// ==========================================

function showMessage(section) {

    closeSidebar();


    alert(

        section +
        " page will be added next."

    );

}


// ==========================================
// CUSTOMER NAME
// ==========================================

function displayCustomerName() {

    const customerName =
        document.getElementById(
            "customerName"
        );


    const currentUser =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!currentUser) {

        customerName.textContent =
            "Customer";

        return;

    }


    try {

        const user =
            JSON.parse(
                currentUser
            );


        if (user.fullName) {

            customerName.textContent =
                user.fullName;

        }

    }

    catch (error) {

        customerName.textContent =
            "Customer";

    }

}


// ==========================================
// START
// ==========================================

displayCustomerName();

displayProducts();
