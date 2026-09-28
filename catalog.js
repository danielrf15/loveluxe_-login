const products = [
    // BODY CARE
    {
        id: 1,
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        image: "images/alada-soap.jpg"
    },
    {
        id: 2,
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        image: "images/dewy-gluta-soap.jpg"
    },
    {
        id: 3,
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        image: "images/serene-skin-soap.jpg"
    },
    {
        id: 4,
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        image: "images/vitamin-e-whitening-cream.jpg"
    },

    // PERFUME
    {
        id: 5,
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg"
    },
    {
        id: 6,
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        image: "images/bath-body-works-perfume.jpg"
    },
    {
        id: 7,
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        image: "images/smart-collection-perfume.jpg"
    },
    {
        id: 8,
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        image: "images/lattafa-yara.jpg"
    },

    // BAGS
    {
        id: 9,
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg"
    },
    {
        id: 10,
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        image: "images/mini-bucket-bag.jpg"
    },
    {
        id: 11,
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        image: "images/anytime-medium.jpg"
    },
    {
        id: 12,
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        image: "images/emilio-barrel.jpg"
    },

    // CLOTHING
    {
        id: 13,
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg"
    },
    {
        id: 14,
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        image: "images/nov-mardi-tshirt.jpg"
    },
    {
        id: 15,
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        image: "images/basic-chic01-terno.jpg"
    },
    {
        id: 16,
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        image: "images/sami-tshirt.jpg"
    }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "All";
let searchTerm = "";

// DISPLAY PRODUCTS
function displayProducts() {
    productGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {
        const matchesCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products">
                <p>No products found.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <div class="product-image">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    onerror="this.style.display='none';"
                >
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p class="product-price">
                    ₱${product.price.toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>

                <button 
                    class="view-product-btn"
                    onclick="viewProduct(${product.id})"
                >
                    VIEW PRODUCT
                </button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// CATEGORY FILTER
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory = button.dataset.category;

        displayProducts();
    });
});

// SEARCH
if (searchInput) {
    searchInput.addEventListener("input", () => {
        searchTerm = searchInput.value;
        displayProducts();
    });
}

// VIEW PRODUCT
function viewProduct(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    alert(
        `${product.name}\n\n` +
        `Category: ${product.category}\n` +
        `Price: ₱${product.price.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`
    );
}

// SIDEBAR
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const closeSidebar = document.getElementById("closeSidebar");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        sidebar.classList.add("open");
        sidebarOverlay.classList.add("show");
    });
}

if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");
    });
}

// MY ORDERS / SETTINGS
function showMessage(section) {
    alert(`${section} is currently being prepared.`);
}

// INITIAL DISPLAY
displayProducts();
