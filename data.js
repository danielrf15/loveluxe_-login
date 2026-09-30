/* ==========================================
   LOVE LUXE BY EA
   SHARED ARRAY DATA
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
   CUSTOMER ACCOUNTS
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
   CURRENT USER
========================================== */

let currentUser = null;


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* ======================================
       BODY CARE
    ====================================== */

    {
        id: 1,

        name: "Alada Soap",

        category: "Body Care",

        price: 350,

        description:
            "A gentle soap for everyday skincare.",

        image:
            "images/alada-soap.jpg",

        images: [
            "images/alada-soap.jpg"
        ]
    },


    {
        id: 2,

        name: "Dewy Gluta Soap",

        category: "Body Care",

        price: 199,

        description:
            "A refreshing soap for daily use.",

        image:
            "images/dewy-gluta-soap.jpg",

        images: [
            "images/dewy-gluta-soap.jpg"
        ]
    },


    {
        id: 3,

        name: "Serene Skin Soap",

        category: "Body Care",

        price: 299,

        description:
            "A mild soap made for everyday skincare.",

        image:
            "images/serene-skin-soap.jpg",

        images: [
            "images/serene-skin-soap.jpg"
        ]
    },


    {
        id: 4,

        name: "Vitamin E Whitening Cream",

        category: "Body Care",

        price: 180,

        description:
            "A moisturizing cream for everyday skincare.",

        image:
            "images/vitamin-e-whitening-cream.jpg",

        images: [
            "images/vitamin-e-whitening-cream.jpg"
        ]
    },


    /* ======================================
       PERFUME
    ====================================== */

    {
        id: 5,

        name: "Victoria's Secret Perfume",

        category: "Perfume",

        price: 700,

        description:
            "A sweet and refreshing fragrance.",

        image:
            "images/victorias-secret-perfume.jpg",

        images: [
            "images/victorias-secret-perfume.jpg"
        ],

        scents: [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals"
        ]
    },


    {
        id: 6,

        name: "Bath & Body Works Perfume",

        category: "Perfume",

        price: 600,

        description:
            "A collection of fresh and elegant scents.",

        image:
            "images/bath-body-works-perfume.jpg",

        images: [
            "images/bath-body-works-perfume.jpg"
        ],

        scents: [
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're the One",
            "Vanilla Ease"
        ]
    },


    {
        id: 7,

        name: "Smart Collection Perfume",

        category: "Perfume",

        price: 350,

        description:
            "A classic fragrance inspired by an elegant scent.",

        image:
            "images/smart-collection-perfume.jpg",

        images: [
            "images/smart-collection-perfume.jpg"
        ],

        scents: [
            "Chanel N'5"
        ]
    },


    {
        id: 8,

        name: "Lattafa YARA",

        category: "Perfume",

        price: 390,

        description:
            "A soft and sweet fragrance for everyday wear.",

        image:
            "images/lattafa-yara.jpg",

        images: [
            "images/lattafa-yara.jpg"
        ]
    },


    /* ======================================
       BAGS
    ====================================== */

    {
        id: 9,

        name: "Mini Enzo",

        category: "Bags",

        price: 3590,

        description:
            "A stylish mini bag for everyday use.",

        image:
            "images/mini-enzo.jpg",

        images: [
            "images/mini-enzo.jpg"
        ],

        colors: [
            "Black",
            "Green",
            "Red",
            "Blue"
        ]
    },


    {
        id: 10,

        name: "Mini Bucket Bag",

        category: "Bags",

        price: 2090,

        description:
            "A compact bucket bag with a stylish design.",

        image:
            "images/mini-bucket-bag.jpg",

        images: [
            "images/mini-bucket-bag.jpg"
        ],

        colors: [
            "Dark Blue",
            "Grayish Blue",
            "Blue",
            "Blue Stripes"
        ]
    },


    {
        id: 11,

        name: "Anytime Medium",

        category: "Bags",

        price: 2890,

        description:
            "A versatile medium-sized bag for everyday use.",

        image:
            "images/anytime-medium.jpg",

        images: [
            "images/anytime-medium.jpg"
        ],

        colors: [
            "Black",
            "Tantaupe",
            "Tantaupe Two",
            "White",
            "Clay Two"
        ]
    },


    {
        id: 12,

        name: "Emilio Barrel",

        category: "Bags",

        price: 3590,

        description:
            "A modern barrel-style bag with a spacious design.",

        image:
            "images/emilio-barrel.jpg",

        images: [
            "images/emilio-barrel.jpg"
        ],

        colors: [
            "Dark Brown",
            "Red",
            "Green",
            "Black"
        ]
    },


    /* ======================================
       CLOTHING
    ====================================== */

    {
        id: 13,

        name: "Sophia Skirt",

        category: "Clothing",

        price: 790,

        description:
            "A stylish skirt available in different colors and sizes.",

        image:
            "images/sophia-skirt.jpg",

        images: [
            "images/sophia-skirt.jpg"
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
        ]
    },


    {
        id: 14,

        name: "Nov-Mardi T-Shirt",

        category: "Clothing",

        price: 450,

        description:
            "A simple and comfortable everyday shirt.",

        image:
            "images/nov-mardi-tshirt.jpg",

        images: [
            "images/nov-mardi-tshirt.jpg"
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
        ]
    },


    {
        id: 15,

        name: "Basic Chic01 Terno",

        category: "Clothing",

        price: 950,

        description:
            "A simple matching terno outfit.",

        image:
            "images/basic-chic01-terno.jpg",

        images: [
            "images/basic-chic01-terno.jpg"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ]
    },


    {
        id: 16,

        name: "Sami T-Shirt",

        category: "Clothing",

        price: 790,

        description:
            "A casual shirt available in several colors.",

        image:
            "images/sami-tshirt.jpg",

        images: [
            "images/sami-tshirt.jpg"
        ],

        colors: [
            "Brown",
            "Tan",
            "Pink",
            "Black",
            "Light Blue"
        ]
    }

];


/* ==========================================
   ORDERS
========================================== */

const orders = [];


/* ==========================================
   CART
========================================== */

const cart = [];
