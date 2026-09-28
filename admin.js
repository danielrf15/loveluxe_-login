/* ==========================================
   LOVE LUXE ADMIN DASHBOARD
========================================== */


/* ==========================================
   ADMIN ACCESS CHECK
========================================== */

const adminLoggedIn =
    localStorage.getItem("loveLuxeAdminLoggedIn");

const currentUserData =
    localStorage.getItem("loveLuxeCurrentUser");

let currentAdmin = null;

try {
    if (currentUserData) {
        currentAdmin = JSON.parse(currentUserData);
    }
} catch (error) {
    currentAdmin = null;
}


/*
   Allow access if the admin login flag is TRUE.

   This prevents the dashboard from immediately
   sending the admin back to the login page.
*/

if (
    adminLoggedIn !== "true" &&
    (!currentAdmin || currentAdmin.role !== "admin")
) {
    window.location.href = "index.html";
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


/* ==========================================
   CLOSE SIDEBAR WHEN CLICKING A LINK
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const sidebarLinks =
            document.querySelectorAll(
                ".sidebar a"
            );

        sidebarLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeSidebar();

                    }
                );

            }
        );

    }
);
