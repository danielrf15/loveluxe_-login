/* ==========================================
   LOVE LUXE BY EA
   SHARED ARRAY DATA
========================================== */


/* ==========================================
   ADMIN ACCOUNT
========================================== */

var adminAccount = {

    username: "admin",

    password: "Admin123",

    fullName: "Love Luxe Admin",

    role: "admin"

};


/* ==========================================
   CUSTOMER ACCOUNTS
========================================== */

var customers = [

    {
        fullName: "Test Customer",

        username: "customer",

        password: "Customer123",

        phone: "",

        shippingAddress: {
            houseNumber: "",
            street: "",
            barangay: "",
            city: "",
            province: "",
            postalCode: ""
        },

        role: "customer"
    }

];


/* ==========================================
   CURRENT USER
========================================== */

var currentUser = null;


/* ==========================================
   PRODUCTS
========================================== */

var products = [

    /* BODY CARE */

    {
        id: 1,
        name: "Alada Soap",
        category: "Body Care",
        price: 350,
        image: "images/alada-soap.jpg",
        description: "A refreshing soap for everyday use.",
        options: {},
        images: [
            "images/alada-soap.jpg"
        ]
    },

    {
        id: 2,
        name: "Dewy Gluta Soap",
        category: "Body Care",
        price: 199,
        image: "images/dewy-gluta-soap.jpg",
        description: "A gentle soap for everyday skincare.",
        options: {},
        images: [
            "images/dewy-gluta-soap.jpg"
        ]
    },

    {
        id: 3,
        name: "Serene Skin Soap",
        category: "Body Care",
        price: 299,
        image: "images/serene-skin-soap.jpg",
        description: "A simple skincare soap for daily use.",
        options: {},
        images: [
            "images/serene-skin-soap.jpg"
        ]
    },

    {
        id: 4,
        name: "Vitamin E Whitening Cream",
        category: "Body Care",
        price: 180,
        image: "images/vitamin-e-whitening-cream.jpg",
        description: "A moisturizing cream with Vitamin E.",
        options: {},
        images: [
            "images/vitamin-e-whitening-cream.jpg"
        ]
    },


    /* PERFUME */

    {
        id: 5,
        name: "Victoria's Secret Perfume",
        category: "Perfume",
        price: 700,
        image: "images/victorias-secret-perfume.jpg",
        description: "Choose your preferred Victoria's Secret scent.",
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
        },
        images: [
            "images/victorias-secret-perfume.jpg"
        ]
    },

    {
        id: 6,
        name: "Bath & Body Works Perfume",
        category: "Perfume",
        price: 600,
        image: "images/bath-body-works-perfume.jpg",
        description: "Choose your preferred fragrance.",
        options: {
            scent: [
                "Pure Wonder",
                "Hello Beautiful",
                "A Thousand Wishes",
                "You're The One",
                "Vanilla Ease"
            ]
        },
        images: [
            "images/bath-body-works-perfume.jpg"
        ]
    },

    {
        id: 7,
        name: "Smart Collection Perfume",
        category: "Perfume",
        price: 350,
        image: "images/smart-collection-perfume.jpg",
        description: "Smart Collection Chanel N'5 inspired perfume.",
        options: {
            scent: [
                "Chanel N'5"
            ]
        },
        images: [
            "images/smart-collection-perfume.jpg"
        ]
    },

    {
        id: 8,
        name: "Lattafa YARA",
        category: "Perfume",
        price: 390,
        image: "images/lattafa-yara.jpg",
        description: "Lattafa YARA perfume.",
        options: {},
        images: [
            "images/lattafa-yara.jpg"
        ]
    },


    /* BAGS */

    {
        id: 9,
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        image: "images/mini-enzo.jpg",
        description: "Mini Enzo bag available in different colors.",
        options: {
            color: [
                "Black",
                "Green",
                "Red",
                "Blue"
            ]
        },
        images: [
            "images/mini-enzo.jpg"
        ]
    },

    {
        id: 10,
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        image: "images/mini-bucket-bag.jpg",
        description: "Mini Bucket Bag available in different colors.",
        options: {
            color: [
                "Dark Blue",
                "Grayish Blue",
                "Blue",
                "Blue Stripes"
            ]
        },
        images: [
            "images/mini-bucket-bag.jpg"
        ]
    },

    {
        id: 11,
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        image: "images/anytime-medium.jpg",
        description: "Anytime Medium bag.",
        options: {
            color: [
                "Black",
                "Tantaupe",
                "Tantaupe Two",
                "White",
                "Clay Two"
            ]
        },
        images: [
            "images/anytime-medium.jpg"
        ]
    },

    {
        id: 12,
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        image: "images/emilio-barrel.jpg",
        description: "Emilio Barrel bag.",
        options: {
            color: [
                "Dark Brown",
                "Red",
                "Green",
                "Black"
            ]
        },
        images: [
            "images/emilio-barrel.jpg"
        ]
    },


    /* CLOTHING */

    {
        id: 13,
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        image: "images/sophia-skirt.jpg",
        description: "Sophia Skirt available in different colors and sizes.",
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
        },
        images: [
            "images/sophia-skirt.jpg"
        ]
    },

    {
        id: 14,
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        image: "images/nov-mardi-tshirt.jpg",
        description: "Nov-Mardi T-Shirt.",
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
        },
        images: [
            "images/nov-mardi-tshirt.jpg"
        ]
    },

    {
        id: 15,
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        image: "images/basic-chic01-terno.jpg",
        description: "Basic Chic01 Terno.",
        options: {
            size: [
                "S",
                "M",
                "L",
                "XL",
                "2XL",
                "3XL"
            ]
        },
        images: [
            "images/basic-chic01-terno.jpg"
        ]
    },

    {
        id: 16,
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        image: "images/sami-tshirt.jpg",
        description: "Sami T-Shirt available in different colors.",
        options: {
            color: [
                "Brown",
                "Tan",
                "Pink",
                "Black",
                "Light Blue"
            ]
        },
        images: [
            "images/sami-tshirt.jpg"
        ]
    }

];


/* ==========================================
   ORDERS
========================================== */

var orders = [];


/* ==========================================
   CART
========================================== */

var cart = [];
