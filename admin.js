/* ==========================================
   LOVE LUXE ADMIN PORTAL
========================================== */


/* ==========================================
   ADMIN LOGIN CHECK
========================================== */

const adminLoggedIn =
    localStorage.getItem(
        "loveLuxeAdminLoggedIn"
    );


const currentUserData =
    localStorage.getItem(
        "loveLuxeCurrentUser"
    );


let currentAdmin = null;


try {

    if (currentUserData) {

        currentAdmin =
            JSON.parse(
                currentUserData
            );

    }

}

catch (error) {

    currentAdmin = null;

}


/*
    Only allow admin accounts
    to access this page.
*/

if (
    adminLoggedIn !== "true" &&
    (
        !currentAdmin ||
        currentAdmin.role !== "admin"
    )
) {

    window.location.href =
        "index.html";

}



/* ==========================================
   SIDEBAR
========================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById(
            "sidebar"
        );


    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    if (sidebar) {

        sidebar.classList.toggle(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.toggle(
            "active"
        );

    }

}



function closeSidebar() {

    const sidebar =
        document.getElementById(
            "sidebar"
        );


    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}



/* ==========================================
   LOGOUT
========================================== */

function adminLogout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {

        return;

    }


    localStorage.removeItem(
        "loveLuxeAdminLoggedIn"
    );


    localStorage.removeItem(
        "loveLuxeCurrentUser"
    );


    window.location.href =
        "index.html";

}



/* ==========================================
   PAGE SWITCHING
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const dashboardLink =
            document.getElementById(
                "dashboardLink"
            );


        const productLink =
            document.getElementById(
                "productLink"
            );


        const dashboardView =
            document.getElementById(
                "dashboardView"
            );


        const productView =
            document.getElementById(
                "productView"
            );


        /*
            Make sure Dashboard is the
            first page shown.
        */

        showPage(
            "dashboard"
        );



        /* ==================================
           DASHBOARD CLICK
        ================================== */

        if (dashboardLink) {

            dashboardLink.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showPage(
                        "dashboard"
                    );

                    closeSidebar();

                }
            );

        }



        /* ==================================
           ADD / CREATE PRODUCT CLICK
        ================================== */

        if (productLink) {

            productLink.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showPage(
                        "product"
                    );

                    closeSidebar();

                }
            );

        }



        /* ==================================
           OTHER SIDEBAR LINKS
        ================================== */

        const inactiveLinks =
            document.querySelectorAll(
                ".inactive-link"
            );


        inactiveLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        closeSidebar();

                    }
                );

            }
        );



        /* ==================================
           PRODUCT MANAGEMENT TITLE
        ================================== */

        const productTitle =
            document.querySelector(
                ".product-title"
            );


        if (productTitle) {

            productTitle.addEventListener(
                "click",
                function () {

                    /*
                        The title itself does not
                        change pages.
                    */

                }
            );

        }



        /* ==================================
           MOBILE SIDEBAR LINKS
        ================================== */

        const sidebarLinks =
            document.querySelectorAll(
                ".sidebar a"
            );


        sidebarLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth <= 900
                        ) {

                            closeSidebar();

                        }

                    }
                );

            }
        );



        /* ==================================
           SHOW PAGE FUNCTION
        ================================== */

        function showPage(page) {


            /* ------------------------------
               DASHBOARD
            ------------------------------ */

            if (page === "dashboard") {


                if (dashboardView) {

                    dashboardView.classList.add(
                        "active-view"
                    );

                }


                if (productView) {

                    productView.classList.remove(
                        "active-view"
                    );

                }


                /*
                    Dashboard gets yellow
                    highlight.
                */

                if (dashboardLink) {

                    dashboardLink.classList.add(
                        "page-active"
                    );

                }


                /*
                    Add/Create Product loses
                    yellow highlight.
                */

                if (productLink) {

                    productLink.classList.remove(
                        "active-sub"
                    );

                }


                return;

            }



            /* ------------------------------
               PRODUCT MANAGEMENT
            ------------------------------ */

            if (page === "product") {


                if (dashboardView) {

                    dashboardView.classList.remove(
                        "active-view"
                    );

                }


                if (productView) {

                    productView.classList.add(
                        "active-view"
                    );

                }


                /*
                    Dashboard loses yellow
                    highlight.
                */

                if (dashboardLink) {

                    dashboardLink.classList.remove(
                        "page-active"
                    );

                }


                /*
                    Add/Create Product gets
                    yellow highlight.
                */

                if (productLink) {

                    productLink.classList.add(
                        "active-sub"
                    );

                }

            }

        }


    }
);
