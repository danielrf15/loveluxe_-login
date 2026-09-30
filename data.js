/* ==========================================
   LOVE LUXE BY EA
   ARRAY-ONLY DATA
   NO DATABASE
   NO LOCAL STORAGE
========================================== */


/* ==========================================
   ADMIN ACCOUNT
========================================== */

const adminAccount = {
    username: "admin",
    password: "Admin123",
    fullName: "Love Luxe Admin",
    role: "admin"
};


/* ==========================================
   BUILT-IN TEST CUSTOMER ACCOUNT
========================================== */

const customers = [

    {
        fullName: "Test Customer",
        username: "customer",
        password: "Customer123",
        phone: "",
        shippingAddress: "",
        role: "customer"
    }

];


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* =========================
       BODY CARE
    ========================= */

    {
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        description: "A gentle soap for everyday skin care.",
        image: "images/alada-soap.jpg"
    },

    {
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        description: "A refreshing soap for daily use.",
        image: "images/dewy-gluta-soap.jpg"
    },

    {
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        description: "A mild soap for everyday skin care.",
        image: "images/serene-skin-soap.jpg"
    },

    {
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        description: "A moisturizing cream for daily skin care.",
        image: "images/vitamin-e-whitening-cream.jpg"
    },


    /* =========================
       PERFUME
    ========================= */

    {
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        description: "A sweet and refreshing fragrance.",
        image: "images/victorias-secret-perfume.jpg",
        options: {
            scent: [
                "Bare Vanilla",
                "Aqua Kiss",
                "Vanilla Lace",
                "Midnight Bloom",
                "Love Spell",
                "Pure Seduction",
                "Velvet Petals"
            ]
        }
    },

    {
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        description: "A pleasant fragrance for everyday use.",
        image: "images/bath-body-works-perfume.jpg",
        options: {
            scent: [
                "Pure Wonder",
                "Hello Beautiful",
                "A Thousand Wishes",
                "You're the One",
                "Vanilla Ease"
            ]
        }
    },

    {
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        description: "A classic fragrance option.",
        image: "images/smart-collection-perfume.jpg",
        options: {
            scent: [
                "Chanel N'5"
            ]
        }
    },

    {
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        description: "A soft and elegant fragrance.",
        image: "images/lattafa-yara.jpg"
    },


    /* =========================
       BAGS
    ========================= */

    {
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        description: "A stylish mini bag for everyday use.",
        image: "images/mini-enzo.jpg",
        options: {
            color: [
                "Black",
                "Green",
                "Red",
                "Blue"
            ]
        }
    },

    {
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        description: "A compact and stylish bucket bag.",
        image: "images/mini-bucket-bag.jpg",
        options: {
            color: [
                "Dark Blue",
                "Grayish Blue",
                "Blue",
                "Blue Stripes"
            ]
        }
    },

    {
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        description: "A practical medium-sized everyday bag.",
        image: "images/anytime-medium.jpg",
        options: {
            color: [
                "Black",
                "Tantaupe",
                "Tantaupe Two",
                "White",
                "Clay Two"
            ]
        }
    },

    {
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        description: "A fashionable barrel-style bag.",
        image: "images/emilio-barrel.jpg",
        options: {
            color: [
                "Dark Brown",
                "Red",
                "Green",
                "Black"
            ]
        }
    },


    /* =========================
       CLOTHING
    ========================= */

    {
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        description: "A stylish skirt for everyday outfits.",
        image: "images/sophia-skirt.jpg",
        options: {
            color: [
                "Black and White Polka",
                "Light Blue",
                "Gray",
                "Black"
            ],
            size: [
                "S",
                "M",
                "L",
                "XL",
                "2XL",
                "3XL"
            ]
        }
    },

    {
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        description: "A simple and comfortable everyday shirt.",
        image: "images/nov-mardi-tshirt.jpg",
        options: {
            color: [
                "White",
                "Pink",
                "Black"
            ],
            size: [
                "S",
                "M",
                "L",
                "XL",
                "2XL",
                "3XL"
            ]
        }
    },

    {
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        description: "A simple matching outfit for everyday wear.",
        image: "images/basic-chic01-terno.jpg",
        options: {
            size: [
                "S",
                "M",
                "L",
                "XL",
                "2XL",
                "3XL"
            ]
        }
    },

    {
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        description: "A casual and comfortable shirt.",
        image: "images/sami-tshirt.jpg",
        options: {
            color: [
                "Brown",
                "Tan",
                "Pink",
                "Black",
                "Light Blue"
            ]
        }
    }

];


/* ==========================================
   ORDERS ARRAY
========================================== */

const orders = [];


/* ==========================================
   CART ARRAY
========================================== */

const cart = [];
