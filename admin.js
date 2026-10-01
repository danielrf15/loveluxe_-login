/* ==========================================
   LOVE LUXE ADMIN
   ARRAY-ONLY VERSION
========================================== */

const loveLuxeData =
    window.LoveLuxeData;


/* ==========================================
   ADMIN PRODUCTS
========================================== */

const adminProducts = [

    {
        code: "LL-001",
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        stock: 20
    },

    {
        code: "LL-002",
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        stock: 20
    },

    {
        code: "LL-003",
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        stock: 20
    },

    {
        code: "LL-004",
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        stock: 20
    },

    {
        code: "LL-005",
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        stock: 20
    },

    {
        code: "LL-006",
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        stock: 20
    },

    {
        code: "LL-007",
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        stock: 20
    },

    {
        code: "LL-008",
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        stock: 20
    },

    {
        code: "LL-009",
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        stock: 20
    },

    {
        code: "LL-010",
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        stock: 20
    },

    {
        code: "LL-011",
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        stock: 20
    },

    {
        code: "LL-012",
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        stock: 20
    },

    {
        code: "LL-013",
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        stock: 20
    },

    {
        code: "LL-014",
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        stock: 20
    },

    {
        code: "LL-015",
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        stock: 20
    },

    {
        code: "LL-016",
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        stock: 20
    }

];


/* ==========================================
   FORMAT MONEY
========================================== */

function money(value) {

    return "₱" +
        Number(value).toLocaleString(
            "en-PH",
            {
                minimumFractionDigits: 2
            }
        );

}


/* ==========================================
   SIDEBAR
========================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    if (sidebar) {

        sidebar.classList.toggle("open");

    }


    if (overlay) {

        overlay.classList.toggle("active");

    }

}


function closeSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    if (sidebar) {

        sidebar.classList.remove("open");

    }


    if (overlay) {

        overlay.classList.remove("active");

    }

}


/* ==========================================
   PAGE VIEW
========================================== */

function showAdminView(page) {

    const dashboardView =
        document.getElementById(
            "dashboardView"
        );

    const productView =
        document.getElementById(
            "productView"
        );


    if (dashboardView) {

        dashboardView.classList.remove(
            "active-view"
        );

    }


    if (productView) {

        productView.classList.remove(
            "active-view"
        );

    }


    if (page === "product") {

        if (productView) {

            productView.classList.add(
                "active-view"
            );

        }

    }

    else {

        if (dashboardView) {

            dashboardView.classList.add(
                "active-view"
            );

        }

    }


    document
        .querySelectorAll(
            ".page-active, .active-sub"
        )
        .forEach(
            function(item) {

                item.classList.remove(
                    "page-active"
                );

                item.classList.remove(
                    "active-sub"
                );

            }
        );


    if (page === "product") {

        const productLink =
            document.getElementById(
                "productLink"
            );

        if (productLink) {

            productLink.classList.add(
                "active-sub"
            );

        }

    }

    else {

        const dashboardLink =
            document.getElementById(
                "dashboardLink"
            );

        if (dashboardLink) {

            dashboardLink.classList.add(
                "page-active"
            );

        }

    }


    closeSidebar();

}


/* ==========================================
   RENDER PRODUCTS
========================================== */

function renderProducts() {

    const productList =
        document.querySelector(
            ".product-list-card .no-products"
        );


    if (!productList) {
        return;
    }


    if (adminProducts.length === 0) {

        productList.textContent =
            "No products found.";

        return;
    }


    productList.innerHTML = "";


    adminProducts.forEach(
        function(product) {

            const row =
                document.createElement(
                    "div"
                );


            row.style.display =
                "grid";

            row.style.gridTemplateColumns =
                "100px 1fr 120px 120px";

            row.style.gap =
                "15px";

            row.style.padding =
                "14px 0";

            row.style.borderBottom =
                "1px solid #e2e8f0";


            row.innerHTML = `

                <strong>
                    ${product.code}
                </strong>

                <span>
                    ${product.name}
                </span>

                <span>
                    ${product.category}
                </span>

                <span>
                    ${money(product.price)}
                </span>

            `;


            productList.appendChild(
                row
            );

        }
    );

}


/* ==========================================
   ADMIN LOGOUT
========================================== */

function adminLogout() {

    if (loveLuxeData) {

        loveLuxeData.currentUser =
            null;

    }


    window.location.href =
        "index.html";

}


/* ==========================================
   START
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderProducts();


        const dashboardLink =
            document.getElementById(
                "dashboardLink"
            );


        if (dashboardLink) {

            dashboardLink.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    showAdminView(
                        "dashboard"
                    );

                }
            );

        }


        const productLink =
            document.getElementById(
                "productLink"
            );


        if (productLink) {

            productLink.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    showAdminView(
                        "product"
                    );

                }
            );

        }


        const overlay =
            document.getElementById(
                "sidebarOverlay"
            );


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeSidebar
            );

        }

    }
);
