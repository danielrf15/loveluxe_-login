/* ==========================================
   LOVE LUXE ADMIN
   ARRAY-ONLY VERSION
========================================== */

const data =
    window.LoveLuxeData;


/* ==========================================
   ADMIN PRODUCTS ARRAY
========================================== */

const adminProducts = [

    {
        code: "LL-001",
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        stock: 20,
        image: "images/sophia-skirt.jpg"
    },

    {
        code: "LL-002",
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        stock: 20,
        image: "images/nov-mardi-tshirt.jpg"
    },

    {
        code: "LL-003",
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        stock: 20,
        image: "images/basic-chic01-terno.jpg"
    },

    {
        code: "LL-004",
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        stock: 20,
        image: "images/sami-tshirt.jpg"
    },

    {
        code: "LL-005",
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        stock: 10,
        image: "images/alada-soap.jpg"
    },

    {
        code: "LL-006",
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        stock: 10,
        image: "images/dewy-gluta-soap.jpg"
    },

    {
        code: "LL-007",
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        stock: 10,
        image: "images/serene-skin-soap.jpg"
    },

    {
        code: "LL-008",
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        stock: 10,
        image: "images/vitamin-e-whitening-cream.jpg"
    },

    {
        code: "LL-009",
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        stock: 18,
        image: "images/mini-enzo.jpg"
    },

    {
        code: "LL-010",
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        stock: 18,
        image: "images/mini-bucket-bag.jpg"
    },

    {
        code: "LL-011",
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        stock: 18,
        image: "images/anytime-medium.jpg"
    },

    {
        code: "LL-012",
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        stock: 18,
        image: "images/emilio-barrel.jpg"
    },

    {
        code: "LL-013",
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        stock: 5,
        image: "images/victorias-secret-perfume.jpg"
    },

    {
        code: "LL-014",
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        stock: 5,
        image: "images/bath-body-works-perfume.jpg"
    },

    {
        code: "LL-015",
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        stock: 5,
        image: "images/smart-collection-perfume.jpg"
    },

    {
        code: "LL-016",
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        stock: 5,
        image: "images/lattafa-yara.jpg"
    }

];


/* ==========================================
   MONEY FORMAT
========================================== */

function money(value) {

    return "₱" +
        Number(value).toLocaleString(
            "en-PH",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}


/* ==========================================
   SIDEBAR
========================================== */

function toggleSidebar() {

    document
        .getElementById("sidebar")
        ?.classList.toggle("open");


    document
        .getElementById("sidebarOverlay")
        ?.classList.toggle("active");

}


function closeSidebar() {

    document
        .getElementById("sidebar")
        ?.classList.remove("open");


    document
        .getElementById("sidebarOverlay")
        ?.classList.remove("active");

}


/* ==========================================
   ADMIN VIEW
========================================== */

function showAdminView(view) {

    const dashboard =
        document.getElementById(
            "dashboardView"
        );


    const product =
        document.getElementById(
            "productView"
        );


    const dashboardLink =
        document.getElementById(
            "dashboardLink"
        );


    const productLink =
        document.getElementById(
            "productLink"
        );


    dashboard?.classList.toggle(
        "active-view",
        view === "dashboard"
    );


    product?.classList.toggle(
        "active-view",
        view === "product"
    );


    dashboardLink?.classList.toggle(
        "page-active",
        view === "dashboard"
    );


    productLink?.classList.toggle(
        "active-sub",
        view === "product"
    );


    closeSidebar();


    if (view === "product") {

        renderProducts();

    }

}


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function renderProducts() {

    const emptyBox =
        document.querySelector(
            "#productView .no-products"
        );


    if (!emptyBox) {
        return;
    }


    emptyBox.innerHTML =
        adminProducts
            .map(
                function (product) {

                    return `

                        <div
                            style="
                                padding:16px 0;
                                border-bottom:1px solid #edf0f3;
                            "
                        >

                            <strong>
                                ${product.code}
                                -
                                ${product.name}
                            </strong>

                            <div
                                style="
                                    margin-top:5px;
                                    color:#718096;
                                    font-size:13px;
                                "
                            >
                                ${product.category}
                                •
                                ${money(product.price)}
                                •
                                Stock:
                                ${product.stock}
                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* ==========================================
   ADMIN LOGOUT
========================================== */

function adminLogout() {

    if (
        !confirm(
            "Are you sure you want to logout?"
        )
    ) {

        return;

    }


    data.currentUser =
        null;


    window.location.href =
        "index.html";

}


/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document
            .getElementById(
                "dashboardLink"
            )
            ?.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showAdminView(
                        "dashboard"
                    );

                }
            );


        document
            .getElementById(
                "productLink"
            )
            ?.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showAdminView(
                        "product"
                    );

                }
            );


        document
            .getElementById(
                "sidebarOverlay"
            )
            ?.addEventListener(
                "click",
                closeSidebar
            );


        renderProducts();

    }
);
