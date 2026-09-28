/* ==========================================
   ADMIN ACCESS
========================================== */

const adminSession =
    localStorage.getItem("loveLuxeAdminLoggedIn");


if (adminSession !== "true") {

    window.location.href = "index.html";

}


/* ==========================================
   MOBILE SIDEBAR
========================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    sidebar.classList.toggle("open");

    overlay.classList.toggle("active");

}


function closeSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    sidebar.classList.remove("open");

    overlay.classList.remove("active");

}


/* ==========================================
   ADMIN LOGOUT
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
